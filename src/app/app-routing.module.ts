import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'v1/dashboard' },
  {
    path: 'v1', loadChildren: () => import('./components/version1/version1-module/version1-module.module')
      .then(mod => mod.Version1ModuleModule)
  }
  ,
  {
    path: 'v2', loadChildren: () => import('./components/version2/version2-module/version2-module.module')
      .then(mod => mod.Version2ModuleModule)
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }