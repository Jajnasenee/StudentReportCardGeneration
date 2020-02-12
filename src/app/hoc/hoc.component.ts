import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AddHocComponent } from './add-hoc/add-hoc.component';

@Component({
  selector: 'app-hoc',
  templateUrl: './hoc.component.html',
  styleUrls: ['./hoc.component.css']
})
export class HocComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }
  public tabledata = ["Name", "Email", "Phone no.", "Branch", "Adress", "Action"]

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
    const modalRef = this.modalService.open(AddHocComponent, { centered: true });
    // modalRef.componentInstance.name = 'Asif';
  }

  ngOnInit() {
  }

}
