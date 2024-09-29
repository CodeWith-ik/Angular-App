import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  address: string;
  phoneNumber: string;
  major: string;
  gpa: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule], // <--- Add this
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
      email: 'john@example.com',
      address: '123 Main St, Cityville',
      phoneNumber: '555-1234',
      major: 'Computer Science',
      gpa: 3.8
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 22,
      email: 'jane@example.com',
      address: '456 Elm St, Townsville',
      phoneNumber: '555-5678',
      major: 'Mathematics',
      gpa: 3.9
    }
  ];

  newStudent: Student = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    address: '',
    phoneNumber: '',
    major: '',
    gpa: 0
  };

  addOrUpdateStudent() {
    if (this.newStudent.name && this.newStudent.age && this.newStudent.email) {
      if (this.newStudent.id === 0) {
        // Add new student
        this.newStudent.id = this.students.length + 1;
        this.students.push({ ...this.newStudent });
      } else {
        // Update existing student
        const index = this.students.findIndex(s => s.id === this.newStudent.id);
        if (index !== -1) {
          this.students[index] = { ...this.newStudent };
        }
      }
      // Reset the form
      this.newStudent = {
        id: 0,
        name: '',
        age: 0,
        email: '',
        address: '',
        phoneNumber: '',
        major: '',
        gpa: 0
      };
    }
  }

  deleteStudent(studentId: number) {
    this.students = this.students.filter(student => student.id !== studentId);
  }

  editStudent(student: Student) {
    this.newStudent = { ...student };
  }
  
}