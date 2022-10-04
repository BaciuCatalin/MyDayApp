import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   recipes: Recipe[] = [
    new Recipe( 'Bread', 'White','https://www.recipetineats.com/wp-content/uploads/2020/03/No-Knead-Easy-Yeast-Bread-recipe.jpg')
  , new Recipe( 'Bread', 'White','https://www.recipetineats.com/wp-content/uploads/2020/03/No-Knead-Easy-Yeast-Bread-recipe.jpg')
  ];
   
  constructor() {}

  ngOnInit(): void {}


    
  }


