import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { FillContactComponent } from './components/contancts/fillcontact/fillcontact.component';
import { OverviewContactComponent } from './components/contancts/overview/overview.contact.component';
import { ViewContactComponent } from './components/contancts/view/view.contact.component';
import { ContactService } from './service/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FillContactComponent,
    OverviewContactComponent,
    ViewContactComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
