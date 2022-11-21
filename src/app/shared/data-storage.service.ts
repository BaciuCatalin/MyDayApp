import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs';
import { TaskService } from '../todo/task.service';
import { Task } from '../todo/task.model';
import { Ingredient } from './ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private tasksService: TaskService,
    private shoppingListService: ShoppingListService
  ) {}

  recipeDB() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipeDB() {
    return this.http
      .get<Recipe[]>(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        }) // executa un cod fara modificare datele din observable
      );
  }

  fechTaskDB(){
    return this.http.get<Task[]>('https://mydayapp-3a97c-default-rtdb.firebaseio.com/tasks.json').pipe(tap(tasks => {
      this.tasksService.setTasks(tasks) 
    }));
    
  }

  storeTask() {
    const tasks = this.tasksService.getTasks();
    this.http
      .put(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/tasks.json',
        tasks
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  storeIngredients() {
    const ingredients = this.shoppingListService.getIngredients();
    this.http
      .put(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/ingredients.json',
        ingredients
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fechIngredientsDB() {
    return this.http
      .get<Ingredient[]>(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/ingredients.json'
      )
      .pipe(
        tap((ingredients ) => {
          this.shoppingListService.setIngredients(ingredients);
        })
      );
  }


  
}
