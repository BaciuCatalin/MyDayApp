import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {
  id: number;
  editMode = false;
  taskForm: FormGroup;
  index: number;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,    
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let taskText = '';
    let taskDay = '';
    let taskReminder = false;

    if (this.editMode) {
      const task = this.taskService.getTask(this.index);
      taskText = task.text;
      taskDay = task.day;
      taskReminder = task.reminder;
    }

    this.taskForm = new FormGroup({
      'text': new FormControl(taskText, Validators.required),
      'day': new FormControl(taskDay, Validators.required),
      'reminder': new FormControl(taskReminder, Validators.required),
    });
  }

  onSubmit() {
    //   const newTask = new Task(
    //   this.taskForm.value['text'],
    //   this.taskForm.value['day'],
    //   this.taskForm.value['reminder']);
      if (this.editMode) {
      this.taskService.updateTask(this.id, this.taskForm.value);
    } else {
      this.taskService.addTask(this.taskForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
