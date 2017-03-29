import { KnockKnockAngularPage } from './app.po';

describe('knock-knock-angular App', () => {
  let page: KnockKnockAngularPage;

  beforeEach(() => {
    page = new KnockKnockAngularPage();
  });

  it('should display message saying Knock Knock', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Knock Knock!');
  });
});
