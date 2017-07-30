function Person(name, age) {
    //->this:当做构造函数执行的时候,函数体中出现的THIS是当前类的一个实例
    this.name = name;//->给当前的实例对象增加一个NAME的属性
    this.age = age;
    this.say = function () {
        console.log('my name is ' + this.name + '，i am ' + this.age + ' years old！');
    }
}
var p1 = new Person('樊献锋', 28);
var p2 = new Person('宋涵', 29);

//console.log('say' in p1);//->TRUE
//console.log(p1.say === p2.say);//->FALSE 构造函数体中出现的THIS.XXX=XXX,都是给当前的实例增加一些私有的属性
p1.say();//->this:p1
p2.say();//->this:p2

