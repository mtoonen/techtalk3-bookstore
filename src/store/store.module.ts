import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './components/homepage/homepage.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import {BookdetailsComponent} from './components/bookdetails/bookdetails.component';
import {RecommendedComponent} from './components/recommended/recommended.component';
import {HttpClientModule} from '@angular/common/http';
import {MedewerkerportalComponent} from './components/medewerker/medewerkerportal/medewerkerportal.component';
import {RouterModule, Routes} from '@angular/router';
import {KlantportalComponent} from './components/klant/klantportal/klantportal.component';
import {EditbookComponent} from './components/medewerker/editbook/editbook.component';
import {OrderbookComponent} from './components/klant/orderbook/orderbook.component';

const routes: Routes = [
  {path: 'klant', component: KlantportalComponent},
  {path: 'medewerker', component: MedewerkerportalComponent},
  {path: 'bookdetails/:isbn', component: BookdetailsComponent},
  {path: 'editbook/:isbn', component: EditbookComponent},
  {path: 'orderbook/:isbn', component: OrderbookComponent},
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    HomepageComponent,
    SearchComponent,
    BookdetailsComponent,
    RecommendedComponent,
    MedewerkerportalComponent,
    KlantportalComponent,
    EditbookComponent,
    OrderbookComponent,
  ],
  exports: [
    HomepageComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ]
})
export class StoreModule {
}
