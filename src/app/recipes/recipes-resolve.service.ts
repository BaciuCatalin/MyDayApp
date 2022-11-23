import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolveService implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipeService) {}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (RecipeListComponent.length === 0) {
      return this.recipeService.fetchRecipe();
    } else {
      return recipes;
    }
  }
}
