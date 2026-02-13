class student{
   name:string;
   age:number;

   constructor(name:string,age:number){
      this.name=name;
      this.age=age;
   }

   introduce(){
      console.log(`Hi, I am ${this.name} and my age is ${this.age}`);
   }
}

const student1=new student('Salman',25);
student1.introduce();