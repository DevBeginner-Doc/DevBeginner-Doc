::: warning :construction:WARNING
本条目仍在积极施工中，可能存在遗漏或不完善的地方
:::

# C语言入门与进阶

## 一、&nbsp;初识C语言

### (一)简介
&emsp;&emsp;C语言是一种通用的、面向过程的编程语言，具有高效、灵活、可移植性强等特点。它诞生于1972年的贝尔实验室，由Dennis Ritchie在B语言的基础上开发而来。<br>
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

&emsp;&emsp;C语言是一种面向过程的编程语言。在编写代码时，通常按照解决问题的流程逐步编写代码，这与我们日常的思维方式相似。<br>
&emsp;&emsp;在动手写程序之前，首先自己要明确自己想做什么，思考你的程序需要哪些东西，要进行哪些计算和控制，以及程序应该返回给你什么信息。

#### 2.&nbsp;设计程序

&emsp;&emsp;想清楚程序要做什么之后，就应该考虑如何用程序来完成它。设计程序时，需要考虑程序中需要哪些变量，以及这些变量需要如何存储和操作。

#### 3.&nbsp;编写代码

&emsp;&emsp;在设计好程序后，我们就可以编写代码来实现它。也就是把刚才的思路用C语言来实现。<br>
&emsp;&emsp;在开始编写之前，确保你的输入法已经调到了英文模式，对人来说英文的标点符号可能和中文的大差不差，但是对于机器来说，英文标点和中文标点截然不同<br>
&emsp;&emsp;切记，程序最好要有必要的注释(必要的注释，而不是什么都加注释)，否则可能会出现今天这堆代码只有你能看懂，明天一觉醒来这堆玩意你自己也看不懂的情况(尤其是代码很长或代码分成了多个文件的时候)。也有可能修改的时候动了这个忘了那个，改掉一个bug多了三个bug。

#### 4.&nbsp;编译

&emsp;&emsp;这一步是由我们的编译器自动完成的，我们只需要点击`编译`(有的编译器甚至没有这个按钮，直接点`运行`按钮就行了)

#### 5.&nbsp;运行程序

&emsp;&emsp;编译完成之后，我们就能获得一个可执行文件(.exe)，可以在IDE中通过菜单中的选项来执行这个文件，也可以在命令行中使用指令或双击运行这个文件。

#### 6.&nbsp;测试和调试程序

&emsp;&emsp;正常情况下，程序能正常运行。但是，有时候，甚至是大多数情况下，程序会出现一些奇奇怪怪的问题(bug)。查找并修复程序错误的过程叫调试。逐行执行代码并查看你的变量的数值或者循环的次数，通过这种方式，我们能精确地发现问题在哪里。<br>
&emsp;&emsp;试着建个文档，把自己犯过的错记下来，未来某天再看这个文档的时候，说不定会有意外的收获。(刚开始可能出现一些简单的错误，比如main写成mian，stdio写成studio之类的，我们都犯过这样的错误。但是随着学习进度的推进，简单的错误就不会再出现了)

## 二、&nbsp;C语言概述

&emsp;&emsp;上一章我们对C语言的历史和设计思路有了大致的概念，这一章我们来聊聊C语言中的一些名词和基本概念。

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

/*
多行的注释也可以这样写
总之，在C语言中
被 斜杠加星号 和 星号加斜杠夹在中间的
都是注释部分
*/
```

#### 3.&nbsp;main()函数

&emsp;&emsp;C程序一定从main()函数开始执行，现阶段我们知道这一点就可以了，更多的东西会在后面的函数章节讲到。

#### 4.&nbsp;声明和初始化

&emsp;&emsp;你可能看到我上面用了`int num;`来创建一个int类型的变量（数据类型我们会在下章节详细讲，这里知道它是代表整数就行），变量的名字是num，这就叫声明了一个名为num的变量。<br>
&emsp;&emsp;声明时，编译器在计算机内存中为变量预留了空间，然后在执行赋值语句时，把值储存在之前预留的位置。给变量赋一个初始值的过程称为初始化。

#### 5.&nbsp;变量命名规则

&emsp;&emsp;可以用小写字母、大写字母、数字和下划线(_)来命名。另外，名称的首字符必须是字符或下划线，不能是数字。操作系统和C的库经常使用以一个或两个下划线字符开始的标识符（如，_kcab），所以我们最好不要在自己的程序中使用这种名称。<br>
&emsp;&emsp;另外，变量的名字不要和C语言的关键字重名。比如int是C语言的一个关键字，表示一种C语言数据类型，给自己的变量和函数起名字的时候不能命名为int。

#### 6.&nbsp;提高程序可读性

&emsp;&emsp;什么是程序可读性？简单来说，就是你能不能轻松看懂这个程序。可读性高的程序更容易理解，以后也更容易修改和更正。提高程序的可读性也有助于我们理清思路。<br>
&emsp;&emsp;如何提高程序可读性呢？方法有很多，我只提供三个最简单的建议供各位参考。<br>
&emsp;&emsp;首先是使用`见名知意`的函数名和变量名，比如我这个变量存放的值代表成绩，我就把这个变量命名为`Grades`。<br>
&emsp;&emsp;其次是在程序中加入适当的注释，以帮助我们快速理清思路。<br>
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
##### 1.1&nbsp;基本整型类型
&emsp;&emsp;int<br>
&emsp;&emsp;通常表示一个标准的整型变量，大小和范围依赖于具体的编译器和平台。<br>
&emsp;&emsp;short<br>
&emsp;&emsp;表示较短的整型变量，通常占用2个字节。范围是 -32,768 到 32,767。<br>
&emsp;&emsp;long<br>
&emsp;&emsp;表示较长的整型变量，通常占用4个字节或更多。范围依赖于具体的编译器和平台。<br>
&emsp;&emsp;long long<br>
&emsp;&emsp;表示更长的整型变量，通常占用8个字节。范围依赖于具体的编译器和平台。<br>
##### 1.2&nbsp;无符号整型类型
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
#### 7.&nbsp;数据溢出与截断
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
#### 8.&nbsp;自动类型提升
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
&emsp;&emsp;这些表达式可以嵌套使用，比如(!(5 == (3 + (6 == 8||9 == 9) == 9)))||(7 == ((7 > 6) ? 7 : 9))<br>
&emsp;&emsp;算出来了吗？没算出来也不用灰心(毕竟正常人都不会这么写)，答案是真<br>
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
##### 5.1&nbsp;自增/自减
&emsp;&emsp;++ -- 运算符，用于自增自减，而且每次只自增或者自减1<br>
&emsp;&emsp;注意b=a++和b=++a的区别：b=++a表示a先自增1，然后再把自增后的值赋值给b；b=a++表示先把a的值赋给b，a再自增1（自增号在前面先自增，自增号在后面后自增）
##### 5.2&nbsp;三目运算符
&emsp;&emsp;三目运算符 ? : 运算符<br>
```c
//如果num1大于num2，则a=num1，否则a=num2
int a = (num1 > num2) ? num1 : num2;
```
##### 5.3&nbsp;强制类型转换
&emsp;&emsp;在常量或变量前面加上(类型)，强行将其转换为指定的类型。
```c
int a = 9;
//将int类型的a强制转换为long long类型，并将其赋值给long long类型的b
long long b = (long long)a;
```
##### 5.4&nbsp;逗号运算符
&emsp;&emsp;从左到右依次计算表达式,然后返回最右边表达式的结果。<br>
&emsp;&emsp;所有表达式除了最后一个表达式的结果都会被丢弃。<br>
&emsp;&emsp;逗号运算符的优先级是最低的，所以它会在所有其他运算符之后执行。
```c
#include<stdio.h>
int main(){
    int a = 7;
    int b = 9;
    printf("%d",(((((++a,b++),a++),++b),a++),++b));//输出12
    //猛一看很复杂，但是只要知道逗号表达式的运算规则就好理解了(只保留最右边表达式的结果)，一层一层拆括号即可
    //另外如果你忘了a++和++a的区别了，我们就再来复习一下，++a是a的数值先加1 再拿a的值进行运算，a++是先取走a的值运算，然后再把a本身的值加1
    return 0;
}
```

#### 6. 位运算符
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


#### 7.&nbsp;常用运算符优先级
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

## 四、&nbsp;流程控制语句
### (一)、&nbsp;条件语句
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
::: warning
如果我们不写break的话，switch语句会从符合条件的位置开始，往下一直执行下去，直到遇到break为止。就像下面这个例子展示的那样：
:::
```c
#include<stdio.h>
int main()
{
    int a = 7;
    switch(a){
        case 1:
            printf("%d\n",a + 3);

        case 2:
            printf("%d\n",a + 2);

        default:
            printf("%d\n",a + 1);
            break;
    }
    //上面这个switch语句和下面这个if语句是等价的
    if(a == 1){
        printf("%d\n",a + 3);
        printf("%d\n",a + 2);
        printf("%d\n",a + 1);
    }else if(a == 2){
        printf("%d\n",a + 2);
        printf("%d\n",a + 1);
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

### (二)、&nbsp;循环语句
#### 1.&nbsp;while循环
&emsp;&emsp;while循环是C语言中比较常用的循环语句，它跟if语句有点像<br>
```c
#include<stdio.h>
int main(){
    int a = 7;
    //先进行判断，如果条件成立就执行循环体，否则跳出循环
    //while所属的大括号及其内部的代码称为循环体
    while(a <= 10) {
        printf("%d ",a);
        a++;
    }

    return 0;
}
```
#### 2.&nbsp;do-while循环
&emsp;&emsp;do-while循环跟while循环很像，不同的是do-while循环会先执行一次循环体，再进行判断，如果条件成立就继续执行循环体，否则跳出循环。<br>
```c
#include<stdio.h>
int main(){
    int b = 9;
    //先进行判断，如果条件成立就执行循环体，否则跳出循环
    //while所属的大括号及其内部的代码称为循环体
    do {
        printf("%d ",b);
        b++;
    }while(b <= 15);

    return 0;
}
```
#### 3.&nbsp;for循环
&emsp;&emsp;for循环用于在满足特定条件的情况下重复执行一段代码。for循环通常用在已经知道循环次数的地方。
```c
for (initialization; condition; increment) {
    // 循环体
}
```
&emsp;&emsp;initialization：初始化部分，在循环开始前执行一次，用于初始化循环控制变量。<br>
&emsp;&emsp;condition：条件部分，在每次迭代开始前进行测试。如果条件为真（非零），则执行循环体；如果条件为假（零），则终止循环。<br>
&emsp;&emsp;increment：增量部分，在每次循环体执行完毕后执行，用于更新循环控制变量。<br>
```c
#include<stdio.h>
int main(){
    for (int i = 0; i < 10; i++) {
        printf("%d ",i);
    }
    return 0;
}
```
&emsp;&emsp;for循环的初始化部分、条件部分、增量部分都是可省略的，例如:<br>
```c
#include<stdio.h>
int main(){
    int i = 3;
    for (;i < 7;) {
        printf("%d ",i++);
    }
    for(;;){
        if(i == 17){
            printf("循环终止\n");
            break;
        }
        i++;
    }
    return 0;
}
```
::: warning
一定要检查有没有写合适的循环终止条件，避免出现死循环
:::
#### 4.&nbsp;break和continue
&emsp;&emsp;刚才我们提过，break用来跳出一层循环，例如：<br>
```c
#include<stdio.h>
int main(){
    for(int i = 0;i < 10;i++){
        printf("%d ",i);
    }
    //上面那个for循环和下面这个for循环是等价的
    for(int i = 0;;i++){
        if(i >= 10){
            break;
        } else {
            printf("%d ",i);
        }
    }
    return 0;
}
```
&emsp;&emsp;你可能注意到我强调了`一层`循环，因为我们有时候可能会用到嵌套的循环，例如：<br>
```c
#include<stdio.h>
int main(){
    for(int i = 0; i < 10; i++){
        for(int j = 0; j < 10; j++){
            printf("%d ",i);
            break;//在这里加break，它会跳出内层循环，但是跳出后外层循环还会执行下一次循环，所以外层的for循环依然会执行十次，但是每轮循环中，内层循环只会执行一次
        }
    }
    //输出0 1 2 3 4 5 6 7 8 9
    return 0;
}
```
&emsp;&emsp;continue的作用是用来跳过本次循环，继续下一次循环。
```c
#include<stdio.h>
int main(){
    for(int i = 0; i < 10; i++){
        for(int j = 0; j < 10; j++){
            printf("%d ",i);
            continue;//在这里加continue，它会跳过本次循环还未执行的代码，直接进入下一次循环，但是不会跳出当前层次的循环。所以内外层的for循环都会执行十次，但是每轮循环中打印j的值的语句不会被执行
            printf("%d ",j);
        }
    }
}
```

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


| 转换说明  | 输出      |
| ------   | --------- | 
| %d       | 有符号十进制整数 | 
| %ld      | 有符号的长整数（long int）类型 | 
| %lld     | 更大范围的有符号整数-长长整型(long long int) | 
| %e       | 浮点数，科学计数法 | 
| %E       | 浮点数，科学计数法 | 
| %f       | 单精度浮点数(float)，十进制计数法 | 
| %lf      | 双精度浮点型(double) | 
| %p       | 输出存储地址 | 
| %%       | 打印一个百分号 |

&emsp;&emsp;由于 printf()函数使用%符号来标识转换说明，因此打印%符号就成了个问题。如果单独使用一个%符号，编译器会认为漏掉了一个转换字符。解决方法很简单，使用两个%符号就行了
<br>
&emsp;&emsp;在c语言里，科学计数法有专门的写法，比如1.2345 * 10 ^ 24(1.2345乘10的24次方)记作1.2345e24或者1.2345E24。如果你想要输出的结果中字母e大写，就用%E，小写就用%e即可<br>
&emsp;&emsp;到指针那一章我们再详细讲%p的使用和存储地址的讲解，这里有个印象即可。来看个例子：

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
&emsp;&emsp;看到这你可能会有疑惑，格式字符串是在双引号内的，那如果输出结果里面要有个双引号的话会不会乱套呢？(哪个双引号和哪个双引号匹配？)，C语言中使用转义字符来解决这个问题<br>
&emsp;&emsp;首先我们要明确，计算机在存储我们的字符(包括但不限于字母、数字、特殊符号、不可见字符等)的时候实际存的存储的是字符的编码值(这些编码值是用二进制数字表示的)而不是这个字符本身。哪怕是空格、回车这种不可见字符也有自己对应的编码。为了让同样的编码值在不同的电脑上能翻译成相同的字符，一些比较权威的组织纷纷指定了统一编码标准，有ASCII(c语言使用的)、GB2312、GBK、UTF-8等。<br>
&emsp;&emsp;ASCII码使用7位二进制数（剩下的1位二进制为0）来表示所有的大写和小写字母、数字0到9、标点符号以及在美式英语中使用的特殊控制字符，有兴趣的同学可以去查一查ASCII码表<br>
```c
#include<stdio.h>
int main(){
    char ch1 = 'A';
    printf("%d",ch1);//输出65,这个整数65在计算机中是以二进制形式存储的，即`01000001`
    printf("%c",ch1);//输出A
    ch1++;
    printf("%d",ch1);//输出66
    printf("%c",ch1);//输出B
    return 0;
}
```
&emsp;&emsp;但是整天用ASCII码有点麻烦，我们使用转义字符来表示那些不能直接输入的字符，或者那些在源代码中具有特殊意义的字符<br>
&emsp;&emsp;这里展示一些比较常用的转义字符<br>

|  转义字符   |  含义     |
| ---------- | --------- |
| \\n         | 换行       |
| \\t         | 制表符     |
| \\"         | 双引号     |
| \\'         | 单引号     |
| \\\\         | 一个反斜杠 |
| \\0          | 空字符     |
 


&emsp;&emsp;举个例子:
```c
#include<stdio.h>
int main(){
    printf("Hello\nWorld\n");
    printf("\'Whatever are you doing up here Bill?\'\n");
    return 0;
}
```

&emsp;&emsp;看完上面这些，我们来看一些修饰符
| 修饰符         | 含义   |
| ------         | ------ | 
| 数字             | 最小字符宽度 | 
| .数字            | 精度 | 
| +           | 右对齐 | 
| -             | 左对齐 | 
| 0          | 对于数值格式，用前导零代替空格填充字段宽度 |

&emsp;&emsp;输出的时候默认就是右对齐，所以一般用不到`+`标记<br>
&emsp;&emsp;直接看可能有点抽象，我们举个例子<br>
```c
#include<stdio.h>
int main(){
    int a = 5;
    double c = 77.77;

    printf("%-3.5lf\n",c);
    //输出77.77000
    //%：表示格式化字符串的起始标记。
    //-：表示左对齐输出。在这里，- 表示在输出区域内左对齐数字
    //3：表示输出区域的最小宽度为 3 个字符。如果输出的内容不足 3 个字符，会在左侧填充空格以达到最小宽度。
    //.5：表示保留小数点后5位精度。在这里，`.5`表示输出小数点后 5 位数字。
    //lf：表示输出一个双精度浮点数。
    
    int year = 2024;
    int month = 7;
    int day = 19;

    printf("今天是%02d-%02d-%02d\n",year,month,day);
    //输出2024-07-19
    //%02d：这是一个格式化说明符，用于表示一个整型数，并指定输出的宽度至少为 2 个字符，不足两位的数在左侧用零进行填充(因为默认是右对齐，所以零填充到左边)
    return 0;
}
```
&emsp;&emsp;有时候我们想打印很长的字符串，但是长长的一行在编译器上看着很别扭，我们可以用反斜杠（\）和Enter（或Return）键组合来断行。这使得光标移至下一行，而且字符串中不会包含换行符。例如：<br>

```c
#include<stdio.h>
int main(){
    printf("归去来兮，田园将芜胡不归？\n既自以心为形役，奚惆怅而独悲？\n\
悟已往之不谏，知来者之可追。\n实迷途其未远，觉今是而昨非。\n舟遥遥以轻飏，\
风飘飘而吹衣。\n问征夫以前路，恨晨光之熹微。\n");
    //Tips:\n是换行，单纯在行尾写个反斜杠然后另起一行接着写的话，编译器会认为它们是同一行的内容(但是看着舒服多了，不用左右拖动鼠标)
    //注意！！！使用这种方式"换行"的话，新的一行一定要顶格写，不要为了好看专门把新的一行缩进到跟前一行对齐，否则你会发现，输出结果里面多了一堆空格
    return 0;
}
```

##### (2)&nbsp;scanf()函数
&emsp;&emsp;学完输出，接下来我们转至输入——学习scanf()函数。C库包含了多个输入函数，scanf()是最通用的一个，因为它可以读取不同格式的数据<br>
&emsp;&emsp;scanf()和 printf()类似，也使用格式字符串和参数列表。scanf()中的格式字符串表明字符输入流的目标数据类型。两个函数主要的区别在参数列表中。printf()函数使用变量、常量和表达式，而scanf()函数使用指向变量的指针。关于指针是什么咱们在后面将，现在先不必了解如何使用指针，只需记住以下两条简单的规则：<br>
&emsp;&emsp;如果用scanf()读取基本变量类型的值，在变量名前加上一个&；<br>
&emsp;&emsp;如果用scanf()把字符串读入字符数组中(数组下一章讲，到时候还会提这一点，不用着急)，不要使用&<br>
::: warning
特别注意，scanf()的格式字符串中写转换字符以外的字符的时候一定一定要慎重，因为它会影响到程序读取数据
&emsp;&emsp;可能你对我刚刚提到的概念还有点懵，没关系，我们再通过一个例子理一理
:::

```c
#include<stdio.h>
int main(){
    int a;
    double b;
    long int c;

    scanf("%d",&a);
    scanf("%lf",&b);
    scanf("%ld",&c);
    //有些初学者喜欢在scanf的格式字符串中加一些标点等符号，但是这会改变scanf()的读取行为，导致程序运行出错，例如
    scanf("%d,%lf",&a,&b);
    /*可能这样我们看着感觉比%d%lf好看，但是要注意，这样写意味着我们要求输入者在输入a的值之后，必须专门输入一个逗号，然后再输入b的值，
    但是实际上我们希望的是，输入a的值之后(敲回车)，然后直接输入b的值，而不是在中间输入逗号，然后再输入b的值
    */
}
```
&emsp;&emsp;我们再举一个例子，输入一组数，求它们的和，并输出小于0的数
```c
#include<stdio.h>
int main(){
    //输入一组数，求和，并输出小于0的数的个数
    int cnt = 0;
    int sum = 0;
    int temp1;
    //scanf()函数的返回值是成功读取的项目数，可以通过这个来判断scanf是否正确运行。
    //另外，EOF是文件的结束符(通常是按 Ctrl+D 或 Ctrl+Z)，像下面的写法可以做到不断读取整数输入，直到遇到文件结束标志（EOF）
    while(scanf("%d",&temp1) != EOF){
        if(temp1 < 0){
            cnt++;
        }
        sum += temp1;
    }
    printf("这些数的和为%d,小于零的数有%d个\n",sum,cnt);
    //如果发现输入一直没结束，按下ctrl + z 即可结束输入(有可能需要再敲下回车)
}
```

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
&emsp;&emsp;log() 是 C 标准库 <math.h> 中的一个函数，用于计算一个浮点数的自然对数（以 e 为底）<br>
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

#### 4.&nbsp;其他函数
&emsp;&emsp;库函数还有很多很多，在实际开发中我们可以按照需要去相关的网站查阅，这里推荐两个网站：<br>
- 文档推荐&nbsp;<a href="https://www.runoob.com/cprogramming/c-standard-library-ctype-h.html">c标准库之字符函数库</a><br>
- 英文不错的同学可以看看这个&nbsp;(多看看英文文档没坏处)&nbsp;<a href="https://cplusplus.com/reference/">c/c++库函数</a>

### (五)&nbsp;作用域与生命周期
#### 1.&nbsp;作用域
&emsp;&emsp;在C语言中，作用域是程序中定义的变量所存在的区域，超过该区域变量就不能被访问。<br>
#### 2.&nbsp;局部变量与全局变量
&emsp;&emsp;在函数或语句块内部声明的变量称为局部变量，在函数或语句块外部声明的变量称为全局变量。例如：<br>
```c
#include<stdio.h>
//a和b是全局变量，在整个文件中都可以访问
int a = 20;
int b;
int main(){
    int mycalculate1(int a, int b);
    int outtest1();

    //c和d是局部变量，只能在main函数中访问
    int c,d;

    for(int i = 0;i < 10;i++){
        //i是在这个for循环代码块(一对大括号)内定义的，只能在这个for循环代码块中访问
        printf("%d\n",i);
    }
    //printf("%d\n",i);在这里试图打印变量i会报错，因为i的作用域只在上面那个for循环代码块中
    //换句话说，i已经“死掉了”，不能再被访问了
    
    {
        int temp1 = 90;
        printf("%d",temp1);
    }
    b = 7;//给全局变量赋值，因为b是全局变量，作用域是当前文件，所以在当前源文件中访问b，如果不修改它的值，它就等于7

    c = 12;
    d = 33;
    printf("%d\n",mycalculate1(c,d));//输出45
    outtest1();
    return 0;
}
//函数的参数叫形式参数，被当作该函数内的局部变量，如果与全局变量同名它们会优先使用。这里的a和b是形式参数，作用域只在这个mycalculate1函数中
//此时a、b的数值等于传入的数的数值，与全局变量a、b无关
int mycalculate1(int a,int b){
    printf("b = %d\n",b);//b = 33
    return a + b;
}
int outtest1(){
    printf("全局变量b = %d\n",b);//b = 7
}
```

&emsp;&emsp;那如果希望定义的变量能在其他源文件(一个.c文件称为一个源文件)被直接访问要怎么做呢？<br>
&emsp;&emsp;很简单，在声明变量的时候直接加上extern关键字，例如：<br>
```c
//在test1.c文件中定义全局变量a
#include<stdio.h>
extern int a;
int main(){
    a = 90;
    printf("%d\n",a);//输出90
    return 0;
}
```
```c
//在test2.c文件中引用test1.c文件中定义的a
#include<stdio.h>
int main(){
    a = 20;
    printf("%d\n",a);
    return 0;
}

```

&emsp;&emsp;在C语言中，extern关键字用于声明一个变量或函数，该变量或函数在其他文件中定义。使用extern可以在多个源文件之间共享全局变量或函数。extern声明的变量本身并不分配内存，而只是告诉编译器该变量在其他地方定义，编译器应在链接阶段找到其定义。
#### 3.&nbsp;多文件编程
&emsp;&emsp;在同一个文件中，可以定义多个函数，但是随着我们自定义的函数越来越多，代码行数也越来越长，这时再把所有的代码都放进一个文件中显得有些臃肿。<br>
&emsp;&emsp;我们可以将不同的函数分别放进不同的源文件中，主函数(main函数)那边只需要直接调取函数即可。<br>
&emsp;&emsp;一般我们采用两种方式来进行多文件编程。<br>
##### (1)&nbsp;
&emsp;&emsp;将函数体放到不同的文件中，然后只在主函数中保留原型声明。例如：<br>
```c
//在main.c文件中(名字随便，但是尽量见名知意，下同)
#include<stdio.h>
int mymax(int x, int y);
int myAdd(int x, int y);
int main(){
    printf("%d\n",mymax(10,20));
    printf("%d\n",myAdd(10,20));
    return 0;
}
```
```c
//在mymax.c文件中
#include<stdio.h>
int mymax(int x, int y){
    return (x > y) ? x : y;
}
```
```c
//在myAdd.c文件中
#include<stdio.h>
int myAdd(int x, int y){
    return x + y;
}
```
##### (2)&nbsp;自定义头文件
&emsp;&emsp;这种方法更直接，把全局变量、函数声明都放到一个自定义的头文件中，然后在主函数中直接引用。例如：<br>
```c
//在myfunc.h文件中
//使用#include引入头文件，在编译时IDE会直接把头文件的内容复制到当前源文件中，所以你甚至可以直接把其他头文件也写进来
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include <math.h>

// 全局变量声明
	extern int cou_1_scorenumber;
	extern int cou_2_scorenumber;

// 函数声明
    extern int mymax(int x, int y);
    // 1.新增学生信息
    extern int new_stu_information(int student_number1);
    // 2.新增课程信息
    extern int new_cou_information(int course_number1);

```
```c
//在主函数所在的源文件main.c中
#include <stdio.h>
#include"mystruct.h"//引入自定义头文件，注意是用双引号而不是用<>
int main(){
    right = 2;
    cou_1_scorenumber = 1;
    cou_2_scorenumber = 2;
    printf("%d\n",mymax(cou_1_scorenumber,cou_2_scorenumber));
    return 0;
}
```
&emsp;&emsp;之后再分别在其他源文件中写函数体即可，这里与方法一类似，不再赘述。<br>

## 六、&nbsp;数组
### (一)&nbsp;数组是什么？
&emsp;&emsp;数组是C语言中重要的数据类型，它是一个容器，其中存放了许多数据类型相同的元素<br>
&emsp;&emsp;打个比方，数组就像一个柜子，每个格子放了一个写着数字或字母的小球<br>
&emsp;&emsp;数组一旦创建，就不能再改变大小<br>
### (二)&nbsp;数组的格式？
&emsp;&emsp;数组的格式为：数据类型 数组名[元素数量]。例如:<br>
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
### (三)&nbsp;访问数组
&emsp;&emsp;在C语言中,遍历数组指的是按照一定的顺序访问数组中的每个元素。<br>
&emsp;&emsp;方括号[]中的数字表示的是要访问的元素的位置，即它是数组中第几个元素，这个数字被称为数组的下标<br>
:::warning
数组的下标从0开始，数组的下标不能超过数组的长度
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
### (四)&nbsp;数组初始化
#### 1.&nbsp;先创建，后初始化
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
#### 2.&nbsp;数组的集成初始化
```c
#include<stdio.h>
int main(){
    int number[] = {1,2,8,4,5,6,17,8,19,10};//数组初始化
    //大括号中的数一次用于初始化数组中的每个单元
    //[]内可以不写，IDE会自动填充
}
```
#### 3.&nbsp;(C99only)(不常用)
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
不能这样赋值
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

### (五)&nbsp;数组的大小
&emsp;&emsp;数组的大小由数组的元素个数决定，数组的大小是固定的，不能改变<br>
&emsp;&emsp;如何查看数组的大小呢？使用sizeof操作符即可<br>
&emsp;&emsp;C语言中,sizeof 用于获取数据类型或变量的大小,单位是字节。它的用法如下：<br>
```c
//相信大家已经对程序整体的结构有了一个大致的了解，从这里开始我有些地方就只给代码片段了，
printf("%d",sizeof(data_type));//data_type为数据类型
printf("%d",sizeof(variable));//variable为变量名字
//比如我们想看看int类型在我们的电脑上究竟占几个字节
printf("%d",sizeof(int));//data_type为数据类型
```
&emsp;&emsp;明白了sizeof的用法后，我们再看看如何获取数组的大小<br>
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

### (六)&nbsp;二维数组
&emsp;&emsp;二维数组可以看作是数组的数组，通常用于表示矩阵或表格数据。
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

## 七、&nbsp;指针
&emsp;&emsp;指针是 C 语言中一个非常强大且重要的概念。指针提供了直接访问内存地址的能力，可以用来操作数组、动态内存分配、函数参数传递等。
### (一)&nbsp;指针是什么？
&emsp;&emsp;指针是一个变量，与之前的变量不同，它保存了内存地址，而不是变量的值。指针变量的大小和普通变量一样，指针变量的值也是由操作系统分配的。指针变量的值是内存地址，而内存地址是8字节。<br>
```c
int i = 7;
int *p = &i;//&是取地址运算符，用来获取指定变量的地址(即找到这个变量的值存在哪)
//也可以写成int* p = &i;星号靠前靠后无所谓
```
### (二)&nbsp;指针与函数
&emsp;&emsp;指针与函数之间是紧密相连的，指针可以作为函数的参数传递，函数也可以返回指针。<br>
```c
#include<stdio.h>
void arrayMax(int *b);
void myfunction1(int *p){
    printf("%d\n",*p);//*是解引用运算符，用它来获取指针p所指向的内存地址上的值
    //在这个函数中可以通过指针来访问那个地址，从而获取那个地址上的值，或者修改那个地址上的值
    *p = 10;//通过指针p修改它所指向的内存地址上的值
    printf("%d\n",*p);
    return;
}
int main(){
    int a = 9;
    myfunction1(&a);//传递的是a的地址
    printf("%d\n",a);//a的值被修改了

    int b[] = {1,2,3,4,5,6,7,8,9,10};
    arrayMax(b);
    return 0;
}
//数组其实是一个指针，比如我们刚刚定义的那个数组b，其实b就是一个指针，它指向数组的第一个元素
//*b和b[0]是等价的

//int *p = b;(创建一个指向数组首元素的指针)。它与int *p = &b[0]是等价的

//函数参数表中的数组本质也是指针，我们只是传入了数组首元素的地址，
//下面这个函数的参数表中的int *b可以替换为int b[]
void arrayMax(int *b){
    int max = b[0];
    for(int i = 1; i < 10; i++){
        if(b[i] > max){
            max = b[i];
        }
    }
    printf("数组中最大的数是%d\n",max);
    return;
}
```
### (三)&nbsp;指针的赋值
&emsp;&emsp;我们前面提过，数组变量不能互相赋值，像下面这样的写法是不对的：<br>
```c
int a[] = {1,2,3,4,5,6,7,8,9,10};
int b[] = a;
```
&emsp;&emsp;但是指向相同类型变量的指针变量是可以互相赋值的，如下面的代码：<br>
```c
#include <stdio.h>
int main() {
    int num1 = 10;
    int *ptr1 = &num1;  // 指针ptr1指向num1的内存地址

    int *ptr2;
    ptr2 = ptr1;  // 将ptr1的值赋给ptr2

    printf("num1 = %d\n", num1);
    printf("ptr1 = %p\n", ptr1);// 输出ptr1存储的那个的地址
    printf("ptr2 = %p\n", ptr2);// 输出ptr2存储的那个的地址
    printf("*ptr1 = %d\n", *ptr1);// 输出ptr1指向的地址存储的数值
    printf("*ptr2 = %d\n", *ptr2);// 输出ptr2指向的地址存储的数值
    return 0;
}
```
:::warning
指向不同类型变量的指针不能互相赋值，如下面的代码：<br>
```c
#include<stdio.h>
int main(){
    int i = 10;
    int *p = &i;
    char *q;
    p = q;//这样赋值是错误的
    return 0;
}

```
:::

### (四)&nbsp;指向指针的指针
&emsp;&emsp;指针存储了它指向的变量的地址，指针的指针存储了它指向的指针的地址。<br>
```c
#include <stdio.h>
int main() {
    int num1 = 10;
    int *ptr1 = &num1;  // 指针ptr1指向num1的内存地址

    int **ptr2 = &ptr1;  // 将ptr1的地址赋给ptr2
    /*注意，这个地址指的不是ptr1指向的地址，
      而是ptr1变量本身在内存中的存储地址
      可以理解成ptr2指向ptr1，ptr1指向num1
    */
    printf("num1 = %d\n", num1);
    printf("ptr1 = %p\n", ptr1);// 输出ptr1存储的那个的地址
    printf("ptr2 = %p\n", ptr2);// 输出ptr2存储的那个的地址
    printf("*ptr1 = %d\n", *ptr1);// 输出ptr1指向的地址存储的数值
    printf("**ptr2 = %d\n", **ptr2);// 输出ptr2指向的地址存储的数值
    return 0;
}
```

### (五)&nbsp;const修饰的指针
&emsp;&emsp;在C语言中，const 是一个关键字，用于声明常量。常量是在程序运行期间不可修改的值。
```c
#include <stdio.h>
int main() {
    int i = 10;
    int * const q = &i;
    //指针q只能指向i，不能再指向其他变量
    const int * p = &i;
    //指针p只能读取i的值，不能通过指针p修改i的值，但是可以直接修改i的值
    *q = 20;
    //q指向的i的值被修改为20
    return 0;
}
```
### (六)&nbsp;指针参与的运算
```c
#include<stdio.h>
int main(){
    char ab[] = {0,1,9,3,7};
    char *p = ab;
    printf("%p %p\n",p,p+1);/*我们可以发现输出的两个十六进制数值相差为1
    这是因为对指针做加一操作时它会移动到下一个存储单元，
    每个存储单元的大小取决于它们的数据类型(结构体这个特例我们后面会说)
    p指向的是一个字符数组，每个字符的大小为1字节，所以指针p加1就指向下一个字符
    如果数组类型换成int的话就是后移4个字节，因为int的大小为4字节
    */

    //循环输出数组中每个元素
    //实质是访问p指向的元素、p加1后指向的元素、p加2后指向的元素…………
    for(int i = 0; i < 5; i++){
        printf("%d ",*(p+i));
        /*这里*(p+i)换成*p++效果是一样的，
        它的意思是先访问p指向的变量的值，再让p向后移动一个存储单元
        实在记不住优先级可以试试用括号，保证程序按照你想要的方式运行，
        比如写成(*p)++，保证解引用运算先进行
        */
    }
    return 0;
}
```

&emsp;&emsp;对指针进行大于、小于、大于等于、小于等于、等于、不等于这些运算符，都是用来比较两个指针变量的地址值(这么比除了看谁存储的位置靠前、谁靠后以外，好像没什么意义)，并不是来比较指针指向的内存地址上的内容谁大谁小。<br>
### (七)&nbsp;*p与p的区分
&emsp;&emsp;之前我们定义了一个指针变量
```c
int *p;
```
&emsp;&emsp;你可能对* p和p的区别有点迷糊，* p是用来获取指针p所指向的内存地址上的内容。而p是一个名为p的指针变量，它存储的是一个地址。<br>

### (八)&nbsp;空指针
&emsp;&emsp;顾名思义，空指针就是没有指向任何内容的指针。<br>









<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

待完成:
for-each循环放到指针那讲




数据溢出（128）
八进制16进制（121）

&emsp;&emsp;位与 & 位或 | 位非 ~ 位异或 ^ 位左移 << 位右移 >><br>
|= ^=
&= 



&emsp;&emsp;推荐一门课，浙大翁凯老师的<a href="https://www.bilibili.com/video/BV1XZ4y1S7e1/?spm_id_from=333.999.0.0">c语言教程</a>