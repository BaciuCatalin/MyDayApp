import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 @Input() task: Task;
 @Input() index: number;
 id: number;


  constructor( private taskService: TaskService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteTask(){
    this.taskService.deleteTask(this.id);
    this.router.navigate(['/tasks']);
  }

}
