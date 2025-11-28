#include <utility>
template<typename T>

void selectionSort(T arr, int n) {
    int min;
    for (int i = 0; i < n; i++) {
        min = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) min = i;
        }
        if (min != i) std::swap(arr[i],arr[min]);
    }
}
