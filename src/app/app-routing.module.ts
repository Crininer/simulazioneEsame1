import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigListComponent } from './big-list/big-list.component';

const routes: Routes = [
  {
    path: '',
    component: BigListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
