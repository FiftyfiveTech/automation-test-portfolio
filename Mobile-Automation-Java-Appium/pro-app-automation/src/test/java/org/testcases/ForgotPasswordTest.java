package org.testcases;
import org.annotation.AzureTestCaseID;
import org.base.TestBase;
import org.constant.Constants;
import org.listener.AzureTestCaseListener;
import org.util.ExcelUtils;
import org.testng.annotations.*;
@Listeners(AzureTestCaseListener.class)
public class ForgotPasswordTest extends TestBase {
	private ForgotPasswordScreen forgotPassword;
	private LoginHelper loginHelper;
	@BeforeClass
	public void setUp() throws Exception {
		// Initialize the ForgotPasswordScreen and LoginHelper
		forgotPassword = new ForgotPasswordScreen(driver);
		loginHelper = new LoginHelper(driver);
		// Set the Excel file and perform login setup
		ExcelUtils.setExcelFile(Constants.PRO_TEST_DATA, "ForgotPassword");
		loginHelper.performLoginSetup();
		forgotPassword.verifyForgotPassLink();
		forgotPassword.clickForgetPassword();
	}
	// Test to verify the user interface (UI) of the Forgot Password screen.
	@Test(priority = 1, description = "Verify the UI of Forgot Password screen.")
	@AzureTestCaseID(ID = {
			"4666"
	})
	public void verifyForgotPasswordScreenUI() throws Exception {
		forgotPassword.verifyUIofForgotPasswordScreen();
	}
	// Test to verify the behavior when the Reset button is clicked with empty email fields.
	@Test(priority = 2, description = "Verify Forgot password with empty email fields")
	@AzureTestCaseID(ID = {
			"4669"
	})
	public void verifyForgotPassWithEmptyFields() throws Exception {
		forgotPassword.clickOnResetButton();
		forgotPassword.verifyEmptyFieldMessage();
	}
	// Test to verify the behavior when an invalid email address is entered,
	@Test(priority = 3, description = "Verify Forgot Password with invalid email address.")
	@AzureTestCaseID(ID = {
			"4668"
	})
	public void verifyForgotPassWithInvalidPass() throws Exception {
		forgotPassword.enterEmail(ExcelUtils.getCellData(2, 1));
		forgotPassword.clickOnResetButton();
		forgotPassword.verifyInvalidEmailMessage();
	}
}