import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { JlcarsAboutComponent } from './jlcars-about/jlcars-about.component';
import { JlcarsCarsComponent } from './jlcars-cars/jlcars-cars.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    InputIntegerComponent,
    JlcarsAboutComponent,
    JlcarsCarsComponent,
    CartComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
