import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTeamComponent } from './pages/about-team/about-team.component';
import { EditarDinosComponent } from './pages/editar-dinos/editar-dinos.component';
import { InsertarDinosComponent } from './pages/insertar-dinos/insertar-dinos.component';
import { ListarDinosComponent } from './pages/listar-dinos/listar-dinos.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'insertar-dinos'},
  {path:'insertar-dinos',component:InsertarDinosComponent},
  { path: 'editar-dino/:id', component: EditarDinosComponent },
  {path:'listar-dinos',component:ListarDinosComponent},
  {path:'about-team',component:AboutTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
