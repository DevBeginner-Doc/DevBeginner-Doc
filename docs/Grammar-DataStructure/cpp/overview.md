::: warning :construction:WARNING
本条目仍在积极施工中，可能存在遗漏或不完善的地方
:::



### 1. C++ 简介

#### 1.1 语言历史

C++ 是由 Bjarne Stroustrup 在 1980 年代初期在贝尔实验室开发的一种编程语言。最初是作为 C 语言的扩展，后来逐渐发展成为一种独立的语言。C++ 保持了 C 语言的高效性，同时引入了面向对象编程的特性。

#### 1.2 特点与优势

- **高效性**：C++ 接近硬件层面，执行速度快。
- **面向对象**：支持类和对象，使得代码更易于组织和管理。
- **泛型编程**：通过模板支持泛型编程，提高代码的复用性。
- **异常处理**：提供了异常处理机制，增强了程序的健壮性。
- **标准库**：拥有功能强大的标准模板库（STL），包括容器、迭代器和算法等。

#### 1.3 编译器和开发环境

- **GCC**：GNU 编译器集合，是 Linux 系统上常用的 C++ 编译器。
- **Clang**：由 LLVM 项目提供，支持多种平台。
- **Visual Studio**：微软提供的集成开发环境，支持 Windows 平台。
- **Code::Blocks**：轻量级的跨平台 IDE，适合初学者。
- **小熊猫：**本人使用，对初学者很友好。详见我的另一篇教程——小熊猫c++编译器

### 2. 基本语法

#### 2.1 变量与数据类型

在 C++ 中，变量是存储数据的容器。变量需要先声明后使用，声明时需要指定数据类型。C++ 支持多种基本数据类型，如 `int`, `float`, `double`, `char` 等。

**示例代码**：

```cpp
int age = 25;      // 整型变量
float height = 1.75; // 浮点型变量
char initial = 'A'; // 字符型变量
```

#### 2.2 运算符

C++ 提供了丰富的运算符，包括算术运算符（如 `+`, `-`, `*`, `/`），关系运算符（如 `>`, `<`, `==`），逻辑运算符（如 `&&`, `||`），位运算符等。

**示例代码**：

```cpp
int a = 10;
int b = 20;
int sum = a + b;    // 算术运算符
bool isGreater = a < b; // 关系运算符
```

#### 2.3 控制结构

控制结构用于控制程序的执行流程。主要的控制结构有：

- **if 语句**：用于条件判断。
- **switch 语句**：用于多条件判断。
- **循环语句**：包括 `for`, `while`, `do-while`。

**示例代码**：

```cpp
if (age > 18) {
    std::cout << "You are an adult." << std::endl;
}

for (int i = 0; i < 10; i++) {
    std::cout << "Hello, C++!" << std::endl;
}
```

#### 学习目标

- 理解 C++ 的历史和基本特性。
- 掌握基本的数据类型和变量声明。
- 熟练使用运算符进行表达式计算。
- 理解并能够使用控制结构控制程序流程。

#### 实践模拟

- **练习1**：编写一个程序，声明并初始化不同类型的变量，并计算它们的和。

```cpp
#include <iostream> // 包含标准输入输出库

int main() {
    int age = 25;      // 声明一个整型变量 age 并初始化为 25
    float height = 1.75; // 声明一个浮点型变量 height 并初始化为 1.75
    char initial = 'A'; // 声明一个字符型变量 initial 并初始化为 'A'

    int sum = age + static_cast<int>(height); // 将 height 转换为整数并加到 age 上，得到和

    std::cout << "Age: " << age << std::endl; // 输出 age 的值
    std::cout << "Height: " << height << std::endl; // 输出 height 的值
    std::cout << "Initial: " << initial << std::endl; // 输出 initial 的值
    std::cout << "Sum: " << sum << std::endl; // 输出计算的和

    return 0; // 程序正常结束
}
```



- **练习2**：使用 `if` 语句判断一个数是否为偶数。

```cpp
#include <iostream> // 包含标准输入输出库

int main() {
    int number = 10; // 声明一个整型变量 number 并初始化为 10

    if (number % 2 == 0) { // 使用取模运算符 % 判断 number 是否为偶数
        std::cout << "The number is even." << std::endl; // 如果是偶数，输出相应的消息
    } else {
        std::cout << "The number is odd." << std::endl; // 如果不是偶数，输出相应的消息
    }

    return 0; // 程序正常结束
}
```



- **练习3**：编写一个循环程序，打印从 1 到 10 的数字。

```cpp
#include <iostream> // 包含标准输入输出库

int main() {
    for (int i = 1; i <= 10; i++) { // 初始化循环变量 i 为 1，循环直到 i 大于 10
        std::cout << i << std::endl; // 每次循环输出 i 的值
    }

    return 0; // 程序正常结束
}
```

### 3. 函数

#### 3.1 定义与调用

函数是一段具有特定功能的代码块，可以被重复调用。在C++中，函数定义通常包括返回类型、函数名、参数列表和函数体。

**示例代码**：

```cpp
// 函数定义
int add(int a, int b) {
    return a + b; // 返回两个参数的和
}

// 函数调用
int main() {
    int result = add(5, 10); // 调用函数并接收返回值
    std::cout << "Sum: " << result << std::endl;
    return 0;
}
```

#### 3.2 参数传递

函数可以通过值传递（pass by value）或引用传递（pass by reference）来接收参数。

- **值传递**：将参数的值复制给函数的形参。
- **引用传递**：将参数的内存地址传递给函数的形参。

**示例代码**：

```cpp
void swap(int &a, int &b) { // 引用传递
    int temp = a;
    a = b;
    b = temp;
}

void printArray(int arr[], int size) { // 数组作为参数（实际上是指针传递）
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}
```

#### 3.3 作用域

作用域决定了变量的可见性和生命周期。局部变量的作用域限于其定义的函数或代码块内。

**示例代码**：

```cpp
void exampleFunction() {
    int localVariable = 42; // 只在 exampleFunction 内可见
}

int main() {
    int globalVariable = 100; // 全局变量，在整个程序中可见
    exampleFunction(); // localVariable 在这里不可见
    return 0;
}
```

#### 学习目标

- 理解函数的定义、调用和作用域。
- 掌握参数的值传递和引用传递。
- 能够编写和使用自定义函数。

#### 实践模拟

- **练习1**：编写一个函数，计算两个数的最大值。

```cpp
#include <iostream>

// 函数声明，用于计算两个数的乘积
int multiply(int a, int b);

int main() {
    int num1 = 6, num2 = 7;
    int product = multiply(num1, num2); // 调用函数并接收返回值
    std::cout << "Product: " << product << std::endl; // 打印乘积
    return 0;
}

// 函数定义，接收两个整数参数并返回它们的乘积
int multiply(int a, int b) {
    return a * b; // 计算并返回乘积
}
```



- **练习2**：使用引用传递编写一个函数，交换两个数的值。

```cpp
#include <iostream>

// 函数声明，使用指针参数来交换两个数
void swapUsingPointers(int *a, int *b);

int main() {
    int x = 30, y = 40;
    std::cout << "Before swap: x = " << x << ", y = " << y << std::endl;
    swapUsingPointers(&x, &y); // 传递 x 和 y 的地址
    std::cout << "After swap: x = " << x << ", y = " << y << std::endl;
    return 0;
}

// 函数定义，使用指针参数来交换两个数的值
void swapUsingPointers(int *pa, int *pb) {
    int temp = *pa; // 使用指针访问值
    *pa = *pb;      // 交换值
    *pb = temp;
}
```



- **练习3**：编写一个函数，打印一个整数数组的所有元素。

```cpp
#include <iostream>

// 函数声明，计算数组所有元素的总和
int sumArray(int arr[], int size);

int main() {
    int arr[] = {1, 2, 3, 4, 5}; // 定义并初始化数组
    int size = sizeof(arr) / sizeof(arr[0]); // 计算数组元素个数
    int sum = sumArray(arr, size); // 调用函数计算总和
    std::cout << "Sum of array elements: " << sum << std::endl; // 打印总和
    return 0;
}

// 函数定义，接收一个整数数组和数组大小，返回所有元素的总和
int sumArray(int arr[], int size) {
    int total = 0; // 初始化总和为 0
    for (int i = 0; i < size; i++) {
        total += arr[i]; // 累加数组元素
    }
    return total; // 返回总和
}
```

### 4. 数组与字符串

#### 4.1 一维数组

一维数组是相同数据类型元素的集合，可以通过索引访问每个元素，并从0开始索引。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int numbers[] = {10, 20, 30, 40, 50}; // 声明并初始化一维数组
    int size = sizeof(numbers) / sizeof(numbers[0]); // 计算数组大小

    // 遍历数组并打印每个元素
    for (int i = 0; i < size; i++) {
        std::cout << "Element at index " << i << ": " << numbers[i] << std::endl;
    }

    return 0;
}
```

#### 4.2 多维数组

多维数组是数组的数组，通常用于表示表格或矩阵。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int matrix[3][2] = {
        {1, 2},
        {3, 4},
        {5, 6}
    }; // 声明并初始化二维数组

    // 遍历二维数组并打印每个元素
    for (int i = 0; i < 3; i++) { // 遍历行
        for (int j = 0; j < 2; j++) { // 遍历列
            std::cout << "Element at [" << i << "][" << j << "]: " << matrix[i][j] << std::endl;
        }
    }

    return 0;
}
```

#### 4.3 C 风格字符串

C 风格字符串是以空字符 `'\0'` 结尾的字符数组。

**示例代码**：

```cpp
#include <iostream>

int main() {
    char str[] = "Hello, C++"; // 声明并初始化 C 风格字符串

    // 打印字符串
    for (char *ptr = str; *ptr != '\0'; ptr++) {
        std::cout << *ptr;
    }
    std::cout << std::endl;

    return 0;
}
```

#### 4.4 `std::string` 类

C++ 提供了 `std::string` 类来处理字符串，它是一个更加安全和方便的字符串处理方式。

**示例代码**：

```cpp
#include <iostream>
#include <string> // 包含 string 库

int main() {
    std::string greeting = "Hello, C++"; // 使用 std::string 声明字符串

    // 打印字符串
    std::cout << greeting << std::endl;

    // 访问字符串中的字符
    std::cout << "First character: " << greeting[0] << std::endl;

    return 0;
}
```

#### 学习目标

- 理解一维和多维数组的声明和使用。
- 掌握 C 风格字符串和 `std::string` 类的基本操作。

#### 实践模拟

- **练习1**：编写一个函数，找出一维数组中的最大值。

```cpp
#include <iostream>

// 函数声明，找出一维数组中的最大值
int findMax(int arr[], int size);

int main() {
    int numbers[] = {34, 78, 12, 45, 67}; // 声明并初始化一维数组
    int size = sizeof(numbers) / sizeof(numbers[0]); // 计算数组大小
    int max = findMax(numbers, size); // 调用函数找出最大值

    std::cout << "Max value in the array: " << max << std::endl; // 打印最大值
    return 0;
}

// 函数定义，找出一维数组中的最大值
int findMax(int arr[], int size) {
    int maxVal = arr[0]; // 假设第一个元素是最大的
    for (int i = 1; i < size; i++) { // 从第二个元素开始比较
        if (arr[i] > maxVal) { // 如果当前元素大于当前最大值
            maxVal = arr[i]; // 更新最大值
        }
    }
    return maxVal; // 返回最大值
}
```



- **练习2**：编写一个函数，反转一个 C 风格字符串。

```cpp
#include <iostream>

// 函数声明，反转 C 风格字符串
void reverseCString(char str[]);

int main() {
    char str[] = "Hello, C++"; // 声明并初始化 C 风格字符串
    std::cout << "Original string: " << str << std::endl; // 打印原始字符串

    reverseCString(str); // 调用函数反转字符串

    std::cout << "Reversed string: " << str << std::endl; // 打印反转后的字符串
    return 0;
}

// 函数定义，反转 C 风格字符串
void reverseCString(char str[]) {
    int length = 0; // 初始化长度
    while (str[length] != '\0') { // 计算字符串长度
        length++;
    }

    int start = 0; // 起始索引
    int end = length - 1; // 结束索引

    while (start < end) { // 当起始索引小于结束索引时
        char temp = str[start]; // 交换字符
        str[start] = str[end];
        str[end] = temp;
        start++; // 移动起始索引
        end--; // 移动结束索引
    }
}
```



- **练习3**：使用 `std::string` 类编写一个函数，计算字符串中元音字母的数量。

```cpp
#include <iostream>
#include <string>

// 函数声明，计算字符串中元音字母的数量
int countVowels(const std::string& str);

int main() {
    std::string str = "Hello, C++"; // 声明并初始化字符串
    int vowelCount = countVowels(str); // 调用函数计算元音字母数量

    std::cout << "Number of vowels in the string: " << vowelCount << std::endl; // 打印元音字母数量
    return 0;
}

// 函数定义，计算字符串中元音字母的数量
int countVowels(const std::string& str) {
    int count = 0; // 初始化元音字母计数为 0
    const char* vowels = "aeiouAEIOU"; // 定义元音字母字符数组

    for (char c : str) { // 遍历字符串中的每个字符
        for (int i = 0; vowels[i] != '\0'; i++) { // 检查当前字符是否是元音
            if (c == vowels[i]) { // 如果是元音
                count++; // 增加计数
                break; // 跳出内层循环
            }
        }
    }
    return count; // 返回元音字母数量
}
```

### 5. 指针与引用

#### 5.1 指针基础

指针是一个变量，它存储了另一个变量的内存地址。这是C++中非常强大的一个特性。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int var = 10; // 声明一个整型变量
    int *ptr = &var; // 声明一个整型指针并指向 var 的地址

    std::cout << "Value of var: " << var << std::endl;
    std::cout << "Address of var: " << &var << std::endl;
    std::cout << "Value of ptr: " << ptr << std::endl; // 打印指针变量的值（内存地址）
    std::cout << "Value pointed by ptr: " << *ptr << std::endl; // 通过指针访问其指向的值
    return 0;
}
```

#### 5.2 引用

引用是另一个名字，用于访问同一个变量。一旦引用被初始化，它就不能被改变指向另一个变量。

**示例代码**：

```cpp
#include <iostream>

void increment(int &ref) {
    ref += 1; // 通过引用直接修改原始变量的值
}

int main() {
    int value = 5;
    std::cout << "Original value: " << value << std::endl;
    increment(value);
    std::cout << "Incremented value: " << value << std::endl;
    return 0;
}
```

#### 5.3 指针与数组

指针和数组紧密相关，数组名本身就是一个指向数组首元素的指针。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = arr; // 让指针 p 指向数组的第一个元素

    for (int i = 0; i < 5; i++) {
        std::cout << "Element " << i << ": " << p[i] << std::endl;
    }

    return 0;
}
```

#### 学习目标

- 理解指针的基本概念和用法。
- 掌握引用的概念以及如何使用引用作为函数参数。
- 理解指针与数组之间的关系。

#### 实践模拟

- **实践1：使用指针交换两个变量的值**

```cpp
#include <iostream>

// 函数声明，使用指针交换两个变量的值
void swap(int *x, int *y);

int main() {
    int a = 10, b = 20;
    std::cout << "Before swap: a = " << a << ", b = " << b << std::endl;

    swap(&a, &b); // 通过地址传递变量

    std::cout << "After swap: a = " << a << ", b = " << b << std::endl;
    return 0;
}

// 函数定义，使用指针交换两个变量的值
void swap(int *x, int *y) {
    int temp = *x; // 保存 x 的值
    *x = *y;       // 将 y 的值赋给 x
    *y = temp;     // 将 x 的原始值赋给 y
}
```

- **实践2：找出整型数组中的最大值和最小值**

```cpp
#include <iostream>

// 函数声明，找出整型数组中的最大值和最小值
void findMaxMin(int arr[], int size, int *max, int *min);

int main() {
    int arr[] = {50, 20, 10, 40, 30};
    int size = sizeof(arr) / sizeof(arr[0]);
    int maxVal, minVal;

    findMaxMin(arr, size, &maxVal, &minVal);

    std::cout << "Max value: " << maxVal << std::endl;
    std::cout << "Min value: " << minVal << std::endl;
    return 0;
}

// 函数定义，找出整型数组中的最大值和最小值
void findMaxMin(int arr[], int size, int *max, int *min) {
    *max = arr[0];
    *min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > *max) *max = arr[i];
        if (arr[i] < *min) *min = arr[i];
    }
}
```

- **实践3：使用引用更新数组中所有元素的值**

```cpp
#include <iostream>

// 函数声明，使用引用更新数组中所有元素的值
void updateArray(int arr[], int size, int updateValue);

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    int updateValue = 10;

    std::cout << "Array before update: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;

    updateArray(arr, size, updateValue);

    std::cout << "Array after update: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
    return 0;
}

// 函数定义，使用引用更新数组中所有元素的值
void updateArray(int arr[], int size, int updateValue) {
    for (int i = 0; i < size; i++) {
        arr[i] += updateValue; // 将更新值加到数组的每个元素上
    }
}
```

### 6. 内存管理

#### 6.1 `new` 和 `delete`

在C++中，`new` 和 `delete` 操作符用于动态内存分配和释放。使用 `new` 分配的内存必须使用 `delete` 来释放，否则会导致内存泄漏。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int *ptr = new int; // 分配一个整型变量的动态内存
    *ptr = 100; // 通过指针初始化值

    std::cout << "Value: " << *ptr << std::endl;

    delete ptr; // 释放动态分配的内存
    ptr = nullptr; // 将指针设置为 nullptr，防止悬挂指针

    return 0;
}
```

#### 6.2 动态内存分配

可以为基本数据类型或对象分配动态内存。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int *array = new int[10]; // 分配一个整型数组的动态内存
    for (int i = 0; i < 10; i++) {
        array[i] = i * i; // 初始化数组元素
    }

    for (int i = 0; i < 10; i++) {
        std::cout << "Element at index " << i << ": " << array[i] << std::endl;
    }

    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr

    return 0;
}
```

#### 6.3 内存泄漏

内存泄漏发生在分配了内存但未正确释放时。这会导致程序消耗越来越多的内存，最终可能导致程序崩溃。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int *ptr = new int; // 分配动态内存
    *ptr = 50;
    std::cout << "Value: " << *ptr << std::endl;

    // 错误：忘记释放内存
    // delete ptr;

    return 0;
}
```

#### 学习目标

- 理解动态内存分配和释放的重要性。
- 掌握 `new` 和 `delete` 的使用。
- 避免内存泄漏。

#### 实践模拟

- **实践1：使用动态内存分配整数数组**

```cpp
#include <iostream>

// 函数声明，使用动态内存分配整数数组并初始化
int* createIntArray(int size, int initialValue);

int main() {
    int size;
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    int* array = createIntArray(size, 0); // 分配并初始化数组

    std::cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        std::cout << array[i] << " ";
    }
    std::cout << std::endl;

    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr

    return 0;
}

// 函数定义，使用动态内存分配整数数组并初始化
int* createIntArray(int size, int initialValue) {
    int* arr = new int[size]; // 分配动态内存
    for (int i = 0; i < size; i++) {
        arr[i] = initialValue; // 初始化数组元素
    }
    return arr; // 返回数组指针
}
```

- **实践2：释放动态分配的整数数组的内存**

```cpp
#include <iostream>

// 函数声明，释放动态分配的整数数组的内存
void deleteIntArray(int*& array);

int main() {
    int size;
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    int* array = new int[size]; // 分配动态内存

    std::cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        std::cout << array[i] << " ";
    }
    std::cout << std::endl;

    deleteIntArray(array); // 释放数组内存

    return 0;
}

// 函数定义，释放动态分配的整数数组的内存
void deleteIntArray(int*& array) {
    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr
}
```

- **实践3：计算动态分配的整数数组中的最大值**

```cpp
#include <iostream>

// 函数声明，计算动态分配的整数数组中的最大值
int findMax(int* array, int size);

int main() {
    int size;
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    int* array = new int[size]; // 分配动态内存
    for (int i = 0; i < size; i++) {
        std::cin >> array[i]; // 输入数组元素
    }

    int max = findMax(array, size); // 计算最大值

    std::cout << "Max value: " << max << std::endl;

    delete[] array; // 释放动态分配的数组内存
    array = nullptr; // 将指针设置为 nullptr

    return 0;
}

// 函数定义，计算动态分配的整数数组中的最大值
int findMax(int* array, int size) {
    int maxVal = array[0]; // 假设第一个元素是最大的
    for (int i = 1; i < size; i++) {
        if (array[i] > maxVal) { // 如果当前元素大于当前最大值
            maxVal = array[i]; // 更新最大值
        }
    }
    return maxVal; // 返回最大值
}
```

### 7. 输入输出

#### 7.1 `iostream` 库

C++的输入输出操作是通过 `iostream` 库进行的。这个库提供了输入流（`std::cin`）和输出流（`std::cout`）。

和很多编程语言一样，c++对具有一定特性的功能的方法等进行封装，形成了库。当我们需要某些功能时，可以自己写，也可以从这些库中提取。

**示例代码**：

```cpp
#include <iostream>

int main() {
    int num;
    std::cout << "Enter an integer: ";
    std::cin >> num; // 从标准输入读取一个整数

    std::cout << "You entered: " << num << std::endl; // 将整数输出到标准输出
    return 0;
}
```

#### 7.2 格式化输入输出

#### 设置字段宽度

使用 `std::setw()` 可以设置输出字段的宽度。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    std::cout << std::setw(10) << "Value" << std::endl; // 设置字段宽度为10
    return 0;
}
```

#### 设置左对齐或右对齐

使用 `std::left` 设置左对齐，`std::right` 设置右对齐。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    std::cout << std::setw(10) << std::left << "Left aligned" << std::endl;
    std::cout << std::setw(10) << std::right << "Right aligned" << std::endl;
    return 0;
}
```

#### 设置数值格式化

设置数值的小数点和千位分隔符。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    double value = 12345.6789;
    std::cout << "Default: " << value << std::endl;
    std::cout << std::fixed << std::setprecision(2) << value << std::endl; // 固定小数点并设置精度
    std::cout << std::scientific << value << std::endl; // 科学计数法
    return 0;
}
```

#### 设置布尔值的输出格式

控制 `bool` 类型的输出格式。

**示例代码**：

```cpp
#include <iostream>
#include <iomanip>

int main() {
    bool flag = true;
    std::cout << "Default: " << flag << std::endl;
    std::cout << std::boolalpha << flag << std::endl; // 以文字形式输出 true/false
    return 0;
}
```

### 7.3 输入输出操作符

#### 重载输入操作符

允许自定义类的输入行为。

**示例代码**：

```cpp
#include <iostream>

class Point {
public:
    int x, y;

    // 重载输入操作符
    friend std::istream& operator>>(std::istream& is, Point& p) {
        is >> p.x >> p.y;
        return is;
    }
};

int main() {
    Point p;
    std::cout << "Enter the point coordinates: ";
    std::cin >> p; // 使用重载的操作符输入 Point 对象
    std::cout << "You entered: (" << p.x << ", " << p.y << ")" << std::endl;
    return 0;
}
```

#### 重载输出操作符

允许自定义类的输出行为。

**示例代码**：

```cpp
#include <iostream>

class Point {
public:
    int x, y;

    // 重载输出操作符
    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        os << "(" << p.x << ", " << p.y << ")";
        return os;
    }
};

int main() {
    Point p{3, 4};
    std::cout << p << std::endl; // 使用重载的操作符输出 Point 对象
    return 0;
}
```

#### 学习目标

- 理解 `iostream` 库的基本使用。
- 掌握格式化输入输出的方法。
- 学习如何重载输入输出操作符。

#### 实践模拟

- **实践1：格式化输出浮点数**

```cpp
#include <iostream>
#include <iomanip>
#include <vector>

int main() {
    std::vector<double> numbers = {3.1415926, 2.7182818, 1.4142136}; // 浮点数列表
    std::cout << std::fixed << std::setprecision(3); // 设置小数点后固定三位

    std::cout << "Formatted floating point numbers: ";
    for (const double& num : numbers) {
        std::cout << num << " "; // 输出每个浮点数
    }
    std::cout << std::endl; // 输出换行

    return 0;
}
```

- **实践2：重载 `Student` 类的 `<<` 操作符**

```cpp
#include <iostream>
#include <string>

class Student {
public:
    std::string name;
    int id;

    // 构造函数
    Student(std::string n, int i) : name(n), id(i) {}

    // 重载输出操作符
    friend std::ostream& operator<<(std::ostream& os, const Student& s) {
        os << "Student(name: " << s.name << ", id: " << s.id << ")";
        return os;
    }
};

int main() {
    Student student("Alice", 12345);
    std::cout << student << std::endl; // 使用重载的操作符输出 Student 对象

    return 0;
}
```

