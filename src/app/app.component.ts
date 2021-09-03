import { Component, OnInit } from '@angular/core';
import { Answers } from './db/answers.model';
import { Questions } from './db/questions.model';
import { Answer } from './model/answer';
import { Topic } from './model/topic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quick-display';
  questionTypes: Topic[] = [];
  answers: Answer[] = [];
  answer:any;

  ngOnInit() {
    this.questionTypes = Questions.questions;
  }

  updateAnswer(answer: Answer) {
    this.answer = answer.content;
  }

  updateTopics(question: Topic) {
    console.log(Answers.answers
      .filter(ans => ans.type = question.type))
    this.answers = Answers.answers
                        .filter(ans => ans.type == question.type);
  }
  
}
