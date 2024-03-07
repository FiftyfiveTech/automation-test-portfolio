package org.testcases;
import org.annotation.AzureTestCaseID;
import org.base.TestBase;
import org.constant.Constants;
import org.util.ExcelUtils;
import org.pages.about.AboutScreenBeforeLogin;
import org.pages.appearance.AppearanceScreen;
import org.pages.dashboard.SystemsScreen;
import org.pages.help.HelpAfterLogin;
import org.pages.help.HelpBeforeLogin;
import org.pages.login.LoginScreen;
import org.pages.settings.SettingsScreen;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
public class HelpSectionTest extends TestBase {
	private LoginScreen login;
	private LoginHelper loginhelper;
	private HelpBeforeLogin helpBL;
	private AboutScreenBeforeLogin aboutBL;
	private ServicePartnerScreen spscreen;
	private SystemsScreen system;
	private SettingsScreen settings;
	private AppearanceScreen appearance;
	private HelpAfterLogin helpAL;
	@BeforeClass
	public void setUp() throws Exception {
		login = new LoginScreen(driver);
		loginhelper = new LoginHelper(driver);
		helpBL = new HelpBeforeLogin(driver);
		aboutBL = new AboutScreenBeforeLogin(driver);
		spscreen = new ServicePartnerScreen(driver);
		system = new SystemsScreen(driver);
		settings = new SettingsScreen(driver);
		appearance = new AppearanceScreen(driver);
		helpAL = new HelpAfterLogin(driver);
		loginhelper.performLoginSetup();
		ExcelUtils.setExcelFile(Constants.PRO_TEST_DATA, "Help");
	}
	/**
	 * Test Case: Verify UI of Help Section at login screen.
	 *
	 * This test case verifies the user interface of the Help Section on the login screen.
	 */
	@Test(priority = 1, description = "Verify UI of Help Section at login screen .")
	@AzureTestCaseID(ID = {
			"5101"
	})
	public void verifyUIofHelpSectionAtLoginScreen() throws Exception {
		login.clickOnHelpButton();
		helpBL.verifyUIofHelpScreenAtLoginScreen();
	}
	/**
	 * Test Case: Verify localization support for Help Section at login screen.
	 *
	 * This test case verifies the localization support for the Help Section on the login screen.
	 */
	@Test(priority = 2, description = "Verify localization support for Help Section at login screen.")
	@AzureTestCaseID(ID = {
			"5102"
	})
	public void verifyLocalizationSupportForHelpSectionAtLoginScreen() throws Exception {
		login.clickOnAboutButton();
		aboutBL.clickOnLanguageDrpDown();
		aboutBL.selectLanguage("Français");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyUIOfHelpScreenForFrançais();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Norsk");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyUIOfHelpScreenForNorsk();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Svenska");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyUIOfHelpScreenForSvenska();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Danish");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyUIOfHelpScreenForDanish();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Deutsch");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyUIOfHelpScreenForDeutsch();
		helpBL.navigateBack();
	}
	/**
	 * Test Case: Verify navigation and localization support for content of FAQ's.
	 *
	 * This test case verifies the navigation and localization support for the content of FAQs.
	 */
	@Test(priority = 3, description = "Verify navigation and localization support for content of FAQ's ")
	@AzureTestCaseID(ID = {
			"5103"
	})
	public void verifyNavigationAndLocalizationSupportForContentOfFaqs() throws InterruptedException {
		login.clickOnHelpButton();
		helpBL.verifyNavigationAndContentOfFAQs();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.clickOnLanguageDrpDown();
		aboutBL.selectLanguage("Français");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyContentOfFAQsForFrançais();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Norsk");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyContentOfFAQsForNorsk();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Svenska");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyContentOfFAQsForSvenska();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Danish");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyContentOfFAQsForDanish();
		helpBL.navigateBack();
		login.clickOnAboutButton();
		aboutBL.selectLanguage("Deutsch");
		aboutBL.navigateBack();
		login.clickOnHelpButton();
		helpBL.verifyContentOfFAQsForDeutsch();
	}
	/**
	 * Test Case: Verify UI of Help Section after login.
	 *
	 * This test case verifies the user interface of the Help Section after logging in.
	 */
	@Test(priority = 4, description = "Verify UI of Help Section after login.")
	@AzureTestCaseID(ID = {
			"5104"
	})
	public void verifyUIofHelpSectionAfterLogin() throws Exception {
		login.setUsername(ExcelUtils.getCellData(4, 1));
		login.setPassword(ExcelUtils.getCellData(4, 2));
		login.clickOnLoginButton();
		spscreen.setServicePartnerName(ExcelUtils.getCellData(4, 3));
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyUIofHelpScreenAfterLogin();
	}
	/**
	 * Test Case: Verify navigation and localization support for content of FAQ's after login.
	 *
	 * This test case verifies the navigation and localization support for the content of FAQs after logging in.
	 */
	@Test(priority = 5, description = "Verify navigation and localization support for content of FAQ's after login.")
	@AzureTestCaseID(ID = {
			"5105"
	})
	public void VerifyNavigationLocalizationSupportForFAQsAfterLogin() throws Exception {
		login.setUsername(ExcelUtils.getCellData(4, 1));
		login.setPassword(ExcelUtils.getCellData(4, 2));
		login.clickOnLoginButton();
		spscreen.setServicePartnerName(ExcelUtils.getCellData(4, 3));
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentOfFAQsAfterLogin();
		helpAL.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnSettings();
		settings.clickOnAppearanceButton();
		appearance.clickOnLanguageDrpDwn();
		appearance.selectLanguage("Français");
		appearance.navigateBack();
		settings.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentOfFAQsForFrançaisAfterLogin();
		helpAL.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnSettings();
		settings.clickOnAppearanceButton();
		appearance.clickOnLanguageDrpDwn();
		appearance.selectLanguage("Norsk");
		appearance.navigateBack();
		settings.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentOfFAQsForNorskAfterLogin();
		helpAL.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnSettings();
		settings.clickOnAppearanceButton();
		appearance.clickOnLanguageDrpDwn();
		appearance.selectLanguage("Svenska");
		appearance.navigateBack();
		settings.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentOfFAQsForSvenskaAfterLogin();
		helpAL.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnSettings();
		settings.clickOnAppearanceButton();
		appearance.clickOnLanguageDrpDwn();
		appearance.selectLanguage("Danish");
		appearance.navigateBack();
		settings.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentOfFAQsForDanishAfterLogin();
		helpAL.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnSettings();
		settings.clickOnAppearanceButton();
		appearance.clickOnLanguageDrpDwn();
		appearance.selectLanguage("Deutsch");
		appearance.navigateBack();
		settings.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentOfFAQsForDeutschAfterLogin();
	}
	/**
	 * Test Case: Verify customer support.
	 *
	 * This test case verifies the customer support functionality.
	 */
	@Test(priority = 6, description = "Verify customer support.")
	@AzureTestCaseID(ID = {
			"5106"
	})
	public void testCustomerSupport() throws Exception {
		login.setUsername(ExcelUtils.getCellData(4, 1));
		login.setPassword(ExcelUtils.getCellData(4, 2));
		login.clickOnLoginButton();
		spscreen.setServicePartnerName(ExcelUtils.getCellData(4, 3));
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.clickOnCustomerSupport("Customer support");
		Thread.sleep(2000);
		helpAL.selectTopic("Online Store");
		helpAL.selectSystem("namrata-simulator");
		//helpAL.enterEmailCS();
		helpAL.enterSummary("This is Mobile Automation Test");
		helpAL.enterDescription("This is Mobile Automation Test");
		helpAL.clickonSendButtonAtCustomerSupport();
		//Bug fix : APPS - 2530
	}
	/**
	 * Test Case: Verify customer support with empty fields.
	 *
	 * This test case verifies the customer support functionality with empty fields.
	 */
	@Test(priority = 7, description = "Verify customer support with empty fields.")
	@AzureTestCaseID(ID = {
			"5107"
	})
	public void testCustomerSupportWithEmptyFields() throws Exception {
		login.setUsername(ExcelUtils.getCellData(4, 1));
		login.setPassword(ExcelUtils.getCellData(4, 2));
		login.clickOnLoginButton();
		spscreen.setServicePartnerName(ExcelUtils.getCellData(4, 3));
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.clickOnCustomerSupport("Customer support");
		helpAL.verifyCustomerSupportWithEmptyfields();
	}
	/**
	 * Test Case: Verify localization support for Customer Support.
	 *
	 * This test case verifies the localization support for customer support.
	 */
	@Test(priority = 8, description = "Verify localization support for Customer Support.")
	@AzureTestCaseID(ID = {
			"5108"
	})
	public void testLocalizationSupportForCustomerSupport() throws Exception {
		login.setUsername(ExcelUtils.getCellData(4, 1));
		login.setPassword(ExcelUtils.getCellData(4, 2));
		login.clickOnLoginButton();
		spscreen.setServicePartnerName(ExcelUtils.getCellData(4, 3));
		system.clickOnHamburgerMenu();
		system.clickOnSettings();
		settings.clickOnAppearanceButton();
		appearance.clickOnLanguageDrpDwn();
		appearance.selectLanguage("Français");
		appearance.navigateBack();
		settings.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.clickOnCustomerSupport("Service client");
		helpAL.verifyLocalizationSupportForCustomerSupportinFrançais();
	}
	/**
	 * Test Case: Verify Help section for other brands.
	 *
	 * This test case verifies the Help Section for other brands.
	 */
	@Test(priority = 9, description = "Verify Help section for other brands.")
	@AzureTestCaseID(ID = {
			"5109"
	})
	public void testHelpSectionForOtherBrands() throws Exception {
		login.setUsername(ExcelUtils.getCellData(9, 1));
		login.setPassword(ExcelUtils.getCellData(9, 2));
		login.clickOnLoginButton();
		spscreen.setServicePartnerName(ExcelUtils.getCellData(9, 3));
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentForFAQsOfContura();
		// Bug fix : APPS-2539
	}
	/**
	 * Test Case: Verify localization support in Help section for other brands.
	 *
	 * This test case verifies the localization support in the Help Section for other brands.
	 */
	@Test(priority = 10, description = "Verify localization support in Help section for other brands.")
	@AzureTestCaseID(ID = {
			"5110"
	})
	public void testLocalizationSupportInHelpSectionForOtherBrands() throws Exception {
		login.setUsername(ExcelUtils.getCellData(9, 1));
		login.setPassword(ExcelUtils.getCellData(9, 2));
		login.clickOnLoginButton();
		spscreen.setServicePartnerName(ExcelUtils.getCellData(9, 3));
		system.clickOnHamburgerMenu();
		system.clickOnSettings();
		settings.clickOnAppearanceButton();
		appearance.clickOnLanguageDrpDwn();
		appearance.selectLanguage("Svenska");
		appearance.navigateBack();
		settings.navigateBack();
		system.clickOnHamburgerMenu();
		system.clickOnHelp();
		helpAL.verifyNavigationAndContentForFAQsOfConturaInSvenska();
	}
}