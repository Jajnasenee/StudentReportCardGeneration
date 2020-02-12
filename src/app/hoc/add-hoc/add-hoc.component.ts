import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-hoc',
  templateUrl: './add-hoc.component.html',
  styleUrls: ['./add-hoc.component.css']
})
export class AddHocComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
