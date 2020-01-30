import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  public category = {
    cate_name: "Overview of Units",
    cate_desc: "This trimester saw our children work on topics like travel and transport, water and animal kingdom where they had the opportunity to observe, apply, analyze and evaluate.\n Literacy: The children developed their listening skills through stories, sounds, beats, rhymes. They were introduced to letters l – t with their phonic sounds. Vocabulary enrichment along with conversation based on themes. Stories were sequenced and children were encouraged to look at pictures and express themselves. Conversation has become an essential part of our literacy program encouraging our children to be expressive. Talking, reading and singing all stimulate children’s understanding and use of language enabling them to become good communicators. Reading continues to be the essence of our literacy program where children recognize sight words and use them. \n Numeration: Concepts through activities of position words where all activities through kinesthetic movements have been encouraged. Children have begun to recognize shapes and apply the different shapes to the environment. Making and creating shapes through various medium has been encouraged. Numbers 1 – 8 have been done with their number value, along with activities of classifying, ordering, matching and sorting. All these activities are related to everyday experiences. \n All the knowledge and information acquired over the semesters are enhanced further with the attention given to the Personal Social and Emotional development of the child. This attribute is considered extremely significant for its impact on the child’s holistic development. Being aware of the individual differences leading to children developing at different pace, there has been conscious attempt to provide a conducive environment for child to easily sail through these developmental processes.",
    cate_img: "./../../../assets/img_4.png"
  }

  constructor() { }

  ngOnInit() {
  }

}
