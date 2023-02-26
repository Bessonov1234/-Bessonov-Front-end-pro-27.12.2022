class Student {
  constructor(name, lastname, age, assessments) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.assessments = assessments;
    this.Attendance = [];
  }

  present() {
    const present = this.Attendance;
    present.push(true);
    if (present.length <= 25) {
      // console.log(present);
    } else {
      present.unshift();
    }
    return present;
  }
  absent() {
    const present = this.Attendance;
    present.push(false);
    if (present.length <= 25) {
      // console.log(present);
    } else {
      present.unshift();
    }
    return present;
  }
  average() {
    let result = this.assessments.split(" ");
    let count = 0;
    let arr = [];
    result.forEach((el) => {
      arr.push(el - 0);
      count++;
    });
    return arr.reduce((accamulator, team) => accamulator + team) / count;
  }

  summary() {
    let summaryPt = this.Attendance;
    let count = 0;
    if (summaryPt.length <= 25) {
    } else {
      summaryPt.length = 25;
    }

    for (let i = 0; i <= summaryPt.length; i++) {
      if (summaryPt[i] == true) {
        count += 1;
      } else {
      }
    }
    let result = count / summaryPt.length;
    console.log(result);
    // console.log(this.average());

    if (result > 0.9 && this.average() > 90) {
      return console.log("Молодець");
    }
    if (result < 0.9 && this.average() < 90) {
      console.log("Редиска");
    } else {
      return console.log("Молодець, але можешь краще");
    }
  }

  ageStudents() {
    console.log(`Me name is ${this.name},and I am ${this.age} years old . `);
  }

  averageScoreStudents() {
    console.log(`I have average score  ${this.average()}`);
  }
}

// ! 1 student Молодець

let petro = new Student(
  "Petro",
  "Mogila",
  20,
  "100 90 100 100 100 100 100 100 100"
);

petro.ageStudents();
petro.averageScoreStudents();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.absent();
petro.absent();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.present();
petro.absent();
petro.absent();
petro.summary();

// ! Студент №2 Молодець але моешь краще

let pasha = new Student(
  "Pasha",
  "Mogila",
  30,
  "100 90 100 100 100 100 100 100 10"
);

pasha.ageStudents();
pasha.averageScoreStudents();

pasha.absent();
pasha.absent();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.present();
pasha.summary();

// ! Студент №3 Редиска

let john = new Student(
  "John",
  "Mogila",
  35,
  "100 90 100 100 100 100 100 100 10"
);

john.ageStudents();
john.averageScoreStudents();
john.present();
john.present();
john.absent();
john.absent();
john.absent();
john.absent();
john.absent();
john.present();
john.present();
john.absent();
john.absent();
john.summary();
