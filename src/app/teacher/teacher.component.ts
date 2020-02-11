import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public tabledata = ["Name", "Email", "Phone no.", "Branch", "Class", "Emp.Id","Action"]

  constructor(private router: Router) { }
  showBranches() {
    this.router.navigate(['/branches-SuperAdmin'])
  }
  showHoc() {
    this.router.navigate(['/hoc-SuperAdmin']);
  }
  showTeacher() {
    this.router.navigate(['/teacher-SuperAdmin']);
  }
  showStudent() {
    this.router.navigate(['/student-SuperAdmin']);
  }

  ngOnInit() {
  }

}
