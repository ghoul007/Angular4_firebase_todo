import { AhmedPage } from './app.po';

describe('ahmed App', () => {
  let page: AhmedPage;

  beforeEach(() => {
    page = new AhmedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
