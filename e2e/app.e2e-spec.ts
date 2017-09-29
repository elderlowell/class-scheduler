import { Ng4ComplaintsPage } from './app.po';

describe('ng4-complaints App', () => {
  let page: Ng4ComplaintsPage;

  beforeEach(() => {
    page = new Ng4ComplaintsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
