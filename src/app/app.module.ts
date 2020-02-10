import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SpecialparagraphComponent } from './Custom-Practice/specialparagraph/specialparagraph.component';
import { CustomNavComponent } from './Router Testing/custom-nav/custom-nav.component';
import { CustomHomeComponent } from './Router Testing/custom-nav/custom-home/custom-home.component';
import { CustomAboutComponent } from './Router Testing/custom-nav/custom-about/custom-about.component';
import { AboutCanActivateGuard } from './Router Testing/canActivateAboutGuard.service';


const routes: Routes = [
  {path: 'first', component: CustomNavComponent},
  {path: 'home', component: CustomHomeComponent},
  {path: 'about', component: CustomAboutComponent, canActivate:[AboutCanActivateGuard]},
  {path: '**', redirectTo:"first"}
];

@NgModule({
  declarations: [
    AppComponent,
    SpecialparagraphComponent,
    CustomNavComponent,
    CustomHomeComponent,
    CustomAboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
