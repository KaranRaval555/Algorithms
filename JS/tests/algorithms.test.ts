import { describe, it, expect } from "vitest";
import { binarySearch } from "../algorithms/Searching/binarySearch";
import { linear_search } from "../algorithms/Searching/linearSearch";

describe("Searching algorithms", () => {
  it("binarySearch finds items and returns -1 when missing", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(binarySearch(arr, 4)).toBe(3);
    expect(binarySearch(arr, 7)).toBe(-1);
  });

  it("linear_search finds items and returns -1 when missing", () => {
    const arr = [10, 20, 30];
    expect(linear_search(arr, 20)).toBe(1);
    expect(linear_search(arr, 99)).toBe(-1);
  });
});
