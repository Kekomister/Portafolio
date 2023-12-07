import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LeftComponent } from './pages/left/left.component';
import { RightComponent } from './pages/right/right.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "aboutMe", component: LeftComponent, data : {animation : 'isLeft'}},
  {path: "proyects", component: RightComponent, data : {animation : 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
