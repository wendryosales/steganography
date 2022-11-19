from steganography.core import Message

message = Message()

# CONSTANTS
MESSAGE_HI = "Hi!"
BINARY_MESSAGE = "01001000011010010010000100101110"
ASCII_MESSAGE = [72, 105, 33]
GROUP_BITS = [
    "01001000",
    "01101001",
    "00100001",
]


def test_if_has_methods():
    assert hasattr(message, "encode_message")
    assert hasattr(message, "chars_to_ascii")
    assert hasattr(message, "_int_to_binary")


def test_encode_message():
    assert message.encode_message(MESSAGE_HI) == BINARY_MESSAGE


def test_chars_to_ascii():
    assert message.chars_to_ascii(MESSAGE_HI) == ASCII_MESSAGE


def test_int_to_binary():
    assert message._int_to_binary(ASCII_MESSAGE) == GROUP_BITS
