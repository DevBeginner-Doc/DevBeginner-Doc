# 类与对象
## 1.概述
1. 类的定义
<br>
类：具有相同特征的事物的抽象描述，是抽象的、概念上的定义。

2. 对象的定义
<br>
对象：实际存在的该类事物的每个个体 ，是具体的 ，因而也称为实例(instance) 。

3. 辅助理解
<br>
手机是一种东西，是抽象的，可以理解为类，而手机又有很多品牌，很多型号，具体到某一特定的品牌和型号后，就是具体的，可以理解为对象。

4. 类的成员
<br>
类是一组相关`属性`和`行为`的集合，分别对应类中的`成员变量`和`成员方法`。

## 2. 类的成员-变量

### 2.1 成员变量的声明
`语法格式`
```java 
[修饰符] class 类名{
[修饰符] 数据类型 成员变量名 [= 初始化值];
}
```
<h3>介绍</h3> <br>
- 位置要求：必须在类中，方法外
- 修饰符：
    - 权限修饰符有：private、缺省、protected、public
    - 其他修饰符：static、final
- 数据类型:任何基本数据类型或任何引用数据类型。
- 成员变量名:属于标识符，符合命名规则和规范即可。
- 初始化值:根据情况，可以显式赋值；也可以不赋值，使用默认值。

### 2.2 成员变量&局部变量

<h3>2.2.1 定义</h3> <br>

- 成员变量：在方法体外，类体内声明的变量
- 局部变量：在方法体内部等位置声明的变量
<h3>2.2.1 对比</h3> <br>

- 相同点
    - 变量声明的格式相同： 数据类型 变量名 = 初始化值
    - 变量必须先声明、后初始化、再使用。
    - 变量都有其对应的作用域。只在其作用域内是有效的
- 不同点
    1. 声明位置和方式 
        - 实例变量：在类中方法外 
        - 局部变量：在方法体{}中或方法的形参列表、代码块中
    2. 在内存中存储的位置不同 
        - 实例变量：堆 
        - 局部变量：栈
    3. 生命周期 
        - 实例变量：和对象的生命周期一样，随着对象的创建而存在，随着对象被GC回收而消亡， 而且每一个对象的实例变量是独立的。 
        - 局部变量：和方法调用的生命周期一样，每一次方法被调用而在存在，随着方法执行的结束而消亡， 而且每一次方法调用都是独立。
    4. 作用域 
        - 实例变量：通过对象就可以使用，本类中直接调用，其他类中“对象.实例变量” 
        - 局部变量：出了作用域就不能使用
    5. 修饰符（后面来讲） 
        - 实例变量：public,protected,private,final,volatile,transient等 
        - 局部变量：final
    6. 默认值 
        - 实例变量：有默认值 
        - 局部变量：没有，必须手动初始化。其中的形参比较特殊，靠实参给它初始化。

## 3. 类的成员-方法

### 3.1 什么是方法

- 方法是类或对象行为特征的抽象，用来完成某个功能操作。
- 将功能封装为方法的目的是，可以实现代码重用，减少冗余，简化代码。
- Java里的方法 不能独立存在 ，所有的方法必须定义在类里。

### 3.2 方法的声明
`语法格式`
```java
[修饰符] 返回值类型 方法名([形参列表])[throws 异常列表]{
    方法体的功能代码
}
```
<h3>关于方法体中return语句的说明</h3> <br>

- return语句的作用是结束方法的执行，并将方法的结果返回去
- 如果返回值类型不是void，方法体中必须保证一定有 return 返回值; 语句，并且要求该返回值结果的类型与声明的返回值类型一致或兼容。
- 如果返回值类型为void时，方法体中可以没有return语句，如果要用return语句提前结束方法的执行，那么return后面不能跟返回值，直接写`return ;`就可以。
- return语句后面就不能再写其他代码了，否则会报错：`Unreachable code`

`示例`

```java
package com.zzuli_52hertz.method;
/**
* 方法定义案例演示
*/
public class MethodDefineDemo {
    /**
    * 无参无返回值方法的演示
    */
    public void sayHello(){
        System.out.println("hello");
    }
    /**
    * 有参无返回值方法的演示
    * @param length int 第一个参数，表示矩形的长
    * @param width int 第二个参数，表示矩形的宽
    * @param sign char 第三个参数，表示填充矩形图形的符号
    */
    public void printRectangle(int length, int width, char sign){
        for (int i = 1; i <= length ; i++) {
            for(int j=1; j <= width; j++){
                System.out.print(sign);
            }
            System.out.println();
        }
    }
    /**
    * 无参有返回值方法的演示
    * @return
    */
    public int getIntBetweenOneToHundred(){
        return (int)(Math.random()*100+1);
    }
    /**
    * 有参有返回值方法的演示
    * @param a int 第一个参数，要比较大小的整数之一
    * @param b int 第二个参数，要比较大小的整数之二
    * @return int 比较大小的两个整数中较大者的值
    */
    public int max(int a, int b){
        return a > b ? a : b;
    }
}

```

### 3.3 方法的调用
`语法格式`
```java
对象.方法名([实参列表])
```
<h3>关于方法体中return语句的说明</h3> <br>

`示例`

```java
package com.zzuli_52hertz.method;
/**
* 方法调用案例演示
*/
public class MethodInvokeDemo {
    public static void main(String[] args) {
        //创建对象

        MethodDefineDemo md = new MethodDefineDemo();
        System.out.println("-----------------------方法调用演示-------------------------
        ");
        //调用MethodDefineDemo类中无参无返回值的方法sayHello
        md.sayHello();
        md.sayHello();
        md.sayHello();
        //调用一次，执行一次，不调用不执行
        System.out.println("------------------------------------------------");
        //调用MethodDefineDemo类中有参无返回值的方法printRectangle
        md.printRectangle(5,10,'@');
        System.out.println("------------------------------------------------");
        //调用MethodDefineDemo类中无参有返回值的方法getIntBetweenOneToHundred
        md.getIntBetweenOneToHundred();//语法没问题，就是结果丢失
        int num = md.getIntBetweenOneToHundred();
        System.out.println("num = " + num);
        System.out.println(md.getIntBetweenOneToHundred());
        //上面的代码调用了getIntBetweenOneToHundred三次，这个方法执行了三次
        System.out.println("------------------------------------------------");
        //调用MethodDefineDemo类中有参有返回值的方法max
        md.max(3,6);//语法没问题，就是结果丢失
        int bigger = md.max(5,6);
        System.out.println("bigger = " + bigger);
        System.out.println("8,3中较大者是：" + md.max(8,9));
    }
}
```

## 4.Object类
### 4.1 Object类的概述
**类 `java.lang.Object`是类层次结构的根类，即所有其它类的父类。每个类都使用 `Object` 作为超类。**

- Object类型的变量与除Object以外的任意引用数据类型的对象都存在多态引用
- 所有对象（包括数组）都实现这个类的方法。
- 如果一个类没有特别指定父类，那么默认则继承自Object类。

### 4.2 Object类的方法

1. *equals()
    - 只能比较引用类型，Object类源码中equals()的作用与“==”相同：比较是否指向同一个对象。	
    - 格式:obj1.equals(obj2)
    - 当自定义使用equals()时，可以重写。用于比较两个对象的“内容”是否都相等
    - `重写示例`
    ```java
    class User{
        private String host;
        private String username;
        private String password;
        public User(String host, String username, String password) {
            super();
            this.host = host;
            this.username = username;
            this.password = password;
        }
        public User() {
            super();
        }
        public String getHost() {
            return host;
        }
        public void setHost(String host) {
            this.host = host;
        }
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
        @Override
        public String toString() {
            return "User [host=" + host + ", username=" + username + ", password=" + password + "]";
        }
        @Override
        public boolean equals(Object obj) {
            if (this == obj)
                return true;
            if (obj == null)
                return false;
            if (getClass() != obj.getClass())
                return false;
            User other = (User) obj;
            if (host == null) {
                if (other.host != null)
                    return false;
            } else if (!host.equals(other.host))
                return false;
            if (password == null) {
                if (other.password != null)
                    return false;
            } else if (!password.equals(other.password))
                return false;
            if (username == null) {
                if (other.username != null)
                    return false;
            } else if (!username.equals(other.username))
                return false;
            return true;
        }
    }
    ```

2. *toString()

- 默认情况下，toString()返回的是“对象的运行时类型 @ 对象的hashCode值的十六进制形式”。
- 在进行String与其它类型数据的连接操作时，自动调用toString()方法
- 如果我们直接System.out.println(对象)，默认会自动调用这个对象的toString()
- 可以根据需要在用户自定义类型中重写toString()方法
- `重写示例`
```java
public class Person {  
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}

```

3. getClass()
- public final Class<?> getClass()：获取对象的运行时类型
- 因为Java有多态现象，所以一个引用数据类型的变量的编译时类型与运行时类型可能不一致，因此如果需要查看这个变量实际指向的对象的类型，需要用getClass()方法

4. hashCode()
- public int hashCode()：返回每个对象的hash值。