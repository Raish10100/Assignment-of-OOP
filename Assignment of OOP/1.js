// Create a BankAccount class in js using OOP principles.The class should have methods for depositing,withdrawing and checking the account balance.Ensure that account balance cannot go below zero and that both zero and that both deposit and withdrawal amounts must be positive.

class BankAccount{
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
    }

    // depositing method
    deposit(amount){
        if(amount>=0){
            this.balance+=amount
        }
        else{
            console.log("Please enter amount greater than 0");
        }
     return console.log(`Your Rs.${amount} is deposited successfully and your balance is Rs.${this.balance}`)   
    }

    // withdraw method
    withdraw(amount){

            if(amount<=this.balance && amount>0){
                this.balance-=amount;
            }
            else{
                console.log("Sorry,you have not enofe money to withdraw");
            }

            return console.log(`Your withdraw amount is Rs.${amount} and now your balance is Rs.${this.balance}`)
    }


    //Balance check method 
    checkBalance(){
        return console.log(`Your account balance is Rs.${this.balance}`);
    }
}


const myAccount = new BankAccount("Rakesh",1000);

myAccount.checkBalance();// Your account balance is 1000
myAccount.deposit(500);// Your 500 is deposited successfully and your balance is 1500
myAccount.deposit(-50);// Please enter amount greater than 0
myAccount.withdraw(200);// Your withdraw amount is 200 and now your balance is 1300
myAccount.withdraw(4000);// Sorry,you have not enofe money to withdraw
myAccount.checkBalance();// Your account balance is 1300
