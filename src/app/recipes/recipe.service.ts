import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject, map, tap } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements OnInit {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Pizza',
  //     'Delicios',
  //     'https://www.pizzaibiza.ro/upload/shop/products/pizza-ibiza-specialitatea-casei@2x.jpg',
  //     [
  //       new Ingredient('Tomatoes', 3),
  //       new Ingredient('Prosciutto Crudo', 1),
  //       new Ingredient('Mozzarella', 2),
  //       new Ingredient('Parmezan', 1),
  //       new Ingredient('Rucola', 2),
  //     ]
  //   ),
  //   new Recipe(
  //     'Burger',
  //     'Delicios',
  //     'https://assets.sport.ro/assets/foodstory2019/2015/05/22/image_galleries/5942/cum-sa-gatesti-acasa-un-burger-ca-la-restaurant_size1.jpg',
  //     [
  //       new Ingredient('Bacon', 2),
  //       new Ingredient('Cheese', 2),
  //       new Ingredient('Bread Bun', 2),
  //       new Ingredient('Onion', 1),
  //       new Ingredient('Tomatoes', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(
    private ShoppingListService: ShoppingListService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchRecipe();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.ShoppingListService.addIngredients(ingredients);
    this.storeRecipe();
    this.fetchRecipe();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
    this.storeRecipe();
    this.fetchRecipe();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    this.storeRecipe();
    this.fetchRecipe();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
    this.storeRecipe();
    this.fetchRecipe();
  }

  storeRecipe() {
    const recipes = this.getRecipes();
    this.http
      .put(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        this.fetchRecipe();
        console.log(response);
      });
  }

  fetchRecipe() {
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
          this.setRecipes(recipes);
        }) // executa un cod fara modificare datele din observable
      );
  }
}
