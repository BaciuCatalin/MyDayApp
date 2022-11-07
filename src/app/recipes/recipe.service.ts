import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe( 'Pizza', 'Delicios','https://www.pizzaibiza.ro/upload/shop/products/pizza-ibiza-specialitatea-casei@2x.jpg',
    [ new Ingredient('Tomatoes', 3),
      new Ingredient('Prosciutto Crudo', 1),
      new Ingredient('Mozzarella', 2),
      new Ingredient('Parmezan', 1),
      new Ingredient('Rucola', 2)
    ])
  , new Recipe( 'Burger', 'Delicios','https://assets.sport.ro/assets/foodstory2019/2015/05/22/image_galleries/5942/cum-sa-gatesti-acasa-un-burger-ca-la-restaurant_size1.jpg',
    [
      new Ingredient('Bacon', 2), 
      new Ingredient('Cheese', 2),
      new Ingredient('Bread Bun',2),
      new Ingredient('Onion',1),
      new Ingredient('Tomatoes', 1)
    ])
  ];

  constructor(private ShoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.ShoppingListService.addIngredients(ingredients);

  }
}
