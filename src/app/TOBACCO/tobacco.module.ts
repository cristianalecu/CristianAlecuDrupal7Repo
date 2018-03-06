import { NgModule } from '@angular/core';

import { LocationsComponent } from './locations.tobacco';

// Components Routing
import { TobaccoRoutingModule } from './tobacco-routing.module';

@NgModule({
  imports: [
    TobaccoRoutingModule,
  ],
  declarations: [
    LocationsComponent,
  ]
})
export class TobaccoModule { }
