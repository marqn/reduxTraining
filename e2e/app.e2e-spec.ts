import { NgrxTutorialPage } from './app.po';

describe('ngrx-tutorial App', () => {
  let page: NgrxTutorialPage;

  beforeEach(() => {
    page = new NgrxTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
