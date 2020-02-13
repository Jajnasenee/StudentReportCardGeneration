import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private db: AngularFirestore) { }
  // @Input() name;
  addBranch(branch: NgForm) {
    let branchDetails = branch.form.value;
    return this.db.collection(`branch`).add({
      name: branchDetails.branchname,
      location: branchDetails.location,
      hoc: branchDetails.hoc,
      email: branchDetails.email,
      phoneNo: branchDetails.phone
    })
  }


  ngOnInit() {
  }

}
