class BankAccount{
   public owner:string;
   private balance:number;

   constructor(owner:string,balance:number){
      this.owner=owner;
      this.balance=balance;
   }

   deposit(amount:number=0){
      this.balance+=amount;
   }

   getBalance(){
      return this.balance;
   }

}

const acc=new BankAccount('Salman',10000);
acc.deposit(5000);
console.log(acc.getBalance());

