import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  }
];

export const LandingRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
