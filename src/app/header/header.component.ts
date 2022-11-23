import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { TaskService } from '../todo/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private taskService: TaskService) {}

  ngOnInit(): void {}

  onFechRecipe(){
    this.recipeService.fetchRecipe().subscribe()
  }

  onFechTask(){
    this.taskService.fechTask().subscribe();
  }

  onFechSL(){
    this.shoppingListService.fechIngredients().subscribe();
  }






  // onSaveData() {
  //   this.dataStorageService.recipeDB();
  //   this.dataStorageService.storeTask();
  //   this.dataStorageService.storeIngredients();
    
  // }

  // onFechData() {
  //   this.dataStorageService.fetchRecipeDB().subscribe();
  //   this.dataStorageService.fechTaskDB().subscribe();
  //   this.shoppingListService.fechIngredients().subscribe();
  // }

 
}
