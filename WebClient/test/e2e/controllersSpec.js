describe('successful login', function () {
  var ptor = protractor.getInstance();

  beforeEach(function () {
    browser.get('http://127.0.0.1/playground');

    if (!by.css("#SignIn:visible"))
      element(by.id("SignOut")).click();

    var greeting = element(by.css("div.panel-heading.ng-scope"));
    expect(greeting.getText()).toEqual('Authentication required');
  });

  afterEach(function () {
  });

  it('should show the user name on valid login', function () {
    element(by.model('userName')).sendKeys('test');
    element(by.model('userPassword')).sendKeys('test');
    element(by.id("SignIn")).click();

    var loginInfo = element(by.binding('userName'));
    expect(loginInfo.getText()).toEqual('Logged in as test');

    element(by.id("SignOut")).click();
    var greeting = element(by.css("div.panel-heading.ng-scope"));
    expect(greeting.getText()).toEqual('Authentication required');
  });

  it('should show error on invalid login', function () {
    element(by.model('userName')).sendKeys('foo');
    element(by.model('userPassword')).sendKeys('bar');
    element(by.id("SignIn")).click();
    ptor.sleep(100);
    var errorTitle = element(by.css("h4.modal-title.ng-binding"));
    expect(errorTitle.getText()).toEqual("Login failed!");
    element(by.css("button.btn.btn-default.ng-scope")).click();

    var greeting = element(by.css("div.panel-heading.ng-scope"));
    expect(greeting.getText()).toEqual('Authentication required');
  });
});