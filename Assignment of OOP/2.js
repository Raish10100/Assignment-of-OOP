// Create a student enrollment system using JS classes.Implement two classes,Student and Admission,to manage student enrollements,course admission,and enrollment tracking.The Student class should have methods for enrolling in courses and displaying enrolled courses,while the Admission class should handle student enrollements, course admission ,and the display of enrolled students. Your task is to implement these classes with clear and organized code, adhering to te specified requirement provided.


class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courses = [];
    }
  
    enroll(course) {
      if (!this.courses.includes(course)) {
        this.courses.push(course);
        console.log(`${this.name} enrolled in ${course}`);
      } else {
        console.log(`${this.name} is already enrolled in ${course}`);
      }
    }
  
    showCourses() {
      console.log(`${this.name}'s enrolled courses:`);
      this.courses.forEach(course => console.log(course));
    }
  }
  
  class Admission {
    constructor() {
      this.enrolledStudents = [];
    }
  
    enrollStudent(student) {
      if (!this.enrolledStudents.includes(student)) {
        this.enrolledStudents.push(student);
        console.log(`${student.name} has been enrolled`);
      } else {
        console.log(`${student.name} is already enrolled`);
      }
    }
  
    assignCourse(student, course) {
      student.enroll(course);
    }
  
    showEnrolledStudents() {
      console.log("Enrolled Students:");
      this.enrolledStudents.forEach(student => console.log(student.name));
    }
  }
  

  const admissionOffice = new Admission();
  
  const student1 = new Student('Sahil', 'sahil459@gmail.com');
  const student2 = new Student('Ramesh', 'ramesh876@gmail.com');
  
  admissionOffice.enrollStudent(student1);
  admissionOffice.enrollStudent(student2);
  
  admissionOffice.assignCourse(student1, 'Full Stack Web Development');
  admissionOffice.assignCourse(student2, 'Data Science Masters');
  
  student1.showCourses();
  student2.showCourses();
  
  admissionOffice.showEnrolledStudents();
  