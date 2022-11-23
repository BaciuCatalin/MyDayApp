import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  tasksChanged = new Subject<Task[]>();

  // private tasks: Task[] = [
  //   new Task('Doctors Appointment', 'May 5th at 2:30pm', true),
  //   new Task('Meeting at School', 'May 6th at 2:30pm', true),
  //   new Task('Food Shopping', 'May 7th at 12:30pm', false),
  // ];

  private tasks: Task[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fechTask();
  }

  setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.tasksChanged.next(this.tasks);
  }

  getTasks() {
    return this.tasks;
  }

  getTask(index: number) {
    return this.getTasks[index];
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
    this.storeTask();
    this.fechTask();
  }

  updateTask(index: number, newTask: Task) {
    this.tasks[index] = newTask;
    this.tasksChanged.next(this.tasks.slice());
    this.storeTask();
    this.fechTask();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksChanged.next(this.tasks.slice());
    this.storeTask();
    this.fechTask();
  }

  fechTask() {
    return this.http
      .get<Task[]>(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        tap((tasks) => {
          this.setTasks(tasks);
        })
      );
  }

  storeTask() {
    const tasks = this.getTasks();
    this.http
      .put(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/tasks.json',
        tasks
      )
      .subscribe((response) => {
        this.fechTask();
        console.log(response);
      });
  }
}
