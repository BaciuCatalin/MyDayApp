import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Injectable({ providedIn: 'root' })
export class TasksResolverService implements Resolve<Task[]> {
  constructor(private taskService: TaskService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.taskService.fechTask();
  }
}
