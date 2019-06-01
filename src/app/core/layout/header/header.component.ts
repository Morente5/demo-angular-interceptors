import { TranslateService, LangChangeEvent, DefaultLangChangeEvent } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public availableLangs = ['en', 'es'];
  public currentLang: string;

  constructor(
    private readonly translate: TranslateService,
  ) { }

  ngOnInit() {
    const browserLang = this.translate.getBrowserLang();
    this.currentLang = this.availableLangs.includes(browserLang) ? browserLang : this.translate.defaultLang;
    this.translate.onLangChange.subscribe((lang: LangChangeEvent) => {
      this.currentLang = lang.lang;
    });
  }

  public setLang(lang: string) {
    this.translate.use(lang);
  }

}
