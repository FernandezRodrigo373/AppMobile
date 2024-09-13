import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [CustomInputComponent, HeaderComponent],
  exports: [CustomInputComponent, HeaderComponent,ReactiveFormsModule],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule,FormsModule
  ]
})
export class SharedModule { }
