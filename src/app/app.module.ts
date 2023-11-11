


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientService} from './services/httpClient.service';
import {IntercomService} from './services/intercom.service';
import { JobComponent } from './job/job.component';
import { AdvSearchComponent } from './adv-search/adv-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RpReferences } from './services/reference-list';

@NgModule({
   declarations: [
      AppComponent,
      JobComponent,
      AdvSearchComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      NgbModule,
      FormsModule,
      HttpClientModule,
   ],
   providers: [
     IntercomService,
     HttpClientService,
     RpReferences
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
