# 数组

## (一)&nbsp;数组是什么？

数组是C语言中重要的数据类型，它是一个容器，其中存放了许多数据类型相同的元素。

打个比方，数组就像一个柜子，每个格子放了一个写着数字或字母的小球，数组一旦创建，就不能再改变大小。

## (二)&nbsp;数组的格式？

数组的格式为：数据类型 数组名[元素数量]。例如：

```c
#include<stdio.h>
int main(){
    int number[100];
    int i;
    //读入10个数并依次存储到数组中
    for(i = 0; i < 10; i++){
        scanf("%d",&number[i]);
    }
    //循环遍历数组，输出数组中存储的元素
    for(i = 0; i < 10; i++){
        printf("%d ",number[i]);
    }
    printf("\n");
    return 0;
}
```

## (三)&nbsp;访问数组

在C语言中,遍历数组指的是按照一定的顺序访问数组中的每个元素。方括号[]中的数字表示的是要访问的元素的位置，即它是数组中第几个元素，这个数字被称为数组的下标。

:::warning
数组的下标从 $0$ 开始，数组的下标不能超过数组的长度。
:::

```c
#include<stdio.h>
int main(){
    const int a = 10;//const修饰的变量不能被修改数值
    //也就是说如果我们再加一行a = 7会直接报错
    int number[a];//定义一个数组，数组的长度为a

    for(int i = 0; i < a; i++){
        number[i] = i;
    }
    for(int i = 0; i < a; i++){
        printf("%d ",number[i]);
    }
    return 0;
}
```

## (四)&nbsp;数组初始化

### 1.&nbsp;先创建，后初始化

```c
#include<stdio.h>
int main(){
    int number[10];
    for(int i = 0; i < 10; i++){
        number[i] = i;
    }
    return 0;
}
```

### 2.&nbsp;数组的集成初始化

```c
#include<stdio.h>
int main(){
    int number[] = {1,2,8,4,5,6,17,8,19,10};//数组初始化
    //大括号中的数一次用于初始化数组中的每个单元
    //[]内可以不写，IDE会自动填充
}
```

### 3.&nbsp;(C99only)(不常用)

```c
#include<stdio.h>
int main(){
    int a[10] = {
        [0] = 1,
        [2] = 3,6,9
    };
    //给第一个元素(a[0])赋值为1，给第三个元素(a[2])赋值为3，给第四个元素(a[3])赋值为6，给第五个元素(a[4])赋值为9
    //其他位置的值都为0
    return 0;
}
```

::: warning 
不能像下面这样赋值：

```c
#include<stdio.h>
int main(){
    int a[10];
    for(int i = 0; i < 10; i++){
        a[i] = i;
    }
    int b[] = a;//不能这样赋值()
}
```
:::

## (五)&nbsp;数组的大小

数组的大小由数组的元素个数决定，数组的大小是固定的，不能改变。

如何查看数组的大小呢？使用 `sizeof` 操作符即可。C语言中, `sizeof` 用于获取数据类型或变量的大小，单位是字节。它的用法如下：

```c
//相信大家已经对程序整体的结构有了一个大致的了解，从这里开始我有些地方就只给代码片段了，
printf("%d",sizeof(data_type));//data_type为数据类型
printf("%d",sizeof(variable));//variable为变量名字
//比如我们想看看int类型在我们的电脑上究竟占几个字节
printf("%d",sizeof(int));//data_type为数据类型
```

明白了 `sizeof` 的用法后，我们再看看如何获取数组的大小：

```c
#include<stdio.h>
int main(){
    int a[10];

    for(int i = 0; i < 10; i++){
        a[i] = i;
    }

    int size = sizeof(a) / sizeof(a[0]);
    printf("%d",size);//输出10
    return 0;
}
```

## (六)&nbsp;二维数组

二维数组可以看作是数组的数组，通常用于表示矩阵或表格数据。

```c
#include<stdio.h>
int main(){
    //声明一个3 * 4的二维数组
    int arr1[3][4];//可以想象成一个3行4列的表格
    int arr2[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    }; // 声明并初始化一个 3x4 的二维数组
    arr1[0][1] = 20; // 修改第1行第2列(行和列的下标都是从0开始)的元素值

    return 0;
}
```

## (七)&nbsp;字符数组

C语言用字符数组存放字符串，字符数组中的各元素依次存放字符串的各字符。

例如：`char s[10]="abc defgh";` ，该数组在计算机中存储的形式为：

| s[0] | s[1] | s[2] | s[3] | s[4] | s[5] | s[6] | s[7] | s[8] | s[9] |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| a    | b    | c    | 空格 | d    | e    | f    | g    | h    | \0   |

结尾的 `\0` 是字符串的结束标志，表示字符串结束，一般不需要我们手动添加，编译器会自动加上。