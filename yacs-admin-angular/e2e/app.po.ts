import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-welcome-page h1')).getText();
  }

  getNavbarTitle() {
    return element(by.css('#page-title a')).getText();
  }
}
