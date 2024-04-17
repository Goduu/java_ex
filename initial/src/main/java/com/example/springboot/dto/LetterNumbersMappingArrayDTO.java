package com.example.springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LetterNumbersMappingArrayDTO implements Serializable {

    private List<String> myArray;

    public String changeNumberToLetter() {

        String result = "";
        for (int i = 0; i < myArray.size(); i++) {
            String arrayItem = myArray.get(i);

            if (isInteger(arrayItem)) {
                Integer number = Integer.parseInt(arrayItem);
                result = result + numberToLetterMapping.get(number);
            } else {
                result = result + arrayItem;
            }
        }
        return result;
    }

    public static boolean isInteger(String str) {
        try {
            Integer.parseInt(str);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private Map<Integer, String> numberToLetterMapping = Map.ofEntries(
            Map.entry(1, "A"), Map.entry(2, "B"), Map.entry(3, "C"), Map.entry(4, "D"),
            Map.entry(5, "E"), Map.entry(6, "F"), Map.entry(7, "G"), Map.entry(8, "H"),
            Map.entry(9, "I"), Map.entry(10, "J"), Map.entry(11, "K"), Map.entry(12, "L"),
            Map.entry(13, "M"), Map.entry(14, "N"), Map.entry(15, "O"), Map.entry(16, "P"),
            Map.entry(17, "Q"), Map.entry(18, "R"), Map.entry(19, "S"), Map.entry(20, "T"),
            Map.entry(21, "U"), Map.entry(22, "V"), Map.entry(23, "W"), Map.entry(24, "X"),
            Map.entry(25, "Y"), Map.entry(26, "Z"));

}