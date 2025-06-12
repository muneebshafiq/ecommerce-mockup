import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SettingsComponent } from './views/settings/settings.component';
import { SecurityComponent } from './views/security/security.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
