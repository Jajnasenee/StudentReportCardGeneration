import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoc',
  templateUrl: './hoc.component.html',
  styleUrls: ['./hoc.component.css']
})
export class HocComponent implements OnInit {

  constructor(private router: Router) { }
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


  ngOnInit() {
  }

}
