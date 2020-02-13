import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private db: AngularFirestore) { }

  addTeacher(teacher: NgForm) {
    let teacherDetails = teacher.form.value;
    return this.db.collection(`teacher`).add({
      name: teacherDetails.name,
      branch: teacherDetails.branch,
      email: teacherDetails.email,
      phoneNo: teacherDetails.phone,
      adress: teacherDetails.adress,
      class: teacherDetails.class,
      empId: teacherDetails.employeeId
    })

  }
  ngOnInit() {
  }

}
