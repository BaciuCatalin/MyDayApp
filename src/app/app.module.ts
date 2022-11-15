import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { TodoComponent } from './todo/todo.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { TaskDetailComponent } from './todo/task-detail/task-detail.component';
import { TaskEditComponent } from './todo/task-edit/task-edit.component';
import { TaskListComponent } from './todo/task-list/task-list.component';
import { TaskItemComponent } from './todo/task-list/task-item/task-item.component';
import { TaskStartComponent } from './todo/task-start/task-start.component';
import { TaskService } from './todo/task.service';
import { MyappStartComponent } from './myapp-start/myapp-start.component';

@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   RecipesComponent,
   RecipeListComponent,
   RecipeDetailComponent,
   RecipeItemComponent,
   ShoppingListComponent,
   ShoppingEditComponent,
   DropdownDirective,
   TodoComponent,
   RecipesStartComponent,
   RecipeEditComponent,
   TaskDetailComponent,
   TaskEditComponent,
   TaskListComponent,
   TaskItemComponent,
   TaskStartComponent,
   MyappStartComponent,
   ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
