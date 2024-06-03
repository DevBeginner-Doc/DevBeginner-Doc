# 引入

&emsp;&emsp;当你准备开始尝试编程时，需要做的第一件事便是配置好自己需要使用的<mark>集成开发环境（Integrated Development Environment，缩写为IDE</mark>，为方便起见下文我们都用缩写来称呼）。在此处，「配置」这一操作指的是下载、安装、注册登录（如果需要的话，不过幸运的是大多数IDE并不需要先登录再使用）并完成一些自定义设置（比如编辑器的主题颜色、字体样式，抑或是使用的编译器等等——这个我们稍后会更详细地讲到）。

&emsp;&emsp;IDE一般包括以下组件：用于显示和编辑代码的<mark>编辑器（Editor）</mark>、用于将你用人类能理解的[^1]高级程序设计语言[^2]写出的代码翻译成计算机能理解的机器语言的<mark>编译器（Compiler）</mark>、用于控制自己写好的程序并查看其运行中信息（比如变量等）的<mark>调试器（Debugger）</mark>以及用于和你进行交互的<mark>图形用户页面（Graphical User Interface，缩写为GUI）</mark>。

&emsp;&emsp;有一些IDE是针对单一语言设计的（比如Bloodshed Dev-C++就是一个专门服务于C/C++语言的IDE），而另一些则几乎支持所有编程语言（比如Sublime Text或者更广为人知[^3]的Visual Studio Code）。一般而言，配置针对单一语言设计的IDE会更简单些，不过在日后的学习生活中你很可能会需要使用一个对于编程语言支持更加广泛的IDE（除非你确信自己只使用一种编程语言[^4]）。因此，我们的「环境搭建」教程会同时包括这两类IDE。考虑到绝大多数新生使用的环境都会是Windows[^5]，因此我们在撰写环境搭建指南时优先考虑附上Windows端的截图。[^6]

&emsp;&emsp;在接下来的部分，我们将以编程语言为分类，详细地介绍某种语言对应的IDE的配置方法。

<div style="text-align: right; color: gray;">
Charles
</div>
	
[^1]: 但愿如此。一旦你真正开始上手编程，就会发现写出“人类能理解”的代码其实没想象中那么简单。
[^2]: 包括C、C++、Java、Python等。一般而言，你在市面上能看到的编程语言都是高级程序设计语言（汇编语言除外，汇编语言属于低级语言，它和机器指令直接对应，需要程序员对于硬件有深入了解）。高级语言的一个主要特点就是能在不同的平台上被编译成不同的机器语言，但执行结果（或者说它们被翻译成的机器语言在不同平台上起到的作用）是相同的。
[^3]: 截止到2024年1月，详见[Top IDE index](https://pypl.github.io/IDE.html)。
[^4]: 或者单纯喜欢在多个不同的IDE之间来回切换，抑或是想要让几个IDE占用完你所有的可用内存。
[^5]: 我们没有找到可供援引的具体数据，不过我们身边的绝大多数同学在大学期间的第一个笔记本都是搭载Windows的游戏本。如果你执意要购买一台MacBook（便携、性能强劲而且续航时间超长），那么请一定要确保你有一台搭载Windows的台式机或笔记本。抛开别的不谈，谁在大学阶段还没点游戏需求呢？
[^6]: 我们其实在一开始就有考虑制作Windows、Linux和macOS三端的配置教程。不过受时间和精力所限，我们只能选择优先完成Windows端的内容。