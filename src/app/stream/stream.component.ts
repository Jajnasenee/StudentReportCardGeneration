import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  public category = {
    cate_name: "Overview of STREAM",
    cate_desc: "The future of Early Childhood Education involves the holistic development of a child’s social, emotional, cognitive and physical domains creating caring and responsible citizens.\n S.T.R.E.A.M unfolds and reveals an exploratory programme focusing on a learning that strengthens a value and skill based pedagogy.\n The acronym S.T.R.E.A.M gives an opportunity to keep in mind the importance of the core needs of the child culminating into the required academic strengths.\n Learning being a two way process encourage our facilitators to create a well-defined environment keeping in mind a high quality inclusive system.\n Children at this pre nursery stage are given experiences that build up their core needs leading them to springboard to the academic needs of the future comfortably.",
    cate_img: "./../../../assets/img_3.png"
  }

  constructor() { }

  ngOnInit() {
  }

}
