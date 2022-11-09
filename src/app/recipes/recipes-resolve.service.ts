import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolveService implements Resolve<Recipe[]> {


  constructor( private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes()
    if(RecipeListComponent.length === 0){
      return this.dataStorageService.fetchRecipeDB()
    }
    else{
      return recipes;
    }
  }

}
