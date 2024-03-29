import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private hhtp: HttpClient, private recipeService: RecipeService) {}

  recipeDB() {
    const recipes = this.recipeService.getRecipes();
    this.hhtp
      .put(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(recipes);
      });
  }

  fetchRecipeDB() {
     return this.hhtp
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
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
        }) // executa un cod fara modificare datele din observable
      )
      
  }
}
