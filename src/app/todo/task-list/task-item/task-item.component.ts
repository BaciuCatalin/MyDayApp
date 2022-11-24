import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  id: number;
  ingredients: Ingredient[];
  title: string = 'Shopphing List Task';
    private subscription: Subscription;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe();
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.id);
    // this.router.navigate(['/todo/']);
    this.router.navigate(['/todo/'], { relativeTo: this.route });
  }
}
