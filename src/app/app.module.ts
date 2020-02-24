import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommercialRoComponent } from './commercial-ro/commercial-ro.component';
import { IndustrialroComponent } from './industrial-ro/industrial-ro.component';
import { DomesticroComponent } from './domestic-ro/domestic-ro.component';
import { AmcComponent } from './amc/amc.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'domestic', component: DomesticroComponent},
  {path: 'industrial', component: IndustrialroComponent},
  {path:'amc', component: AmcComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'commercial', component: CommercialRoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CommercialRoComponent,
    IndustrialroComponent,
    DomesticroComponent,
    AmcComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
