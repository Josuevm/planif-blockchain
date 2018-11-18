import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodeInfoComponent } from './node-info/node-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NodesComponent,
    NodeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
