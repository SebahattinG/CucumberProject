$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 4,
  "name": "Login page feature",
  "description": "",
  "id": "login-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 5852450559,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.verifyTitle()"
});
formatter.result({
  "duration": 6898858590,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify invalid from login page",
  "description": "",
  "id": "login-page-feature;verify-invalid-from-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter sebahattin@hotmail.com into email field on the login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter test1234567 into password field on the login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on lobing button on login page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sebahattin@hotmail.com",
      "offset": 8
    },
    {
      "val": "email",
      "offset": 36
    }
  ],
  "location": "LoginPageSD.credentials(String,String)"
});
formatter.result({
  "duration": 414101790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234567",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "LoginPageSD.credentials(String,String)"
});
formatter.result({
  "duration": 191747876,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickOnLoginBtn()"
});
formatter.result({
  "duration": 290132360,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyErro()"
});
formatter.result({
  "duration": 1195762043,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ddress doesn\u0027t exist[.\nThe email address you\u0027ve entered doesn\u0027t appear to exist. Please check your entry and try again.]\u003e but was:\u003c...ddress doesn\u0027t exist[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepdefinition.LoginPageSD.verifyErro(LoginPageSD.java:38)\n\tat ✽.Then I verify invalid login message on sign in page(Login.feature:14)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 893332867,
  "status": "passed"
});
});