/* Exercise 1:
Define a filter function on the String object*/

String.prototype.filter = function(word){
    return this.replace(" " + word, "");
}

console.log("This house is not nice!".filter('not'));




/* Exercise 2:
Write a BubbleSort algorithm on the Array object. */

Array.prototype.bubbleSort = function(){
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    
    return this;
}

console.log([6, 4, 0, 3, -2, 1].bubbleSort());






/* Exercise 3:

Create an object called Teacher derived from the Person class, and implement a method called teach
which receives a string called subject, and returns:*/

var Person = function(){};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function(){
    return this.name +", " + this.age +" years old.";
}

var Student = function(){};

Student.prototype = new Person();
Student.prototype.learn = function(subject){
    console.log(this.name + " just learned " + subject);
}

var me =new Student();
me.initialize("John",25);
me.learn("Inheritance");

var Teacher = function(){};

Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name + "  is now teaching " + subject);
    return this.name + " is now teaching " + subject;
}

var zijlstra = new Teacher();
zijlstra.initialize("Michael Zijlstra", 35);
zijlstra.teach("WAP");
