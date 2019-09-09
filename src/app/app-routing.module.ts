import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './shared/components';

import { TestComponent } from './test/test.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
