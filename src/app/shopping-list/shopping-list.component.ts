import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;

        // this.ingredients.forEach(ingredient => {
        //   return localStorage.setItem('([this.ingredient.name]', (this.ingredients));
        //   //     this.ingredientSL+=ingredient.name + ': '+ ingredient.amount
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.onEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSaveIngredients(){
    // this.dataStorageService.storeIngredients();
  }
}
