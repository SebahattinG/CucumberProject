package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import runnerTest.webPages.LoginPage;

public class LoginPageSD {

    LoginPage loginPage=new LoginPage();

    @Given("^I am on login page$")
    public void verifyTitle() throws InterruptedException {
      Thread.sleep(6000);
        String title=  loginPage.getTitle();
        Assert.assertEquals(title,"HubSpot Login");
    }
    @When("^I enter (.+) into (email|password) field on the login page$")
    public void credentials(String value, String field){
        switch(field){
            case "email":
                loginPage.enterEmail(value);
                break;
            case "password":
                loginPage.enterPassword(value);


    }}
    @And("^I click on lobing button on login page$")

    public void clickOnLoginBtn(){
        loginPage.clickOnLoginBtn();
    }
    @Then("^I verify invalid login message on sign in page$")
    public void verifyErro(){
       Assert.assertEquals(loginPage.errorMessage(),"That email address doesn't exist");
    }

}
