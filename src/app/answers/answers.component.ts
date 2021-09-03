import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  constructor() { }

  @Input()
  answer:any;

  ngOnInit(): void {
  }

}
