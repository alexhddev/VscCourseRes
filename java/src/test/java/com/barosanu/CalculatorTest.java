package com.barosanu;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    @Test
	@DisplayName("1 + 1 = 2")
	void addsTwoNumbers() {
		Calculator calculator = new Calculator();
		assertEquals(2, calculator.add(1, 1), "1 + 1 should equal 2");
	}

	@Test
	@DisplayName("3 + 4 = 7")
	void addsOtherTwoNumbers() {
		Calculator calculator = new Calculator();
		assertEquals(7, calculator.add(3, 4), "3 + 4 should equal 7");
	}
    
}
