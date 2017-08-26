import { HostelPage } from './app.po';

describe('hostel App', () => {
  let page: HostelPage;

  beforeEach(() => {
    page = new HostelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
