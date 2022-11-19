import os
import uuid

from PIL import Image
from steganography.core import Encode

# CONSTANTS
MESSAGE = "Hi!"
IMAGE = "tests/images/image_test.bmp"
DIRECTORY = "tests/temp/"


class EncodeTest(Encode):
    # change the directory to a temporary directory
    def save_image(self, pixels):
        new_image = Image.new("RGB", self.image.size)
        new_image.putdata(pixels)
        path = f"{DIRECTORY}{uuid.uuid4().hex}.bmp"
        new_image.save(path, format="BMP")
        return path


encode = EncodeTest()


def test_if_has_method_encode():
    assert hasattr(encode, "encode")


def test_if_has_attributes():
    assert hasattr(encode, "BIT_DOT")
    assert hasattr(encode, "BITSPERCHAR")


def test_if_unable_to_access_certain_methods():
    assert not hasattr(encode, "__encode_byte")
    assert not hasattr(encode, "__group_bits")
    assert not hasattr(encode, "__encode_message")


def test_encode():
    path = encode.encode(IMAGE, MESSAGE)
    assert path.startswith(DIRECTORY)
    assert path.endswith(".bmp")
    assert os.path.isfile(path)
    os.remove(path)
