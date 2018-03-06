import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsComponent } from './locations.tobacco';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tobacco'
    },
    children: [
      {
        path: 'locations',
        component: LocationsComponent,
        data: {
          title: 'Locations'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TobaccoRoutingModule {}
