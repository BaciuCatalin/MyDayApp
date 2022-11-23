import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
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
  ingredients: Ingredient[];
  // private subscription: Subscription;
  // ingredientSL = '';
  id: number;

  constructor( private taskService: TaskService, 
                private router: Router,
                private route: ActivatedRoute,
                private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.taskService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    })
    this.tasks = this.taskService.getTasks();

    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //     this.ingredients.forEach(ingredient => {
    //         this.ingredientSL+=ingredient.name + ': '+ ingredient.amount
    //     })
    //   } 
    // )
  }

  onNewTask(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onDeleteTask(){
    this.taskService.deleteTask(this.id);
    this.router.navigate(['/todo/'], { relativeTo: this.route } )
  }
}


