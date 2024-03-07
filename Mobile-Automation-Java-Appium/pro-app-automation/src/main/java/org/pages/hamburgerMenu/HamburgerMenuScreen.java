/*
 * This class represents the hamburger menu screen of the application and provides methods to interact with its elements.
 */
package org.pages.hamburgerMenu;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.util.ScreenActions;
public class HamburgerMenuScreen extends ScreenActions implements HamburgerMenu {
	// Constructor to initialize the driver and PageFactory
	public HamburgerMenuScreen(AppiumDriver driver) {
		super(driver);
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	// Web elements defined using @AndroidFindBy
	@AndroidFindBy(xpath = FIRMWARE_BTN)
	WebElement firmwareBtn;
	@AndroidFindBy(xpath = SECURITY_BTN)
	WebElement securityBtn;
	@AndroidFindBy(xpath = GROUPING_BTN)
	WebElement groupingBtn;
	@AndroidFindBy(xpath = PROFILE_BTN)
	WebElement spProfileBtn;
	@AndroidFindBy(xpath = SERVICEPARTNER_BTN)
	WebElement servicePartnerBtn;
	@AndroidFindBy(xpath = SETTINGS_BTN)
	WebElement settingsBtn;
	@AndroidFindBy(xpath = HELP_BTN)
	WebElement helpBtn;
	// Method to tap on the Settings button
	public void tapOnSettingsButton() {
		settingsBtn.click();
	}
	// Method to tap on the SP Profile button
	public void tapOnSPProfileButton() {
		spProfileBtn.click();
	}
	// Method to tap on the Service Partner button
	public void tapOnServicePartnerButton() {
		click(servicePartnerBtn);
	}
}