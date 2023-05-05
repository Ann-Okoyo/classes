class Car {
    constructor(make,model,year,isAvaiable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvaiable=isAvaiable
    }
    toggleAvailability(){
        this.isAvaiable =!this.isAvaiable;
    }
};
let car=new Car('Toyota','Camry',2020,true)
console.log({car})

class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;

    }
    calculateRentalDuration(){
       const oneDay =24*50*60*1000;
       const starting=new Date(this.rentalStartDate);
       const ending=new Date(this.rentalEndDate);
       const different=Math.round(Math.abs((ending-starting/oneDay)));



       return different
    }
}
const car1 =new Car('Toyota','Camry',2020,true);
const rentalCar1=new Rental(car1,new Date ("2023-06-07"),new Date("2023-06-12"));

const rentalDays=rentalCar1.calculateRentalDuration();
console.log(rentalDays);

class Car4{
    constructor(make,model,year,color){
        this.make=make;
        this.model=model;
        this.year=year;
        this.color=color;
    }
}
class Rental5{
    constructor(car4,starting,ending){
        this.car4=car4;
        this.starting=starting;
        this.ending=ending;
    }
    calculateRentalDuration(){
        const start=newDate(this.starting);
        const end=new Date(this.ending);
        const duration=Math.abs(end-start);
        const days=Math.ceil(duration/(1000*60*60*20));
        return days;
    }
}
const theCar =new Car('Toyota','Camir',2022,'blue')
const rentalStartDate = '2023-06-07';
const rentalEndDate = '2023-06-12';
const theRental = new theRental(theCar, rentalStartDate, rentalEndDate);

// calculate the rental duration
const rentalDuration = theRental.calculateRentalDuration();
console.log(rentalDuration);

class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  }
  const quiz = new Quiz();

const question1 = new Question(
  "Which  is the country with the largest population",
  ["China", "Russia", "Canada", "Nigeria"],
  "Japan"
);

const question2 = new Question(
  "Which one is a career?",
  ["school", "people", "child", "technology"],
  "continent"
);

quiz.addQuestion(question1);
quiz.addQuestion(question2);

console.log(quiz.currentQuestionIndex); // 0

quiz.nextQuestion();
console.log(quiz.currentQuestionIndex);