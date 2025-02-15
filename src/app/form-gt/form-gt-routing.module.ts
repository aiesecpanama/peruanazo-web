import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGtComponent } from './form-gt.component';
import { FormGtThankYouComponent } from './form-gt-thank-you/form-gt-thank-you.component';

const routes: Routes = [
	{
    path: '',
    component: FormGtComponent
  },
  {
    path: 'gracias',
    component: FormGtThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGtRoutingModule { }
