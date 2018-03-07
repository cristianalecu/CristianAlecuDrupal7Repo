import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { CommonModule } from '@angular/common';
import { GridModule } from '../../modules/grid.module';

@NgModule({
  imports: [
    SettingsRoutingModule,
    CommonModule,
    GridModule,
  ],
  declarations: [ SettingsComponent ]
})
export class SettingsModule { }
