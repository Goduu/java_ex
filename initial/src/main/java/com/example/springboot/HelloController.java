package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.dto.CompareNumbersDTO;
import com.example.springboot.dto.LetterNumbersMappingArrayDTO;
import com.example.springboot.dto.NumberParsingDTO;
import com.example.springboot.dto.SortNumbersDTO;
import com.example.springboot.service.FunctionsService;
import com.example.springboot.utils.ResponseObject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HelloController {

	FunctionsService functionsService = new FunctionsService();

	@GetMapping("/")
	public ResponseObject<String> index() {
		return functionsService.helloWorld();
	}

	@GetMapping("/test")
	public String test() {
		return "Test";
	}

	@PostMapping(value = "/numberParsing")
	public ResponseObject<String> numberParsing(@RequestBody NumberParsingDTO payload) {
		return functionsService.numberParsing(payload);
	}

	@PostMapping(value = "/compareNumbers")
	public ResponseObject<String> compareNumbers(@RequestBody CompareNumbersDTO payload) {
		return functionsService.compareNumbers(payload);
	}

	@PostMapping(value = "/letterNumbersMappingArray")
	public ResponseObject<String> letterNumbersMappingArray(@RequestBody LetterNumbersMappingArrayDTO payload) {
		return functionsService.letterNumbersMappingArray(payload);
	}

	@PostMapping(value = "/sortNumbers")
	public ResponseObject<List<Float>> sortNumbers(@RequestBody SortNumbersDTO payload) {
		return functionsService.sortNumbers(payload);
	}

	@RequestMapping("/square/{number}")
	public ResponseObject<Float> square(@PathVariable("number") float myNumber) {
		return functionsService.square(myNumber);
	}

	@RequestMapping("/multiplication/{object:.*}/")
	public ResponseObject<Float> postObject(@PathVariable("number1") float number1,
			@PathVariable("number2") float number2) {
		return functionsService.postObject(number1, number2);
	}

}
