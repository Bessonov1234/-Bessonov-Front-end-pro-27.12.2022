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
      console.log(present);
    } else {
      // console.log('end');
      console.log(present.unshift());
    }
    return present;
  }
  absent() {
    const present = this.Attendance;
    present.push(false);
    if (present.length <= 25) {
      console.log(present);
    } else {
      present.unshift();
    }
    return present;
  }
  summary() {
    // this.absent();
    // this.present()
    // let summaryAbsent = this.absent;
    // let summaryPresent = this.present;
    let summaryPt = this.Attendance;
    let count = 0;
    for (let i = 0; i <= summaryPt.length; i++) {
      if ((summaryPt[i] = true)) {
        count++;
      }
    }
    console.log(summaryPt);
  }
  //  average() {
  //     let result = this.assessments.split(" ");
  //     let count = 0;
  //     let arr = [];
  //     result.forEach((el) => {
  //       arr.push(el - 0);
  //       count++;
  //     });
  //    return arr.reduce((accamulator, team) => accamulator + team) / count;
  //   }

  //   ageStudents() {
  //     console.log(`Me name is ${this.name},and I am ${this.age} years old . `);
  //   }

  //   averageScoreStudents() {
  //     console.log(`I have average score  ${this.average()}`);
  //   }
}

let petro = new Student("Petro", "Mogila", 20, "10 20 30 50 60 50 60 5 20");

// petro.ageStudents();
petro.present();
petro.present();
petro.absent();

petro.summary();