import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-hoc',
  templateUrl: './add-hoc.component.html',
  styleUrls: ['./add-hoc.component.css']
})
export class AddHocComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private db: AngularFirestore) { }

  addHoc(hoc: NgForm) {
    let hocDetails = hoc.form.value;
    return this.db.collection(`hoc`).add({
      name: hocDetails.name,
      branch: hocDetails.branch,
      email: hocDetails.email,
      phoneNo: hocDetails.phone,
      adress: hocDetails.adress,
      isActive: 'true'
    })
  }

  ngOnInit() {
  }

}
