import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MainContentModule } from './main-content/main-content.module';

const routes: Routes = [{
  path: '',
  component: MainContentComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainContentModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
