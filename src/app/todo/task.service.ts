import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasksChanged = new Subject<Task[]>();

  // private tasks: Task[] = [
  //   new Task('Doctors Appointment', 'May 5th at 2:30pm', true),
  //   new Task('Meeting at School', 'May 6th at 2:30pm', true),
  //   new Task('Food Shopping', 'May 7th at 12:30pm', false),
  // ];

  private tasks: Task[] = [];
  constructor() {}

  setTasks( tasks: Task[]){
    this.tasks = tasks;
    this.tasksChanged.next(this.tasks);
  }

  getTasks() {
    return this.tasks.slice();
  }

  getTask(index: number) {
    return this.getTasks[index];
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }

  updateTask(index: number, newTask: Task) {
    this.tasks[index] = newTask;
    this.tasksChanged.next(this.tasks.slice());
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
    this.tasksChanged.next(this.tasks.slice());
  }
}
