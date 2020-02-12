import { AddStudentComponent } from './add-student/add-student.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public tabledata = ["Roll No.", "Name", "Class", "Branch", "Academic Year","Gender","Dob", "Action"]

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
    const modalRef = this.modalService.open(AddStudentComponent, { centered: true });
    // modalRef.componentInstance.name = 'Asif';
  }

  ngOnInit() {
  }

}
