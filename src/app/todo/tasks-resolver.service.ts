import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Task } from "./task.model";
import { DataStorageService } from "../shared/data-storage.service";
@Injectable({providedIn:'root'})
export class TasksResolverService implements Resolve<Task[]>{
    constructor(private dataStorageService: DataStorageService ){}
    resolve ( _route: ActivatedRouteSnapshot, _state: RouterStateSnapshot){
        return this.dataStorageService.fechTaskDB();
    }
}