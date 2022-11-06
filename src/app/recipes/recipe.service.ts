import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe( 'A test recipe', 'White','https://www.recipetineats.com/wp-content/uploads/2020/03/No-Knead-Easy-Yeast-Bread-recipe.jpg')
  , new Recipe( 'Another test recipe', 'White','https://www.recipetineats.com/wp-content/uploads/2020/03/No-Knead-Easy-Yeast-Bread-recipe.jpg')
  ];

  constructor() { }

  getRecepis(){
    return this.recipes.slice();
  }
}
