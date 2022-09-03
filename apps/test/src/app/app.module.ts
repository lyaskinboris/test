import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DmTestModule } from '@dm/dm/test';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  imports: [BrowserModule, DmTestModule],
  declarations: [AppComponent, NxWelcomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
