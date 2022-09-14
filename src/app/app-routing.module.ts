import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: 'v2', loadChildren: () => import('./components/pages/version2/version2-module/version2-module.module')
      .then(mod => mod.Version2ModuleModule)
  },
  {
    path: 'v1', loadChildren: () => import('./components/pages/version1/version1-module/version1-module.module')
      .then(mod => mod.Version1ModuleModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }