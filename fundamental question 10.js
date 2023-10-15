//10. The following constructor function creates a new Person object with the given name and age values.
//a) Create a new person using the constructor function and store it in a variable
//b) Create a second person using different name and age values and store it in a separate
//variable
//c) Print out the properties of each person object to the console
//d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.
//e) Add a canDrive method to both the constructor function and the class that returns true


    class Person{
        constructor (name, age) {
            this.name = name;
            this.age = age;
            this.human = true;
            
        }
        canDrive(){
        return (this.age >16) ? true: false
        }
    }

    function printProperties (object){
        for (let item in object)
        console.log(`${item}: ${object[item]}`)
    }

const Norma = new Person('norma', 15);
const john = new Person('John', 45);

console.log (Norma.canDrive());
console.log (john.canDrive());
 