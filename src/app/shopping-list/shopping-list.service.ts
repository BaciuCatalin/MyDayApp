import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [ 
    new Ingredient ('tomatoes', 2),
    new Ingredient ('apple', 3)
  ];

  getIndredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    // for( let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() { }
}
