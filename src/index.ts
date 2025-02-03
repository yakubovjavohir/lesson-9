

// 1-vazifa //

interface IBank {
    deposit(amount:number):void,
    withdraw(amount:number):void
}

class Bank implements IBank {
    private balance: number;

    constructor(balance:number = 0){
        this.balance = balance
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount
            console.log(`hisobingizga ${amount} so'm to'ldirildi`);
            console.log(`balansizngiz : ${this.balance} so'm`);
        } else {
            console.log(`siz manfiy raqam kiritdingiz!`);
            
        }
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log('balansizngizda buncha pul mavjud emas!');
        } else {
            this.balance -= amount
            console.log(`hisobingizdan ${this.balance} so'm yechildi`);
        }
    }
}

const bankAccaount = new Bank()

// bankAccaount.deposit(10000)
// bankAccaount.deposit(10000)

// bankAccaount.withdraw(10000)











// 2-vazifa //

interface IPerson {
    sayHello(name:string):void
}

class Person implements IPerson {
    public salomlashish:string

    constructor(name:string = ''){
        this.salomlashish = name
    }
    sayHello(name: string): void {
        this.salomlashish = name
        console.log(`Hello, my name is ${this.salomlashish}`);
    }
}

const returnName = new Person()

// returnName.sayHello("Javohir")














// 3-vazifa //

class Employee {
    protected salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }
}

class Developer extends Employee {
    
    constructor(salary: number) {
        super(salary);
    }

    showSalary(): void {
        console.log(`developerning maoshi: ${this.salary} so'm`);
    }
}

// const dev = new Developer(5000);
// dev.showSalary();
















// 4-vazifa //

interface Vehicle {
    brand: string;
    speed: number;
}


class Car implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    showInfo(): void {
        console.log(`Mashina brandi: ${this.brand}, Tezlik: ${this.speed} km/h`);
    }
}

const myCar = new Car("Damas", 140);
myCar.showInfo();
