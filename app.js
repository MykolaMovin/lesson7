// Practical task 1
function propsCount(currentOject){
    let keys = Object.keys(currentOject);
    return keys.length;
};

// Practical task 2
let arbitraryObject = {
    firstProperty: 'This is the first property',
    secondProperty: 'This is the second property',
    thirdProperty: 'This is the third property',
    fourthProperty: 'This is the fourth property',
    fifthProperty: 'This is the fifth property'
};

function showPrpos(obj) {
    for (let prop in obj) {
        console.log(prop, obj[prop]);
    };
}

// Practical task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.fullName = (name = this.name, surname = this.surname) => console.log(name, surname)
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        let date = new Date();
        this.admissionYear = year;
        this.fullName = (middleName) => console.log(this.name, this.surname, middleName);
        this.showCourse = (admissionYear = this.admissionYear) => {
            return (date.getFullYear() - admissionYear);
        };

    }
}

const stud1 = new Student("Petro", " Petrenko ", 2015);
console.log(stud1.fullName('Petrovych'));
console.log("Current course: " + stud1.showCourse());

// Practical task 4
class Worker {
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;

    };

    showSalary(){
        return this.dayRate * this.workingDays;
    };

    #_expirience = 1.2;

    showSalaryWithExperience(){
        return ((this.dayRate * this.workingDays) * this.experience);
    };

    get experience(){
        return this.#_expirience;
    };

    set experience(value){
        this.#_expirience = value;
    };
}

let worker = new Worker();
worker.experience = 1.5;
console.log(worker.experience);

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + ' salary: ' + worker1.showSalary());
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + ' salary: ' + worker2.showSalary());
console.log("New experience: " + worker1.experience);
console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
worker2.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + ' salary: ' + worker3.showSalary());
console.log("New experience: " + worker1.experience);
console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
worker3.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());

function sortBySalaryWithExpirience(arrayOfWorkers){
    return arrayOfWorkers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
};

const workers = [worker1, worker2, worker3];
const sortedWorkers = sortBySalaryWithExpirience(workers);
for (worker in sortedWorkers){
    console.log(`${sortedWorkers[worker].fullName}: ${sortedWorkers[worker].showSalaryWithExperience()}`);
};

function dynamicWorkersSorting(workers, property){
    return workers.sort((a, b) => a[property] - b[property]);
};
