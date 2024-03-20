import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { RtfComponent } from './rtf/rtf.component';

@NgModule({
  declarations: [
    AppComponent,
    RtfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
