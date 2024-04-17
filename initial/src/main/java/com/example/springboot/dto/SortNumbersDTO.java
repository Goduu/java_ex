package com.example.springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.util.List;

/**
 * Represents a data transfer object for sorting numbers.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SortNumbersDTO implements Serializable {

    private List<Float> myArray;

    /**
     * Sorts the numbers in the array using the quicksort algorithm.
     *
     * @param low  the starting index of the subarray to be sorted
     * @param high the ending index of the subarray to be sorted
     */
    public void quickSort(int low, int high) {
        if (low < high) {
            int pi = partition(low, high);
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        }
    }

    /**
     * Partitions the array and returns the index of the pivot element.
     *
     * @param low  the starting index of the subarray to be partitioned
     * @param high the ending index of the subarray to be partitioned
     * @return the index of the pivot element
     */
    private int partition(int low, int high) {
        float pivot = myArray.get(high);
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (myArray.get(j) < pivot) {
                i++;
                float temp = myArray.get(i);
                myArray.set(i, myArray.get(j));
                myArray.set(j, temp);
            }
        }
        float temp = myArray.get(i + 1);
        myArray.set(i + 1, myArray.get(high));
        myArray.set(high, temp);
        return i + 1;
    }

    /**
     * Sorts the numbers in the array.
     */
    public void sortNumbers() {
        quickSort(0, myArray.size() - 1);
    }

}