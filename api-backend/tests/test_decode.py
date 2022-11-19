from steganography.core import Decode

decode = Decode()

IMAGE = "tests/images/image_test_decode.bmp"
SECRET_MESSAGE = "Teste de decodificação"


def test_if_has_method_decode():
    assert hasattr(decode, "decode")


def test_if_has_attributes():
    assert hasattr(decode, "BIT_DOT")
    assert hasattr(decode, "BITSPERCHAR")
    assert hasattr(decode, "DOT")
    assert hasattr(decode, "BITPERPIXEL")


def test_if_unable_to_access_certain_methods():
    assert not hasattr(decode, "__decode_byte")
    assert not hasattr(decode, "__lsb_decode")
    assert not hasattr(decode, "__group_bits")
    assert not hasattr(decode, "__pixels_to_binary")
    assert not hasattr(decode, "__decode_message")


def test_decode():
    message = decode.decode(IMAGE)
    assert message == SECRET_MESSAGE
