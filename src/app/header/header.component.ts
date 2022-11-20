import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}

  // onFechRecipe(){
  //   this.dataStorageService.fetchRecipeDB().subscribe()
  // }

  // onFechTask(){
  //   this.dataStorageService.fechTaskDB().subscribe();
  // }

  onSaveData() {
    this.dataStorageService.recipeDB();
    this.dataStorageService.storeTask();
  }

  // onSaveRecipe() {
  //   this.dataStorageService.recipeDB();
  // }

  // onSaveTask() {
  //   this.dataStorageService.storeTask();
  // }

  onFechData() {
    this.dataStorageService.fetchRecipeDB().subscribe();
    this.dataStorageService.fechTaskDB().subscribe();
  }
}
