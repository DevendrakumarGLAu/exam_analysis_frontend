import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatTableModule } from '@angular/material/table';  // Example for Angular Material Table
// import { MatInputModule } from '@angular/material/input';  // Example for Material Input
// import { MatButtonModule } from '@angular/material/button'; // Example for Buttons
// import { MatSelectModule } from '@angular/material/select'; // Example for Select dropdown

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommonAppModule { }
