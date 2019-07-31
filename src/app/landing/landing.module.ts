import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { LandingRoutingModule } from './landing-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SearchService } from '../services/search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
  SearchComponent,
  UserDetailComponent,
  LandingComponent
],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule
  ],
  providers: [
    SearchService
  ],
})
export class LandingModule { }
