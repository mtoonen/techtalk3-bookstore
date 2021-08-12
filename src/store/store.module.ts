import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlantComponent } from './components/klant/klant.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MedewerkerComponent } from './components/medewerker/medewerker.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    KlantComponent,
    HomepageComponent,
    MedewerkerComponent,
    SearchComponent,
    BookdetailsComponent,
    RecommendedComponent,
  ],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class StoreModule { }
