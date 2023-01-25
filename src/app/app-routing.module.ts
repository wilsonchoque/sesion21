import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSalirGuard } from './guard/form-salir.guard';
import { PermisoGuard } from './guard/permiso.guard';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[PermisoGuard] },
  {path:'post', component:PostComponent, canActivate:[PermisoGuard]},
  {path:'formulario', component:FormularioComponent, canActivate:[PermisoGuard], canDeactivate:[FormSalirGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
