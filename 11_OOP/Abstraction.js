// class CoffeeMachine{
//     #waterlevel =100

//     #heatwater(){
//         console.log("water is heating...")
//     }

//     #brewcoffee(){
//         console.log("Brewing cofee..")
//     }

//     brew(){
//         if(this.#waterlevel > 0){
//             this.#heatwater();
//             this.#brewcoffee();
//             this.#waterlevel-=10
//             console.log("your cofee is ready")
//         }else{
//             console.log("refill water")
//         }
//     }
// }
// const machine = new CoffeeMachine()
// machine.brew()


// 1. Bank Account
// Create a class BankAccount that:

// Has a private balance.

// Provides methods to:

// deposit(amount)

// withdraw(amount)

// checkBalance()

// ✅ Internal balance modification should not be accessible directly.

class BankAccount{
    #balance = 0

    deposit (amount){
        this.#balance+=amount
    }

    withdraw(amount){
        if(this.#balance < amount){
            console.log("insuffcient balance")
        }else{
            this.#balance-=amount
            console.log(`${amount} withdrwan succesfully`)
        }
    }

    checkBalance(){
        console.log(`your balance is ${this.#balance}`)
    }
}

const user =new BankAccount()
user.deposit(10000)
user.withdraw(2000)
user.checkBalance()
console.log(user.balance)