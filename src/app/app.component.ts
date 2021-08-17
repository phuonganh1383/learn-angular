import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular';

  constructor(private translate: TranslateService) {
    // this.translate.use('english');
    // this.translate.addLangs(['english', 'validate']);
    this.translate.setDefaultLang('en');
  }

}
