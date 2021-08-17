import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";

export function createTranslateLoader(http : HttpClient) {
  // return new TranslateHttpLoader(http, './assets/i18n/', '.json')
  return new MultiTranslateHttpLoader(http,[
    {prefix: "./assets/i18n/", suffix: ".json"},
    {prefix: "./assets/i18n/validate/", suffix: ".json"},
  ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({loader: {provide: TranslateLoader,
      useFactory: createTranslateLoader, deps: [HttpClient]}}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
