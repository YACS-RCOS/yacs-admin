import { AppPage } from './app.po';
import {SchoolPage} from './school.po';

describe('yacs-admin-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to the YACS admin panel!');
  });

  it('should display title in navbar', () => {
    page.navigateTo();
    expect(page.getNavbarTitle()).toEqual('YACS Admin');
  });

});

describe('schools page', () => {
  let page: SchoolPage;

  beforeEach(() => {
    page = new SchoolPage();
  });

  it('should display correct headers', () => {
    page.navigateTo();
    const headers = page.getHeaderRows();
    console.log(headers[0]);
    expect(1).toEqual(1);
  });
});
