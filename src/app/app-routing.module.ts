import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./ui/modules/about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./ui/modules/activity/activity.module').then( m => m.ActivityModule)
  },
  {
    path: '',
    redirectTo: 'activity',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
