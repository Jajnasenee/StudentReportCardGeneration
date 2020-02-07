import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(private router: Router) { }
  showBranches() {
    this.router.navigate(['/branches-SuperAdmin'])
  }
  showHoc() {
    this.router.navigate(['/hoc-SuperAdmin']);
  }
  showTeacher(){
    this.router.navigate(['/teacher-SuperAdmin']);
  }
  showStudent(){
    this.router.navigate(['/student-SuperAdmin']);
  }

  ngOnInit() {
  }

}
