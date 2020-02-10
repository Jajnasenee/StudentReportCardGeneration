import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(AddComponent);
    // modalRef.componentInstance.name = 'Asif';
  }
  ngOnInit() {
  }

}
