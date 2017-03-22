import { KnockKnockAngularPage } from './app.po';

describe('knock-knock-angular App', () => {
  let page: KnockKnockAngularPage;

  beforeEach(() => {
    page = new KnockKnockAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
