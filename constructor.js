//The Constructor Design Pattern
class Child{
    
    //Definition of the object structure
    constructor(name,age){
        this.name=name
        this.age=age
    }
    intro(){
        return `I am ${this.name} and I am ${this.age} years old`
    }
}

//Instantiation of the object
const Jack=new Child('Jack',12)

//Returns "I am Jack and I am 12 years old"
console.log(Jack.intro()) 
