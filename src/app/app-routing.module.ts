import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrbConstableComponent } from './rrb-constable/rrb-constable.component';
import { SscCglComponent } from './ssc-cgl/ssc-cgl.component';

const routes: Routes = [
  {path:'ssc-cgl', component:SscCglComponent},
  {path:'ssc-cgl-II', component:SscCglComponent},
  {path:'rrb-constable', component:RrbConstableComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
