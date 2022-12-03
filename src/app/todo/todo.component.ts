import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title: string = 'Today Tasks';
  date = new Date().toDateString();
  calendar = new Date()
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() {}
  
  ngOnInit() {}
    day = this.days[this.calendar.getDay()];
    dayOf = this.calendar.getDay();
    month = this.months[this.calendar.getMonth()]; 

}
