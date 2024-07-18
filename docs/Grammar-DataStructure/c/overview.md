::: warning :construction:WARNING
本条目仍在积极施工中，可能存在遗漏或不完善的地方
:::

# C语言入门与进阶

## 一、&nbsp;初识C语言

### (一)简介
&emsp;&emsp;C语言是一种通用的、面向过程的编程语言，具有高效、灵活、可移植性强等特点。它年代诞生于[贝尔实验室]，由Dennis Ritchie在B语言的基础上开发而来。<br>
&emsp;&emsp;C程序的源代码文件通常使用.c结尾。

### (二)&nbsp;语言标准

&emsp;&emsp;这部分了解即可

#### 1.&nbsp;K&R C

&emsp;&emsp;1978年，Ritchie和程序专家Kernighan合写了著名的《The C Programming Language》，将C语言推向全世界，由这本书定义的C语言后来被人们称作 K&R C。

#### 2.&nbsp;ANSI C（又称 C89 或 C90）标准

&emsp;&emsp;1994年，ANSI/ISO联合委员会（C9X委员会）修订并发布了一套C标准。

#### 3.&nbsp;ISO C（又称 C99）标准

&emsp;&emsp;1999年，ISO（国际标准化组织）发布了C99标准，并最终发布了C11标准。

### (三)&nbsp;程序设计步骤

&emsp;&emsp;相信有不少同学是第一次接触编程语言，所以我觉得还是有必要在这里大概描述一下基本的C语言编写步骤，以让大家对这门面向过程的语言有大致的理解。

#### 1.&nbsp;定义程序的目标

&emsp;&emsp;C语言是一种面向过程的编程语言。在编写代码时，通常按照解决问题的流程逐步编写代码，这与我们日常的思维方式相似。
&emsp;&emsp;在动手写程序之前，首先自己要明确自己想做什么，思考你的程序需要哪些东西，要进行哪些计算和控制，以及程序应该返回给你什么信息。

#### 2.&nbsp;设计程序

&emsp;&emsp;想清楚程序要做什么之后，就应该考虑如何用程序来完成它。设计程序时，需要考虑程序中需要哪些变量，以及这些变量需要如何存储和操作。

#### 3.&nbsp;编写代码

&emsp;&emsp;在设计好程序后，我们就可以编写代码来实现它。也就是把刚才的思路用C语言来实现。
&emsp;&emsp;在开始编写之前，确保你的输入法已经调到了英文模式，对人来说英文的标点符号可能和中文的大差不差，但是对于机器来说，英文标点和中文标点截然不同
&emsp;&emsp;切记，程序最好要有必要的注释(必要的注释，而不是什么都加注释)，否则可能会出现今天这堆代码只有你能看懂，明天一觉醒来这堆玩意你自己也看不懂的情况(尤其是代码很长或代码分成了多个文件的时候)。也有可能修改的时候动了这个忘了那个，改掉一个bug多了三个bug。

#### 4.&nbsp;编译

&emsp;&emsp;这一步是由我们的编译器自动完成的，我们只需要点击`编译`(有的编译器甚至没有这个按钮，直接点`运行`按钮就行了)

#### 5.&nbsp;运行程序

&emsp;&emsp;编译完成之后，我们就能获得一个可执行文件(.exe)，可以在IDE中通过菜单中的选项来执行这个文件，也可以在命令行中使用指令或双击运行这个文件。

#### 6.&nbsp;测试和调试程序

&emsp;&emsp;正常情况下，程序能正常运行。但是，有时候，甚至是大多数情况下，程序会出现一些奇奇怪怪的问题(bug)。查找并修复程序错误的过程叫调试。逐行执行代码并查看你的变量的数值或者循环的次数，通过这种方式，我们能精确地发现问题在哪里。
&emsp;&emsp;试着建个文档，把自己犯过的错记下来，未来某天再看这个文档的时候，说不定会有意外的收获。(刚开始可能出现一些简单的错误，比如main写成mian，stdio写成studio之类的，我们都犯过这样的错误。但是随着学习进度的推进，简单的错误就不会再出现了)

## 二、&nbsp;C语言概述

&emsp;&emsp;上一章我们对C语言的历史和设计思路有了大致的概念，这一章我们来聊聊C语言中的一些名词和基本概念

### (一)&nbsp;
<br>

#### 1.&nbsp;第一个C语言程序

&emsp;&emsp;下面我们来看一个基础的C语言示例，看不懂也没关系，后面会拆分开详细讲解

```c
#include <stdio.h>//引入名为stdio的文件的内容，stdio是C语言的标准库
int main(void)//main是主函数，也是我们程序的入口
{//函数体开始
    //在两个斜杠//后面的字符都是注释，是给人看的，编译器编译的时候会跳过它
    //每一行末尾记得加分号，表示这行代码已经写完了
    //下面创建一个名为num的变量，这个变量是int(整数)类型
    int num;
    //给变量num赋值为1 
    num = 1;
    //调用printf函数，输出 Hello World!
    printf("Hello World!");
    //返回0，程序结束
    return 0;
}//main函数结束
```

### (二).&nbsp;细节剖析

&emsp;&emsp;看完上面那个程序，也许你有很多疑惑，下面我们把它拆分开细细说说

#### 1.&nbsp;#include<stdio.h>

&emsp;&emsp;#include<stdio.h>这行代码是一条C预处理器指令，说白了就是编译器在处理代码之前，会先看一下这个命令指定的文件，这样引入的文件叫**头文件**。头文件里面放的是一些预先写好的函数和变量。这么说可能有点抽象，打个比方：我们看过元素周期表之后，才知道Os是锇元素、Ir是铱元素；与此相同，编译器看过#include引入的文件之后，才知道printf是输出函数、scanf是输入函数，以及你写这些函数的时候它要做什么(函数后面会详细讲，不用在这里纠结)。

#### 2.&nbsp;注释

&emsp;&emsp;在C语言中有两种注释，下面我举几个例子：

```c
//这是一个注释，它只能这样写
//这里是注释部分
这里不是注释部分，因为它前面（指本行）没有双斜杠
//也就是说，这种注释只能写成一行

/* 这是另一种注释，它可以写成多行，
只要注释以斜杠加星号开头，以星号加斜杠结尾即可*/
```

#### 3.&nbsp;main()函数

&emsp;&emsp;C程序一定从main()函数开始执行，现阶段我们知道这一点就可以了，更多的东西会在后面的函数章节讲到。

#### 4.&nbsp;声明和初始化

&emsp;&emsp;你可能看到我上面用了`int num;`来创建一个int类型的变量(数据类型我们会在下章节详细讲，这里知道它是代表整数就行)，变量的名字是num，这就叫声明了一个名为num的变量。
&emsp;&emsp;声明时，编译器在计算机内存中为变量预留了空间，然后在执行赋值语句时，把值储存在之前预留的位置。给变量赋一个初始值的过程称为初始化。

#### 5.&nbsp;变量命名规则

&emsp;&emsp;可以用小写字母、大写字母、数字和下划线(_)来命名。另外，名称的首字符必须是字符或下划线，不能是数字。操作系统和C的库经常使用以一个或两个下划线字符开始的标识符（如，_kcab），所以我们最好不要在自己的程序中使用这种名称。
&emsp;&emsp;另外，变量的名字不要和C语言的关键字重名。比如int是C语言的一个关键字，表示一种C语言数据类型，给自己的变量和函数起名字的时候不能命名为int。

#### 6.&nbsp;提高程序可读性

&emsp;&emsp;什么是程序可读性？简单来说，就是你能不能轻松看懂这个程序。可读性高的程序更容易理解，以后也更容易修改和更正。提高程序的可读性也有助于我们理清思路。
&emsp;&emsp;如何提高程序可读性呢？方法有很多，我只提供三个最简单的建议供各位参考。
&emsp;&emsp;首先是使用`见名知意`的函数名和变量名，比如我这个变量存放的值代表成绩，我就把这个变量命名为`Grades`。
&emsp;&emsp;其次是在程序中加入适当的注释，以帮助我们快速理清思路。
&emsp;&emsp;最后，是适当地使用空行，将你的程序分成不同的部分，例如

```c
#include <stdio.h>
int main(void)
{
  
    int kilograms;
    int price;
    int num;
  
    num = 6;
    price = 4;
    kilograms = 7;

    printf("%d",num * kilograms * price);
    return 0;
}
```

&emsp;&emsp;这段代码使用了两个空行，把声明部分、赋值部分和输出部分分隔开来，我们实际编程中可以按照自己喜欢的方式使用空行，上面这个仅供参考。

## 三、&nbsp;C语言基础

### (一)&nbsp;基本数据类型
首先我们要知道，计算机使用二进制存储数据，
<br>

#### 1.&nbsp;整型（Integer）<br><br>
##### 1.1基本整型类型
&emsp;&emsp;int<br>
&emsp;&emsp;通常表示一个标准的整型变量，大小和范围依赖于具体的编译器和平台。<br>
&emsp;&emsp;short<br>
&emsp;&emsp;表示较短的整型变量，通常占用2个字节。范围是 -32,768 到 32,767。<br>
&emsp;&emsp;long<br>
&emsp;&emsp;表示较长的整型变量，通常占用4个字节或更多。范围依赖于具体的编译器和平台。<br>
&emsp;&emsp;long long<br>
&emsp;&emsp;表示更长的整型变量，通常占用8个字节。范围依赖于具体的编译器和平台。<br>
##### 1.2无符号整型类型
&emsp;&emsp;unsigned int<br>
&emsp;&emsp;无符号整型，表示非负整数，范围从0到最大正值。<br>
&emsp;&emsp;unsigned short<br>
&emsp;&emsp;无符号短整型。<br>
&emsp;&emsp;unsigned long<br>
&emsp;&emsp;无符号长整型。<br>
&emsp;&emsp;unsigned long long<br>
&emsp;&emsp;无符号更长整型。<br>
#### 2.&nbsp; 字符型（Character）
&emsp;&emsp;char<br>
&emsp;&emsp;char类型用于储存字符（如，字母或标点符号），但是char也是整数类型，因为计算机是根据这个整数值，去编码表中找对应的字符<br>
&emsp;&emsp;unsigned char<br>
&emsp;&emsp;无符号字符类型，范围是0到255。<br>
&emsp;&emsp;signed char<br>
&emsp;&emsp;明确表示带符号的字符类型。<br>
```c
//示例
#include<stdio.h>
int main(void)
{
    char c = 'A';

    //使用%c来输出char类型的字符
    printf("%c",c);
    return 0;
}
```
#### 3.&nbsp;浮点型（Floating Point）
&emsp;&emsp;float<br>
&emsp;&emsp;单精度浮点数，通常占用4个字节，精度约为6-7位小数。<br>
&emsp;&emsp;double<br>
&emsp;&emsp;双精度浮点数，通常占用8个字节，精度约为15-16位小数。<br>
&emsp;&emsp;long double<br>
&emsp;&emsp;扩展精度浮点数，通常占用12个字节或更多，具体取决于编译器和平台。<br>
#### 4.&nbsp;布尔型（Boolean）
&emsp;&emsp;bool<br>
&emsp;&emsp;在C99标准中引入，表示布尔类型，值为true或false。需要加上头文件#include<stdbool.h><br>
&emsp;&emsp;这是c语言专门的用来表示真和假的类型。true为真，false为假<br>
&emsp;&emsp;在c语言中，有时也用0表示假，非0的数值表示真。<br>
#### 5.&nbsp;数据类型的修饰符
&emsp;&emsp;C语言还提供了一些修饰符，用于改变基本数据类型的属性：<br>
&emsp;&emsp;signed<br>
&emsp;&emsp;明确表示带符号类型，可用于整型和字符型。<br>
&emsp;&emsp;unsigned<br>
&emsp;&emsp;明确表示无符号类型，可用于整型和字符型。<br>
&emsp;&emsp;short<br>
&emsp;&emsp;表示较短的整型。<br>
&emsp;&emsp;long<br>
&emsp;&emsp;表示较长的整型或双精度浮点型。
#### 6.&nbsp;代码示例
```c
#include<stdio.h>
int main(void)
{
    //声明一个整型变量num
    int num;
    //给num变量赋值为10
    num = 10;
    //输出一个整型变量的值，\n表示换行
    printf("%d\n",num);
    //输出多个整型变量的值(前后按顺序一一对应)
    printf("%d %d\n %d %d",num,num+1,num+2,num+3);
    //可以使用sizeof函数来查看一个变量占用的字节数
    printf("在我的电脑上,int类型的变量占%d个字节",sizeof(num));
    //其他整型实例
    short num2 = 133;
    long num3 = 61111;
    long long num4 = 12345678910111;

    /*
    打印char或short或int类型的变量，使用%d
    打印long类型的变量，使用%ld
    打印long long类型的变量，使用%lld
    */
    printf("%d %ld %lld",num2,num3,num4);
    return 0;
}

```
#### 7&nbsp;数据溢出与截断
&emsp;&emsp;数据溢出是指将一个超出变量所能表示范围的值赋给该变量<br>
&emsp;&emsp;在进行运算的时候，有可能会发生溢出或者截断，比如下面这个:<br>
```c
#include <stdio.h>

int main() {
    int largeNumber = 300;
    char smallNumber = largeNumber; // 截断

    printf("%d\n", smallNumber); // 输出44（假设char是有符号的）
    return 0;
}
```
&emsp;&emsp;在这个例子中，largeNumber的值是300，而char类型只能表示-128到127的范围。因此，300会被截断，并且结果可能是奇怪的值。
&emsp;&emsp;数据截断发生在一个值被赋给一个比它小的类型变量时，超出的部分会被丢弃。(这里的`小`是指范围小)<br>
```c
#include <stdio.h>

int main() {
    //将一个浮点数1.5赋值给a,因为1.5是浮点数，但是它被赋值给一个整型变量，所以它被自动转换成整数，然后输出
    int a = 5.5;

    printf("%d\n", a);
    return 0;
}

```
#### 8&nbsp;自动类型提升
&emsp;&emsp;自动类型提升是指在表达式中，取值范围小（或容量小）的类型会被自动提升为取值范围大（或容量大）的类型。例如，当int和float一起参与运算时，int会被升级为float。
```c
#include<stdio.h>
int main()
{
    double a = 7;//7本来是int类型，当把7赋值给double类型的a的时候，7自动提升为double类型
    double c = 5 + 7.7;//当存储范围小的数据类型与存储范围大的数据类型变量一起混合运算时，会按照其中最大的类型运算。

    return 0;
}
```





### (二)&nbsp;运算符<br><br>
#### 1.&nbsp;算术运算符
&emsp;&emsp;加+&emsp;减-&emsp;乘*&emsp;除/&emsp;这些常用的运算符不再赘述<br>
&emsp;&emsp;这里单独说一下取模运算符%，它的作用是取整型变量的余数，比如10%3等于1，因为10除以3的余数为1。<br>
#### 2.&nbsp;关系运算符
&emsp;&emsp;等于==&emsp;不等于!=&emsp;大于>&emsp;小于<&emsp;大于等于>=&emsp;小于等于<=<br>
#### 3.&nbsp;逻辑运算符
&emsp;&emsp;逻辑与 && 逻辑或 || 逻辑非 !<br>
&emsp;&emsp;这三个运算符跟高中数学第一章的运算符类似，"逻辑与"类似"且"，"逻辑或"类似"或"。依然满足"一真或为真，一假且为假"。
&emsp;&emsp;有人可能没听过这个口诀，没关系，我们展开讲讲：<br>
&emsp;&emsp;逻辑与(&&)连接两个表达式，如果两个表达式都为真，则结果为真，否则为假。<br>
&emsp;&emsp;逻辑或(||)连接两个表达式，如果两个表达式都为假，则结果为假，否则为真。<br>
&emsp;&emsp;逻辑非(!)将一个表达式取反，如果表达式为真，则结果为假，否则为真。<br>
&emsp;&emsp;这些表达式可以嵌套使用，比如(!(5 == (3 + (6 == 8||9 == 9) == 9)))||(7 == ((7 > 6) ? 7 : 9))
&emsp;&emsp;算出来了吗？没算出来也不用灰心(毕竟正常人都不会这么写)，答案是真
&emsp;&emsp;可以借助程序来验证一下:<br>
```c
//输出结果是1，在c语言中0代表假(false)，其他值代表真(true)
printf("%d\n",(!(5 == (3 + (6 == 8||9 == 9) == 9)))||(7 == ((7 > 6) ? 7 : 9)));
```
#### 4.&nbsp;赋值运算符
&emsp;&emsp;=&nbsp;基本的赋值运算符，将等号右边的值赋给等号左边的变量<br>
&emsp;&emsp;+=和-= <br>
&emsp;&emsp;a += b是a = a + b的简写，a -= b是a = a - b的简写<br>
&emsp;&emsp;*=和/=同理<br>
&emsp;&emsp;%=<br>
&emsp;&emsp;a %= b是a = a % b的简写<br>
#### 5.&nbsp;其他运算符<br><br>
##### 5.1自增/自减
&emsp;&emsp;++ -- 运算符，用于自增自减，而且每次只自增或者自减1<br>
&emsp;&emsp;注意b=a++和b=++a的区别：b=++a表示a先自增1，然后再把自增后的值赋值给b；b=a++表示先把a的值赋给b，a再自增1（自增号在前面先自增，自增号在后面后自增）
##### 5.2三目运算符
&emsp;&emsp;三目运算符 ? : 运算符<br>
```c
//如果num1大于num2，则a=num1，否则a=num2
int a = (num1 > num2) ? num1 : num2;
```
##### 5.3强制类型转换
&emsp;&emsp;在常量或变量前面加上(类型)，强行将其转换为指定的类型。
```c
int a = 9;
//将int类型的a强制转换为long long类型，并将其赋值给long long类型的b
long long b = (long long)a;
```
#### 6&nbsp;位运算符
<br>
&emsp;&emsp;这个稍微有点复杂，我们一点一点展开讲

##### (1)&nbsp;什么是位
&emsp;&emsp;首先，什么是位？我们之前常说一个数有"几位"，比如1234有4位，而12345有5位。这个位跟我们要说的位是同一个东西。<br>
&emsp;&emsp;在计算机术语中，位（bit）来自英文bit，音译为“比特”，是计算机内部数据储存的最小单位。
&emsp;&emsp;计算机中还有一个单位是字节，一个字节（byte）是8个bit，也就是八位数
&emsp;&emsp;在计算机中，所有的数字都是以二进制的形式存储的，比如1234，二进制就是10011010010，是个11位的数。

##### (2)&nbsp;十进制转二进制：<br>
&emsp;&emsp;十进制与二进制相互转换的方法高中学过，但是相信不少同学跟我一样，高考之后就忘得七七八八了(bushi)，所以我们来简单复习一下进制转换的方法：(如果这部分你已经掌握了，可以直接跳到位运算符)<br>
&emsp;&emsp;将十进制数除以2，记下余数。拿商接着除以2，记下余数。重复这个过程，直到商为0为止。把刚才一个个记下的余数从后往前读，就是二进制数。<br>
&emsp;&emsp;光说有点抽象，我们来看个示例：<br>
&emsp;&emsp;<mark>这里会有一张图片</mark><br><br>
&emsp;&emsp;刚才只讲了整数，现在说说带小数的十进制数。<br>
&emsp;&emsp;我们把它分成整数部分和小数部分，整数部分依然用刚才的方法，小数部分不断乘2，然后取整数部分(是0就取0)，之后把乘积的小数部分拿出，乘二，取整数部分，不断重复这个过程，直到乘积的小数部分为0(有可能会出现一直乘下去没完没了的情况，这时候乘二取整适当次数就行了，剩下的数直接舍弃)<br>
&emsp;&emsp;注意这次是从前往后读你记下来的数字，而不是像整数部分转换时从后往前倒着读<br>
&emsp;&emsp;例如：<br>
&emsp;&emsp;<mark>这里会有一张图片</mark><br>

##### (3)&nbsp;二进制转十进制：<br>
&emsp;&emsp;将二进制数从前往后，每次取出一位，乘2的i次方(i = m - 1)(m表示这是原二进制数从前往后数第几个)，之后所有乘积相加，就是转换成的十进制数。<br>
&emsp;&emsp;比如10011010010，从前往后，1 * 2^0(2的0次方) + 0 * 2^1 + 1 * 2^2 + 0 * 2^3 + 1 * 2^4 + 1 * 2^5 + 0 * 2^6 + 0 * 2^7 + 0 * 2^8 + 0 * 2^9 + 0 * 2^10 = 1234
&emsp;&emsp;其实c语言有专门负责进制转换的函数，我们在函数那章再聊，这里先聊原理。
##### (4)&nbsp;位运算符<br>
&emsp;&emsp;刚才我们聊了位的概念，现在我们来聊一下位运算符。
###### (4.1)位左移(<<)与位右移(>>)<br>
&emsp;&emsp;位左移(<<)是各二进位全部左移若干位，高位丢弃，低位补0，比如00100001左移2位，结果就是10000100(如果再左移，左边的1就会被丢弃)。<br>
&emsp;&emsp;位右移(>>)是各二进位全部右移若干位，低位丢弃，高位补0，比如00100001右移2位，结果就是00010000(如果再右移，右边的1可能会被丢弃)。<br>
&emsp;&emsp;每位移一次，相当于这个数乘或者除以2，比如20的二进制数是0001 0100，左移3位，结果就是1010 0000，相当于20 * 2^3 = 160。<br>

###### (4.2)<<=和>>=
&emsp;&emsp;<<=和>>=这两个运算符跟先前的+=、-=很像，a >>= b相当于a = a >> b，a <<= b相当于a = a << b。


#### 6.常用运算符优先级
| 优先级 | 运算符 |
| ------ | ------ | 
| 1      | ()&emsp;[]&emsp;.&emsp;-> | 
| 2      | !&emsp;+(正号)&emsp;-(负号)&emsp;++&emsp;-- |
| 3      | *&emsp;/&emsp;% | 
| 4      | +(加)&emsp;-(减) | 
| 5      | <&emsp;<=&emsp;>&emsp;>= | 
| 6      | ==&emsp;!= | 
| 7      | && |
| 8      | \|\| |
| 9      | =&emsp;+=&emsp;-=&emsp;*=&emsp;/=&emsp;%= | 
&emsp;&emsp;有些符号我们还没讲到，不着急，先有个大致印象，等后面我们都会一一讲解。

## 四、&nbsp;
### (一)、条件语句<br><br>
#### 1.&nbsp;if与if-else
```c
//如果表达式1成立，则执行语句1，并离开这个if语句块(指不用再看这一堆if-else了);否则继续向下看表达式2。如果表达式2成立，则执行语句2，并离开这个if语句块;否则继续向下判定表达式3……
if(表达式1){
    语句1;
}else if(表达式2){
    语句2;
}else if(表达式3){
    语句3;
}
```
&emsp;&emsp;实例：
```c
#include<stdio.h>
int main()
{
    int a = 9;
    int b = 10;
    int c = 55555;
    int d = 183443265;

    //如果a大于b，则输出a大于b
    if(a > b){
        printf("a > b");
    }
    
    //多重if-else语句
    if(a < b){
        printf("a < b"),printf("a < b"),printf("a < b");
    }else if(a == b){
        printf("a == b");
    }else{
        printf("a > b");
    }

    //else语句会与最近的那个if语句匹配，比如:
    if(a < b){
        if(c < d){
            printf("c < d");
        }else{
            //这个else语句会与if(c < d)匹配，如果c < d成立就输出c < d;否则输出
            printf("c > d");
        }
    }else{

    }
    return 0;
}

```
&emsp;&emsp;细心的同学可能已经发现了，在使用if语句的时候不写括号，它似乎也按照我们预想的一样。实际上并不是。编译器会默认把下一个分号之前的所有语句算成是这个if语句的内容，为了程序的可读性，也为了方便我们后期的修改维护，<mark>强烈建议使用if语句的时候加上大括号。</mark>
#### 2.&nbsp;switch语句
&emsp;&emsp;switch语句是C语言中比较常用的语句，它跟if语句有点像<br>
&emsp;&emsp;光说有点抽象，我们直接看个例子<br>
```c
#include<stdio.h>
int main()
{
    int a = 7;
    switch(a){
        case 1:
            printf("%d\n",a + 3);
            break;
        case 2:
            printf("%d\n",a + 2);
            break;
        default:
            printf("%d\n",a + 1);
            break;
    }
    //上面这个switch语句和下面这个if语句是等价的
    if(a == 1){
        printf("%d\n",a + 3);
    }else if(a == 2){
        printf("%d\n",a + 2);
    }else {
        printf("%d\n",a + 1);
    }
}
```
#### 3.&nbsp;goto语句
&emsp;&emsp;作用：让程序跳转到指定的位置<br>
&emsp;&emsp;程序运行时是主函数从上到下逐行执行代码，而goto语句能让程序直接跳到指定的位置，并从那个位置接着往下逐行执行代码。<br>
&emsp;&emsp;goto语句有两部分：goto和标签名。标签的命名遵循变量命名规则。例如:<br>
```c
#include<stdio.h>
int main(){
    int a = 7;
    double b = 9;
    float c = 11.777;
    char d = 'D';

part1:
    printf("%d,%lf,c = %f,d = %c\n",a,b,c,d);
    //%5d指打印一个整数，这个整数占五列(不够五列的话自动补空格)，不带负号默认右对齐，带负号则为左对齐
    printf("%5d\n%-5d,%1.0f",a,a,c);
    if(a >= 7){
        a -= 4;
        //当这句goto执行时，程序跳转到part1指定的位置，并从那个位置继续向下逐行执行代码
        goto part1;
    }
    return 0;
}
```
&emsp;&emsp;原则上，不建议在C程序中使用goto语句，我们可以使用if语句、while循环等来代替它

逗号运算符
## 五、&nbsp;函数
### (一)&nbsp;函数是什么？
&emsp;&emsp;函数是负责完成某项特定任务的一段代码。<br>
&emsp;&emsp;从用户角度看，函数分为库函数和自定义函数。<br>
&emsp;&emsp;从函数形式角度，分为无参函数和有参函数<br>
&emsp;&emsp;这个分类乍一看很难理解，我们先往下看。<br>
### (二)&nbsp;函数都包含什么？
&emsp;&emsp;通常一个函数包含:返回值的数据类型 函数名 参数列表 函数体<br>
&emsp;&emsp;例如我们要自定义一个名为Add的函数<br>
```c
//第一个int代表函数执行后返回的数值为int类型（如果不需要返回值的话就写void），Add是我们自己起的函数名，函数名最好能见名知意，()里面是参数列表，也就是说调用这个函数的时候你要给他传入几个什么类型的数据。
int Add(int a,int b,int c)
//大括号里面是函数体，也就是这个函数被调用是要执行的代码块
{
    int d = 7;
    return a + b + c;
}
int main(){
    int a = 3, b = 4, c = 5;
    int e = Add(a, b, c);
    printf("%d",e);
    return 0;
}
```
### (三)&nbsp;自定义函数
#### 1.&nbsp;定义无参函数
&emsp;&emsp;格式如下
```c
//参数列表写成void或者空着都行，表述这个函数不需要传入参数，是个无参函数
类型名 函数名(参数列表){
    函数体
}
```
&emsp;&emsp;例如：
```c
#include <stdio.h>
int deter(){
    int a = 5;
    int b = 7;
    return (a > b) ? a : b;
}
```
#### 2.&nbsp;定义有参函数
&emsp;&emsp;有参函数与无参函数的区别就是有参函数的参数列表不为空，其他格式一致
我们来看个例子：
```c
#include<stdio.h>
int main(){
    int a, b, c;
    scanf("%d%d",&a,&b);
    c = mymax(a, b);//第五行
    printf("max{a, b} = %d",c);
    return 0;
}
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
```
&emsp;&emsp;上面这段代码乍一看没什么问题，但是执行起来会直接报错。因为对程序的编译是自上而下的，在第五行，编译器还没见过我们自定义的mymax函数是什么样子。<br>
&emsp;&emsp;为了让IDE能够识别我们自定义的函数，我们需要在初次使用它之前先对这个函数进行声明<br>
&emsp;&emsp;声明的方式有三种。<br>
&emsp;&emsp;一种是直接把这个函数本体放在main函数之前，这样在编译的时候编译器已经加载过我们自定义的函数，使用的时候不会再报错。例如：<br>
```c
#include<stdio.h>
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
int main(){
    int a, b, c;
    scanf("%d%d",&a,&b);
    c = mymax(a, b);//第五行
    printf("max{a, b} = %d",c);
    return 0;
}
```
<br>

第二种方式就是在文件开头部分进行声明。例如：<br>
```c
#include<stdio.h>
int mymax(int x, int y);//在这里声明函数，不需要写函数体，这种声明方式称为原型声明
int main(){
    int a, b;
    a = 9;
    b = 10;

    printf("%d和%d中最大的数是%d", a, b,mymax(a, b));
    return 0;
}
//函数定义
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
```
&emsp;&emsp;在C语言中，函数的原型声明用于在使用函数之前告诉编译器有关函数的一些基本信息，包括函数的名称、返回类型和参数列表。函数原型的目的是提供给编译器足够的信息，以便在编译过程中进行类型检查和函数调用的正确性验证。<br><br>
第三种方式是在使用它之前在main函数中进行声明。例如:<br>
```c
#include<stdio.h>
int main(){
    int mymax(int x, int y);//对mymax函数进行声明
    int a, b;
    a = 9;
    b = 10;

    printf("%d和%d中最大的数是%d", a, b,mymax(a, b));
    return 0;
}
//函数定义
int mymax(int x, int y){
    int z;
    if(x > y){
        z = x;
    }else {
        z = y;
    }
    return z;
}
```
### (四)&nbsp;库函数
&emsp;&emsp;有一些函数，在开发的过程中每个程序员都有可能用得到，属于比较基础、泛用的函数，比如输入(scanf)输出(printf)函数、计算开方(sqrt())、向下取整(floor())的函数等<br>
&emsp;&emsp;C语言中这些常用的函数被预先写好，放在一些头文件中，需要用到它们的时候我们只要引入头文件(比如我们前面用的#include<stdio.h>)就可以使用这个头文件里面包含的函数<br>
&emsp;&emsp;下面展示几个C语言常用的库函数以及它们的用法<br>
&emsp;&emsp;Tips:这些函数不用特意去记，多用几次自然就记住了，忘了就再复习复习<br>
#### 1.&nbsp;输入输出函数 
<br>

##### (1)&nbsp;printf()函数
&emsp;&emsp;printf()用于格式化输出到屏幕。printf() 函数在 "stdio.h" 头文件中声明。<br>
&emsp;&emsp;这是printf()函数的格式：printf( 格式字符串, 待打印项1, 待打印项2,...);<br>
&emsp;&emsp;格式字符串是双引号括起来的内容<br>
&emsp;&emsp;待打印项1、待打印项2等都是要打印的项。它们可以是变量、常量，甚至是在打印之前先要计算的表达式。<br><br>
&emsp;&emsp;请求printf()函数打印数据的指令要与待打印数据的类型相匹配。例如，打印整数时使用%d，打印字符时使用%c。这些符号被称为转换说明，它们指定了如何把数据转换成可显示的形式。<br>
&emsp;&emsp;下面展示一些常见的转换说明和各自对应的输出类型<br>


| 转换说明        | 输出   |
| ------         | ------ | 
| %d             | 有符号十进制整数 | 
| %ld            | 有符号的长整数（long int）类型 | 
| %lld           | 更大范围的有符号整数-长长整型(long long int) | 
| %e             | 浮点数，科学计数法 | 
| %E             | 浮点数，科学计数法 | 
| %f             | 单精度浮点数(float)，十进制计数法 | 
| %lf            | 双精度浮点型(double) | 
| %p             | 输出存储地址 | 
| %%             | 打印一个百分号 |
&emsp;&emsp;由于 printf()函数使用%符号来标识转换说明，因此打印%符号就成了个问题。如果单独使用一个%符号，编译器会认为漏掉了一个转换字符。解决方法很简单，使用两个%符号就行了
<br>
&emsp;&emsp;在c语言里，科学计数法有专门的写法，比如1.2345 * 10 ^ 24(1.2345乘10的24次方)记作1.2345e24或者1.2345E24。如果你想要输出的结果中字母e大写，就用%E，小写就用%e即可
&emsp;&emsp;到指针那一章我们再详细讲%p的使用和存储地址的讲解，这里有个印象即可

```c
#include<stdio.h>
int main(){
    int a,b,c,d;
    a = 5;
    b = 6;
    c = 7;
    d = 8;

    //输出四个整数，数值分别为a、b、c、d的数值
    printf("%d%d%d%d",a,b,c,d);
    return 0;
}
```

##### (2)&nbsp;scanf()函数


#### 2.&nbsp;绝对值函数
&emsp;&emsp;使用下面这三个函数的时候都需要先引入头文件<math.h>
##### (1)&nbsp;整型取绝对值
```c
#include<stdio.h>
#include<math.h>
int main(){
    int n = -28;
    //取n的绝对值
    n = abs(n);
    printf("%d\n",n);
    return 0;
}
```
##### (2)&nbsp;双精度浮点型取绝对值
&emsp;&emsp;
```c
#include<stdio.h>
#include<math.h>
int main(){
    double n = -3.14159;
    //取n的绝对值
    n = fabs(n);
    printf("%lf\n",n);
    return 0;
}
```
##### (3)&nbsp;长整型取绝对值
```c
#include<stdio.h>
#include<math.h>
int main(){
    long n = -1234567891;
    //取n的绝对值
    n = labs(n);
    printf("%ld\n",n);
    return 0;
}
```
##### (4)&nbsp;判断两个浮点数是否相等
&emsp;&emsp;因为计算机存储浮点数是
```c
#include<stdio.h>
#include<math.h>
int main(){
    double a = 1.1;
    double b = 2.3;
    char myequal = "相等";

    if(fabs(b - a) <= 1e-6){
        //打印一个字符串类型的变量，使用%s
        printf("%s",myequal);
    }
    else{
        printf("不相等\n")
    }
    return 0;
}
```
#### 3.&nbsp;指、对函数
##### (1)&nbsp;指数函数
&emsp;&emsp;在C语言中，可以使用pow函数来计算指数函数。pow函数的定义为：double pow(double base, double exp)，第一个double表明函数返回值的数据类型，base是底数，exp是指数
```c
#include<stdio.h>
#include<math.h>
int main(){
    //计算3的5次方
    printf("%d",(int)pow(3,5));
    return 0;
}
```
##### (2)&nbsp;对数函数
&emsp;&emsp;log() 是 C 标准库 <math.h> 中的一个函数，用于计算一个浮点数的自然对数（以 e 为底）
&emsp;&emsp;在这里log()函数其实跟我们高中学过的ln一个意思，都是代表计算以e为底，某个数的对数
```c
#include<stdio.h>
#include<math.h>
int main(){
    //计算以e为底，77.3的对数
    printf("log(%lf) = %lf",77.3 ,log(77.3));
    return 0;
}
```



待完成:
生命周期(放函数讲)
数据溢出（128）
八进制16进制（121）

&emsp;&emsp;位与 & 位或 | 位非 ~ 位异或 ^ 位左移 << 位右移 >><br>
|= ^=
&= 

&emsp;&emsp;文档推荐<a href="https://www.runoob.com/cprogramming/c-input-output.html">菜鸟</a>
<a href="https://cplusplus.com/reference/">查阅c/c++库函数</a>

&emsp;&emsp;推荐一门课，浙大翁凯老师的<a href="https://www.bilibili.com/video/BV1XZ4y1S7e1/?spm_id_from=333.999.0.0">c语言教程</a>