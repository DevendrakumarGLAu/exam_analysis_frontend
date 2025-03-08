import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SscCglComponent } from './ssc-cgl/ssc-cgl.component';

const routes: Routes = [
  {path:'ssc-cgl', component:SscCglComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
