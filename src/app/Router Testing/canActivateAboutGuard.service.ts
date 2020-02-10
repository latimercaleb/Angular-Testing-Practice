import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { UserActiveService } from "./userActive.service";

@Injectable({
    providedIn: 'root'
})
export class AboutCanActivateGuard implements CanActivate{
    constructor(private uaService: UserActiveService){}
    canActivate(): boolean{
        if (this.uaService.getActiveState() === false){
            alert('Can activate false!');
            return false;
        }
        return true;
    }
}