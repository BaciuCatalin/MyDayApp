import { Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService implements OnInit {
  ingredientsChanged = new Subject<Ingredient[]>();
  onEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    // new Ingredient ('tomatoes', 2),
    // new Ingredient ('apple', 3)
  ];

  constructor(
    private http: HttpClient,
  ) 
  {}
  ngOnInit(): void {
    // this.onFechData();
    this.fechIngredients();
  }

  getIngredients() {
    return this.ingredients?.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    this.storeIngredients();
    this.fechIngredients();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    this.storeIngredients();
    this.fechIngredients();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
    this.storeIngredients();
    this.fechIngredients();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
    this.storeIngredients();
    this.fechIngredients();
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.ingredientsChanged.next(this.ingredients);
  }

  storeIngredients() {
    const ingredients = this.getIngredients();

    this.http
      .put(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/ingredients.json',
        ingredients
      )
      .subscribe((response) => {
        this.fechIngredients();
        console.log(response);
      });
  }

  fechIngredients() {
    return this.http
      .get<Ingredient[]>(
        'https://mydayapp-3a97c-default-rtdb.firebaseio.com/ingredients.json'
      )
      .pipe(
        tap((ingredients) => {
          this.setIngredients(ingredients);
        })
      );
  }
}
