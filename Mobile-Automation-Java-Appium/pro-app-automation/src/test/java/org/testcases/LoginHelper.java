/*
 * This class provides helper methods for handling the login process
 */
package org.testcases;
import io.appium.java_client.AppiumDriver;
import org.constant.Constants;
import org.util.ExcelUtils;
import org.pages.login.LoginScreen;
public class LoginHelper {
    private AppiumDriver driver;
    /*
     * Constructor to initialize the LoginHelper with an AppiumDriver instance
     * @param driver The AppiumDriver instance
     */
    public LoginHelper(AppiumDriver driver) {
        this.driver = driver;
    }
    /*
     * Method to perform the setup for the login process
     * This includes clicking on the next button, tapping on the MyUplink logo, and selecting the environment
     * @throws Exception if there are any errors during the setup process
     */
    public void performLoginSetup() throws Exception {
        LoginScreen login = new LoginScreen(driver);
        // Perform the sequence of actions
        login.clickOnNextButton();
        login.tapOnMyUplinkLogo();
        login.selectEnvironment();
    }
    /*
     * Method to perform the login using data from an Excel sheet
     * The username and password are fetched from the specified Excel sheet
     * @throws Exception if there are any errors during the login process
     */
    public void login() throws Exception {
        LoginScreen login = new LoginScreen(driver);
        // Set the Excel file
        ExcelUtils.setExcelFile(Constants.PRO_TEST_DATA, "ProLogin");
        // Set the username and password from the Excel sheet
        login.setUsername(ExcelUtils.getCellData(1, 1));
        login.setPassword(ExcelUtils.getCellData(1, 2));
        // Click the login button
        login.clickOnLoginButton();
    }
}