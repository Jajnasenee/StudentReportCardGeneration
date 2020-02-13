import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private db: AngularFirestore) { }


  addStudent(student: NgForm) {
    let studentDetails = student.form.value;
    return this.db.collection(`student`).add({
      rollNo: studentDetails.rollno,
      name: studentDetails.name,
      branch: studentDetails.branch,
      class: studentDetails.class,
      academicYear: studentDetails.academicYear,
      gender: studentDetails.gender,
      dob: studentDetails.dob,      
    })
  }

  close() {
    this.activeModal.dismiss('Cross click');
  }

  ngOnInit() {
  }

}
