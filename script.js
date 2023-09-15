function Student(name, lastName, yearOfBirth, marks){
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.marks = marks;

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

}

    const studentIvan = new Student('Ivan', 'Budko', '1999', [89, 90, 78, 96])
console.log(studentIvan.name+' '+studentIvan.lastName+' '+studentIvan.yearOfBirth+' '+studentIvan.marks+' '+studentIvan.showAge()+' '+studentIvan.showAverageScore());