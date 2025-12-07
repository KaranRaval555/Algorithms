#include <fstream>
#include <iostream>
#include <string>

int partOne();
int partTwo();

int main() {
    std::cout << "Part One :" << partOne() << std::endl;
    std::cout << "Part Two :" << partTwo() << std::endl;
}

int partOne() {
    std::ifstream File("input.txt");

    if(!File.is_open()) {
        std::cerr << "Couldn't open given file";
    }

    std::string line;
    int pos = 50;
    int count = 0;

    while (std::getline(File, line)) {
        char direction = line[0];
        int distance = std::stoi(line.substr(1));

        if(direction == 'L') {
            pos -= distance;
        }
        else{
            pos += distance;
        }
        pos %= 100;
        if(pos < 0){
            pos = 100 + pos;
        }
        if(pos == 0) count++;
    }
    File.close();
    return count;
}

int partTwo () {
    std::ifstream File("input.txt");

    if(!File.is_open()) {
        std::cerr << "Couldn't open given file";
    }

    std::string line;
    int pos = 50;
    int count = 0;

    while (std::getline(File, line)) {
        char direction = line[0];
        int distance = std::stoi(line.substr(1));

        for (int i = 0; i < distance; i++) {
            if(direction == 'L') {
                pos -= 1;
            }
            else{
                pos += 1;
            }
            pos %= 100;
            if(pos < 0){
                pos = 100 + pos;
            }
            if(pos == 0) count++;
        }
    }
    File.close();
    return count;
}
