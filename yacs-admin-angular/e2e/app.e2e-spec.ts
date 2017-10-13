import { AppPage } from './app.po';

describe('yacs-admin-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to YACS Admin!');
  });

  it('should display title in navbar', () => {
    page.navigateTo();
    expect(page.getNavbarTitle()).toEqual('YACS Admin');
  });

});
