package com.example.springboot.service;

import org.springframework.http.ResponseEntity;

import com.example.springboot.dto.CompareNumbersDTO;
import com.example.springboot.dto.LetterNumbersMappingArrayDTO;
import com.example.springboot.dto.NumberParsingDTO;
import com.example.springboot.dto.SortNumbersDTO;
import com.example.springboot.utils.ResponseObject;
import java.util.List;

public class FunctionsService {

    public ResponseObject<String> numberParsing(NumberParsingDTO payload) {

        String numberParsingCode = """
                    public String numberParsing(NumberParsingDTO payload) = {

                    Float number1 = Float.parseFloat(payload.getNumber1());
                    Float number2 = payload.getNumber2();
                    Float number3 = (float) payload.getNumber3();
                    return ResponseEntity.ok(
                            " Sum from " + number1 + " + " + number2 + " + " + number3 + " = " + (number1 + number2 + number3));

                }
                """;

        Float number1 = Float.parseFloat(payload.getNumber1());
        Float number2 = payload.getNumber2();
        Float number3 = (float) payload.getNumber3();
        ResponseEntity<String> responseEntity = ResponseEntity.ok(
                " Sum from " + number1 + " + " + number2 + " + " + number3 + " = " + (number1 + number2 + number3));

        return new ResponseObject<>(responseEntity, numberParsingCode);

    }

    public ResponseObject<String> compareNumbers(CompareNumbersDTO payload) {

        String compareNumbers = """
                public String compareNumbers(CompareNumbersDTO payload) {
                    Float number1 = payload.getNumber1();
                    Float number2 = payload.getNumber2();

                    if (number1 > number2) {
                        return ResponseEntity.ok(number1 + " is greater than " + number2);
                    } else if (number1 < number2) {
                        return ResponseEntity.ok(number1 + " is less than " + number2);
                    } else {
                        return ResponseEntity.ok(number1 + " is equal to " + number2);
                    }
                    """;

        Float number1 = payload.getNumber1();
        Float number2 = payload.getNumber2();

        ResponseEntity<String> responseEntity;

        if (number1 > number2) {
            responseEntity = ResponseEntity.ok().body(number1 + " is greater than " + number2);
        } else if (number1 < number2) {
            responseEntity = ResponseEntity.ok().body(number1 + " is less than " + number2);
        } else {
            responseEntity = ResponseEntity.ok().body(number1 + " is equal to " + number2);
        }

        return new ResponseObject<>(responseEntity, compareNumbers);

    }

    public ResponseObject<String> letterNumbersMappingArray(LetterNumbersMappingArrayDTO payload) {

        String letterNumbersMappingArray = """
                public String letterNumbersMappingArray(LetterNumbersMappingArrayDTO payload) {
                    return ResponseEntity.ok(payload.changeNumberToLetter());
                }
                """;

        ResponseEntity<String> responseEntity = ResponseEntity.ok(payload.changeNumberToLetter());

        return new ResponseObject<>(responseEntity, letterNumbersMappingArray);

    }

    public ResponseObject<List<Float>> sortNumbers(SortNumbersDTO payload) {
        String sortNumbersCode = """

                public void quickSort(int low, int high) {
                    if (low < high) {
                        int pi = partition(low, high);
                        quickSort(low, pi - 1);
                        quickSort(pi + 1, high);
                    }
                }

                public void sortNumbers() {
                    quickSort(0, myArray.size() - 1);
                }

                public List<Float> sortNumbers(SortNumbersDTO payload) {
                    payload.sortNumbers();
                    return ResponseEntity.ok(payload.getMyArray());
                }
                """;

        payload.sortNumbers();
        ResponseEntity<List<Float>> responseEntity = ResponseEntity.ok(payload.getMyArray());
        return new ResponseObject<>(responseEntity, sortNumbersCode);
    }

    public ResponseObject<Float> square(float myNumber) {
        String squareCode = """
                public Float square(float myNumber) {
                    return myNumber * myNumber;
                }
                """;

        Float result = myNumber * myNumber;
        ResponseEntity<Float> responseEntity = ResponseEntity.ok(result);
        return new ResponseObject<>(responseEntity, squareCode);
    }

    public ResponseObject<Float> postObject(float number1, float number2) {
        String postObjectCode = """
                public Float postObject(float number1, float number2) {
                    return number1 * number2;
                }
                """;

        Float result = number1 * number2;
        ResponseEntity<Float> responseEntity = ResponseEntity.ok(result);
        return new ResponseObject<>(responseEntity, postObjectCode);
    }

}
