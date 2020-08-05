import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GraphService } from './graph/graph.service';

import { AppComponent } from './app.component';
import { NavbarAppComponent } from './navbar/navbar.component';
import { WallsliderAppComponent } from './wallslider/wallslider.component';
import { GraphAppComponent } from './graph/graph.component';
import { GuidelinesAppComponent } from './guidelines/guidelines.component'
import { MythAppComponent } from './myth/myth.component'
import { WarAppComponent } from './war/war.component';
import { FooterAppComponent } from './footer/footer.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarAppComponent,
    WallsliderAppComponent,
    GraphAppComponent,
    GuidelinesAppComponent,
    MythAppComponent,
    WarAppComponent,
    FooterAppComponent,
    HelpdeskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GraphService],
  bootstrap: [AppComponent],
  entryComponents: [HelpdeskComponent]
})
export class AppModule { 

}
