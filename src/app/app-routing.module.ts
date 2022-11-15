import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { TodoComponent } from './todo/todo.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolveService } from './recipes/recipes-resolve.service';
import { TaskStartComponent } from './todo/task-start/task-start.component';
import { TaskEditComponent } from './todo/task-edit/task-edit.component';
import { TaskDetailComponent } from './todo/task-detail/task-detail.component';
import { TasksResolverService } from './todo/tasks-resolver.service';

const routes: Routes = [
  { path:'', redirectTo: '/todo', pathMatch: 'full' },
  { path:'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolveService] },
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolveService] }
  ] },
  { path:'shopping-list', component: ShoppingListComponent },
  { path:'todo', component: TodoComponent, children:[
    { path: '', component: TaskStartComponent},
    { path: 'new', component: TaskEditComponent},
    { path: ':id', component: TaskDetailComponent, resolve: [TasksResolverService]},
    { path: ':id/edit', component: TaskEditComponent, resolve: [TasksResolverService] }
   
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
