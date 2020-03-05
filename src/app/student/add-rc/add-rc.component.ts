import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-rc',
  templateUrl: './add-rc.component.html',
  styleUrls: ['./add-rc.component.css']
})
export class AddRcComponent implements OnInit {

  constructor(private db: AngularFirestore) { }
  addRc(rc: NgForm) {
    let rcDetails = rc.form.value;
    return this.db.collection(`reportcard`).add({
      name: rcDetails.name,
      class:rcDetails.class,
      rollNo: rcDetails.rollNo,
      academicYear: rcDetails.academicYear,
      height: rcDetails.height,
      weight: rcDetails.weight,
      favouriteColor:rcDetails.favColor,
      aboutColor:,
      isActive: 'true'
    })
  }
  
  ngOnInit() {
  }

}
