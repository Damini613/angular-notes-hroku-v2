import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes  = [
  {
    path: '', component:HelloComponent
  }
]

@NgModule({
  declarations: [
    HelloComponent
  ],
  // imports: [
  //   CommonModule
  // ],


  imports: [CommonModule ,RouterModule.forChild(routes)],  
  exports: [RouterModule]  ,
  // exports:[routes],
  // bootstrap: [HelloComponent]
})
export class LearningModule { }