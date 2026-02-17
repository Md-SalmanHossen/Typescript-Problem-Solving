class User{
   private _age:number;

   constructor(age:number){
      this._age=age;
   }

   get age(){
      return this._age;
   }

   set age(value:number){
      if(value<0){
         console.log("Age can't be negative");
         return;
      }
      this._age=value;
   }

}

const user = new User(25);

console.log(user.age); // Output: 25

// Using the setter with valid data
user.age = 30; 

// Using the setter with invalid data
user.age = -5; // Output: "Age can't be negative"

