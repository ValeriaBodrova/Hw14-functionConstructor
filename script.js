function Student(name, lastName, yearOfBirth, marks = []){
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.marks = marks;
    this.attendance = new Array(25).fill(null);
    this.currentIndex = 0;

    this.showAge = function(){
        let countAge = 2023 - this.yearOfBirth;
        return countAge;
    }

    this.showAverageScore = function(){

        let sum = 0;
        let count = 0;

        for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        count++;
    }
         let average = sum / count;

        return average;
    }
   

    this.present = function() {
        if (this.currentIndex < 25) {
            this.attendance[this.currentIndex++] = true;
        } else {
            console.log("Масив відвідуваності повний!");
        }
    }

    this.absent = function() {
        if (this.currentIndex < 25) {
            this.attendance[this.currentIndex++] = false;
        } else {
            console.log("Масив відвідуваності повний!");
        }
    }

    this.summary = function() {
        const averageMark = this.showAverageScore();
        const visitedLessons = this.attendance.filter(v => v === true).length;
        const averageAttendance = visitedLessons / this.currentIndex;

        if (averageMark > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        } else if (averageMark <= 90 || averageAttendance <= 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }

    this.addToDOM = function() {
        const tableBody = document.querySelector("#students-table tbody");
        const row = tableBody.insertRow();

        const nameCell = row.insertCell(0);
        const surnameCell = row.insertCell(1);
        const yearCell = row.insertCell(2);
        const avgGradeCell = row.insertCell(3);
        const attendanceCell = row.insertCell(4);
        const summaryCell = row.insertCell(5);

        nameCell.textContent = this.name;
        surnameCell.textContent = this.lastName;
        yearCell.textContent = this.yearOfBirth;
        avgGradeCell.textContent = this.showAverageScore().toFixed(2);
        attendanceCell.textContent = (this.attendance.filter(v => v).length / 25 * 100).toFixed(2) + '%';
        summaryCell.textContent = this.summary();
    }
}

// Створюємо екземпляри студентів
const student1 = new Student("Іван", "Іваненко", 2000, [89, 92, 78, 94, 87]);
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.addToDOM();

const student2 = new Student("Марія", "Петрівна", 1999, [95, 97, 93, 91, 96]);
student2.present();
student2.present();
student2.present();
student2.addToDOM();











