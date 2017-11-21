import {browser, by, element} from 'protractor';

export class SchoolPage{
  navigateTo(){
    return browser.get('/schools');
  }

  getHeaderRows(){
    let header = element.all(by.tagName('th'));
    return [header.get(0).getText(), header.get(1).getText()];
  }
}
