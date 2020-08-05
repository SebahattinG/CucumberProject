package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil{

    private By emailid= By.id("username");
    private By password= By.id("password");
    private By loginBtn= By.id("loginBtn");
    private By errorMessage= By.cssSelector("div.private-alert__inner");

    public String setLoginPage(){
        return getTitle();

    }
    public void enterEmail(String email){
        sendValue(emailid, email);
    }
    public void enterPassword(String pass){
        sendValue(password, pass);

    }
    public  void clickOnLoginBtn(){
        clickOn(loginBtn);
    }
    public String errorMessage(){
        return getTextFromElement(errorMessage);
        }

}
