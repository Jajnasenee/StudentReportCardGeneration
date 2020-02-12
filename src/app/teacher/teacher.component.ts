import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public tabledata = ["Name", "Email", "Phone no.", "Branch", "Class", "Emp.Id","Action"]

  constructor(private router: Router, private modalService: NgbModal) { }
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
  open() {
    const modalRef = this.modalService.open(AddTeacherComponent, { centered: true });
    // modalRef.componentInstance.name = 'Asif';
  }

  ngOnInit() {
  }

}
