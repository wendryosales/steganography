import math
import uuid

from PIL import Image


class Message:
    BITPERPIXEL = 3
    BIT_DOT = '00101110'
    BITSPERCHAR = 8
    DOT = '.'

    def encode_message(self, message: str) -> str:
        """ Convert the message to binary """
        message = message + self.DOT
        message = self.chars_to_ascii(message)
        return "".join(self._int_to_binary(message))

    @staticmethod
    def chars_to_ascii(message: str) -> list:
        """ Convert the message to ascii """
        return [ord(char) for char in message]

    def _int_to_binary(self, byte_tuple: tuple) -> list:
        """ Convert the list of Decimal integers to binary """
        return list(
            bin(byte)[2:].rjust(self.BITSPERCHAR, "0")
            for byte in byte_tuple
        )


class Encode(Message):
    def encode(self, image: str, secret_message: str):
        """ Get the pixels from the image and encode the message """
        image = Image.open(image)
        self.image = image
        width, height = image.size
        self.image_capacity = width * height * self.BITPERPIXEL
        pixels = list(image.getdata())
        return self.__lsb_encode(pixels, secret_message)

    def __lsb_encode(self, pixels: list, secret_message: str):
        """ Encode the message into the pixels """
        message = self.encode_message(secret_message)
        if len(message) > self.image_capacity:
            raise Exception(
                f"Message too long for image. \
                Message length: {len(message)}, \
                Image capacity: {self.image_capacity}"
            )
        return self.__generate_new_image(pixels, message)

    def __generate_new_image(self, original_pixels: list, message: str):
        """ Generate the new image with the encoded message """
        pixels_necessary = self.__pixels_necessary(message)
        new_pixels = list()
        for i in range(pixels_necessary):
            pixel = self.__encode_pixel(
                original_pixels[i], message[i * 3: (i + 1) * 3]
            )
            new_pixels.append(pixel)

        new_pixels.extend(original_pixels[pixels_necessary:])
        return self.__save_image(new_pixels)

    def save_image(self, pixels):
        """ Save the image """
        new_image = Image.new("RGB", self.image.size)
        new_image.putdata(pixels)
        path = f"media/images-hidden/{uuid.uuid4().hex}.bmp"
        new_image.save(path, format='BMP')
        return path

    def __pixels_necessary(self, message_bits: str) -> int:
        """ Calculate the number of pixels necessary to encode the message """
        return math.ceil(len(message_bits) / self.BITPERPIXEL)

    @staticmethod
    def __encode_pixel(pixel: tuple, message: str) -> tuple:
        if len(message) < 3:
            message = message.ljust(3, "0")
        r, g, b = pixel
        r = Steganography.__encode_byte(r, message[0])
        g = Steganography.__encode_byte(g, message[1])
        b = Steganography.__encode_byte(b, message[2])
        return r, g, b

    @staticmethod
    def __encode_byte(byte: int, message: str) -> int:
        return (byte & 0b11111100) | int(message, 2)


class Decode(Message):
    def decode(self, image: str):
        """ Get the pixels from the image and decode the message """
        image = Image.open(image)
        pixels = list(image.getdata())
        return self.__lsb_decode(pixels)

    def __lsb_decode(self, pixels: list):
        """ Decode the message from the pixels """
        binary_pixels = self.__pixels_to_binary(pixels)
        encode_pixels = list()
        for byte in binary_pixels:
            encode_pixels.append(self.__decode_byte(byte))

        binary_chars = self.__group_bits(encode_pixels)
        return self.__decode_message(binary_chars)

    def __pixels_to_binary(self, pixels: list):
        """ Convert the pixels to binary """
        bits_list = list()
        for pixel in pixels:
            for bit in self._int_to_binary(pixel):
                bits_list.append(bit)
        return bits_list

    def __decode_byte(self, byte) -> str:
        """ Decode the byte returning the last bit """
        return byte[-1]

    def __group_bits(self, bits: list) -> list:
        """ Group the bits into bytes """
        return [
            "".join(bits[i: i + self.BITSPERCHAR])
            for i in range(0, len(bits), self.BITSPERCHAR)
        ]

    def __decode_message(self, bits: list) -> str:
        """
            Decode the message.
            Find de dot and return the message
        """
        message = []
        while bits[0] != self.BIT_DOT:
            message.append(bits[0])
            bits.pop(0)
        return "".join([chr(int(char, 2)) for char in message])


class Steganography(Decode, Encode, Message):
    def __str__(self) -> str:
        return super().__str__()


if __name__ == "__main__":
    instance = Steganography()
