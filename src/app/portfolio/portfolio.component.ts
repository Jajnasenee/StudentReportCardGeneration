import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public category = {
    cate_name: "What is a Portfolio?",
    cate_desc: "A portfolio is a purposeful collection and compilation of activities of a child at work. It displays cumulative effort and progress of the child towards mastering skills over the structured areas of development. It is an archive of child’s learning experiences and achievements.\n Portfolio helps the reader have an overview of the child’s progress in its sequence.It documents sample of child’s work or the evidence of child in action.It provides evidence of child’s abilities and growth in its progression.It has reflection of the facilitator along with anecdotes of the child.Anecdotes are comments made by the child before during or after the facilitation of an activity.It represents the child’s expression of emotion towards the facilitated activity.",
    cate_img: "./../../../assets/img_2.png"
  }

  constructor() { }

  ngOnInit() {
  }

}
