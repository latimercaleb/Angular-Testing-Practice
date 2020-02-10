import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserActiveService{
    userActivationState: boolean;
    constructor(){
        this.userActivationState = true;
    }

    getActiveState(){
        this.printActiveState();
        return this.userActivationState;
    }

    changeActiveState(){
        this.printActiveState();
        this.userActivationState = !this.userActivationState;
        console.log(`New activation state is: ${this.userActivationState}`);
    }

    printActiveState(){
        console.log(`Current activation state is: ${this.userActivationState}`);
    }
}