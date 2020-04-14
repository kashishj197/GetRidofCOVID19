import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NavbarAppComponent } from './navbar/navbar.component';
import { WallsliderAppComponent } from './wallslider/wallslider.component';
import { GraphAppComponent } from './graph/graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAppComponent,
    WallsliderAppComponent,
    GraphAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
