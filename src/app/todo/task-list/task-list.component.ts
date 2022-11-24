import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  //   new Task('Doctors Appointment','May 5th at 2:30pm', true),
  //   new Task('Meeting at School','May 6th at 2:30pm', true),
  //   new Task('Food Shopping', 'May 7th at 12:30pm', false)
  // ];
  // ingredients: Ingredient[];
  ingredients: Ingredient[] = [];
  private subscription: Subscription;
  ingredientSL = '';
  id: number;
  title: string = 'Shopphing List Task';

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.taskService.fechTask().subscribe();

    this.taskService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
    this.tasks = this.taskService.getTasks();
    this.shoppingListService.fechIngredients().subscribe();
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;

        this.ingredients.forEach((ingredient, index) => {
          this.ingredientSL += ingredient.name + ': ' + ingredient.amount;
          if (index < this.ingredients.length - 1) {
            this.ingredientSL += ', ';
          }
        });
      }
    );
  }

  onNewTask() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.id);
    this.router.navigate(['/todo/'], { relativeTo: this.route });
  }
}
