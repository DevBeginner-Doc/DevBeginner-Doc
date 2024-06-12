 



# 小熊猫C++编译器



## 简介

小熊猫编译器（RedPanda-CPP）是一款基于Qt5框架开发的轻量级集成开发环境（IDE），专为C/C++语言设计。它以简洁的用户界面、跨平台兼容性（支持Windows、Mac OS X、Linux）和高效的代码编辑功能为特点，适合编程初学者和教育用途。小熊猫编译器提供了代码自动补全、语法高亮、代码导航等辅助编程工具，支持GCC等编译器，允许用户根据项目需求配置编译选项。此外，它还整合了多种库，如ege、海龟作图、raylib等，便于用户学习和实验编程概念。



## 下载及配置 

- 官网地址

[小熊猫C++ (royqh.net)](http://royqh.net/redpandacpp/)

- 下载步骤

- ![下载1.png](/images/Environment/red-panda/下载1.png)



- ![下载2.png](/images/Environment/red-panda/下载2.png)



C语言手册开发文档：[C 参考手册 - cppreference.com](https://zh.cppreference.com/w/c)

- 正式下载

我用的是百度网盘里的有编辑器exe文件



- ![下载3.png](/images/Environment/red-panda/下载3.png)



- 如果采用蓝凑云，避免下载无编译器版本：如果你的电脑有GCC或其他编译器可以下载之后配置一下，但没必要这么麻烦。



- ![下载4.png](/images/Environment/red-panda/下载4.png)



- ![下载5.png](/images/Environment/red-panda/下载5.png)







- 方便起见我直接下载桌面了，桌面也在C盘，大家下载时尽量下载路径选D盘或其他盘。

- ![下载6.png](/images/Environment/red-panda/下载6.png)

- ![下载8.png](/images/Environment/red-panda/下载8.png)

- ![下载9.png](/images/Environment/red-panda/下载9.png)



- 接下来的协议选择我接受后，进行安装的用户选择：选择为自己安装



- ![下载10.png](/images/Environment/red-panda/下载10.png)



- ![下载11.png](/images/Environment/red-panda/下载11.png)



- 接下来的安装路径选择自己预定的。没有的话默认也可以

  

- ![下载12.png](/images/Environment/red-panda/下载12.png)



- 点击完成即安装结束

  

  - ![安装完成.png](/images/Environment/red-panda/安装完成.png)



点击“yes“后开始设置：

- ![使用1.png](/images/Environment/red-panda/使用1.png)



- ![使用2.png](/images/Environment/red-panda/使用2.png)



## 创建项目文件

 

- 首先点击文件：

- ![使用3.png](/images/Environment/red-panda/使用3.png)



- 选择新建然后点击创建新的C/C++文件(也可以先创建一个项目然后在项目里创建C/C++文件)：

项目相当于一个文件夹，如果有很多相同性质的C/C++文件可以放在一个项目里。比如弄一个项目用来装学校oj的源代码。
 
但多说一句，项目的实际作用不止于此：它是一个完整的工程，里面会有多个完成特定功能的模块。感兴趣的同学可以参考这篇文章：[你真的知道什么是项目吗？项目的基本概念_什么是项目?什么 是it项目?-CSDN博客](https://blog.csdn.net/weixin_42400743/article/details/106940573)

这里用创建项目做演示：

- ![使用4.png](/images/Environment/red-panda/使用4.png)



点击OK后会提示不存在该项目（如果存在说明重名了）：选择创建



- 随后创建项目文件

- ![使用5.png](/images/Environment/red-panda/使用5.png)

- ![使用6.png](/images/Environment/red-panda/使用6.png)



- 现在就可以编写第一个程序了：

- ![使用7.png](/images/Environment/red-panda/使用7.png)


 
- 这是源代码

```c
#include<stdio.h>//头文件，含有输入输出等函数的声明
int main(){//也可以int main(void),void是表示“空”的数据类型
	int a,b;//定义了两个整数类型
	scanf("%d,%d",&a,&b);//输入两个整数
	printf("两数之和为%d",a+b);
	return 0;//表示程序正常退出
}
```



- 运行结果
![使用8.png](/images/Environment/red-panda/使用8.png)



## 个人配置



工具--选项：

![使用9.png](/images/Environment/red-panda/使用9.png)

字体、背景、语法高亮等常见外观都可以在这儿调。