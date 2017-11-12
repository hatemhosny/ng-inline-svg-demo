import { NgInlineSvgDemoPage } from './app.po';

describe('ng-inline-svg-demo App', () => {
  let page: NgInlineSvgDemoPage;

  beforeEach(() => {
    page = new NgInlineSvgDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
