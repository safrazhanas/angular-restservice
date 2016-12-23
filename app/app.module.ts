import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { app_routing } from './app.routing';
import { DataService } from './shared/service/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, app_routing ],
  declarations: [ AppComponent, DocumentsComponent ],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }