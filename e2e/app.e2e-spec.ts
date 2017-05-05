import { TheCompleteGuideToAngular2Page } from './app.po';

describe('the-complete-guide-to-angular2 App', () => {
  let page: TheCompleteGuideToAngular2Page;

  beforeEach(() => {
    page = new TheCompleteGuideToAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
