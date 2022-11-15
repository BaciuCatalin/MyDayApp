import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  //   new Task('Doctors Appointment','May 5th at 2:30pm', true),
  //   new Task('Meeting at School','May 6th at 2:30pm', true),
  //   new Task('Food Shopping', 'May 7th at 12:30pm', false)
  // ];

  constructor( private taskService: TaskService, 
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    })
    this.tasks = this.taskService.getTasks();
  }

  onNewTask(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}


