package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.dto.CompareNumbersDTO;
import com.example.springboot.dto.LetterNumbersMappingArrayDTO;
import com.example.springboot.dto.NumberParsingDTO;
import com.example.springboot.dto.SortNumbersDTO;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HelloController {

	@GetMapping("/")
	public Map<String, String> index() {
		Map<String, String> map = Map.of("message", "Greetings from Spring Boot!");
		return map;
	}

	@GetMapping("/test")
	public String test() {
		return "Test";
	}

	@PostMapping(value = "/numberParsing")
	public ResponseEntity<String> numberParsing(@RequestBody NumberParsingDTO payload) {
		Float number1 = Float.parseFloat(payload.getNumber1());
		Float number2 = payload.getNumber2();
		Float number3 = (float) payload.getNumber3();
		return ResponseEntity.ok(
				" Sum from " + number1 + " + " + number2 + " + " + number3 + " = " + (number1 + number2 + number3));
	}

	@PostMapping(value = "/compareNumbers")
	public ResponseEntity<String> compareNumbers(@RequestBody CompareNumbersDTO payload) {
		Float number1 = payload.getNumber1();
		Float number2 = payload.getNumber2();
		if (number1 > number2) {
			return ResponseEntity.ok(number1 + " is greater than " + number2);
		} else if (number1 < number2) {
			return ResponseEntity.ok(number1 + " is less than " + number2);
		} else {
			return ResponseEntity.ok(number1 + " is equal to " + number2);
		}

	}

	@PostMapping(value = "/letterNumbersMappingArray")
	public ResponseEntity<String> letterNumbersMappingArray(@RequestBody LetterNumbersMappingArrayDTO payload) {
		return ResponseEntity.ok(payload.changeNumberToLetter());
	}

	@PostMapping(value = "/sortNumbers")
	public ResponseEntity<List<Float>> sortNumbers(@RequestBody SortNumbersDTO payload) {
		payload.sortNumbers();
		return ResponseEntity.ok(payload.getMyArray());
	}

	@RequestMapping("/square/{number}")
	public Float square(@PathVariable("number") float myNumber) {
		return myNumber * myNumber;
	}

	@RequestMapping("/multiplication/{object:.*}/")
	public Float postObject(@PathVariable("number1") float number1, @PathVariable("number2") float number2) {
		return number1 * number2;
	}

}
