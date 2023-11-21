from src.arm.armstrong import is_armstrong

def test_armstrong_number():
    is_armstrong_1 = is_armstrong(0)
    assert is_armstrong_1
    is_armstrong_2 = is_armstrong(153)
    assert is_armstrong_2
    is_armstrong_3 = is_armstrong(407)
    assert is_armstrong_3

def test_not_armstrong_number():
    is_armstrong_1 = is_armstrong(2)
    assert not is_armstrong_1
    is_armstrong_2 = is_armstrong(154)
    assert not is_armstrong_2
    is_armstrong_3 = is_armstrong(408)
    assert not is_armstrong_3
