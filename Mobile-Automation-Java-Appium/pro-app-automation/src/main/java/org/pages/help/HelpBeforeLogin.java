package org.pages.help;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.util.ScreenActions;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
public class HelpBeforeLogin extends ScreenActions implements Help {
	public HelpBeforeLogin(AppiumDriver driver) {
		super(driver);
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	// Elements of Help screen
	@AndroidFindBy(xpath = TOP_NAV_TITLE)
	WebElement top_Nav_Title;
	@AndroidFindBy(xpath = GET_STARTED_FAQ1)
	WebElement faq1;
	@AndroidFindBy(xpath = CON_STRING_FAQ2)
	WebElement faq2;
	@AndroidFindBy(xpath = INT_CON_FAQ3)
	WebElement faq3;
	@AndroidFindBy(xpath = SYS_SERVER_FAQ4)
	WebElement faq4;
	@AndroidFindBy(xpath = CON_BRKN_FAQ5)
	WebElement faq5;
	@AndroidFindBy(xpath = CANT_LGN_FAQ6)
	WebElement faq6;
	@AndroidFindBy(xpath = MYSYSTEM_FAQ7)
	WebElement faq7;
	@AndroidFindBy(xpath = EVNT_ALARM_FAQ8)
	WebElement faq8;
	@AndroidFindBy(xpath = OWNERS_FAQ9)
	WebElement faq9;
	@AndroidFindBy(xpath = HOW_MANY_SYSTEMS_FAQ10)
	WebElement faq10;
	@AndroidFindBy(xpath = MONITOR_SYS_FAQ11)
	WebElement faq11;
	@AndroidFindBy(xpath = DATA_BREACH_FAQ12)
	WebElement faq12;
	@AndroidFindBy(xpath = WEB_BROWSER_FAQ13)
	WebElement faq13;
	@AndroidFindBy(xpath = NAV_BACK_BTN)
	WebElement back_Btn;
	@AndroidFindBy(xpath = FAQ_QST_CONTENT)
	WebElement faq_ques_content;
	@AndroidFindBy(id = FAQ_ANSWER_TEXT)
	WebElement faq_Answer_Text;
	// Method to click on FAQ element
	public void clickFAQ(WebElement faqelement) {
		int maxAttempts = 3;
		int attempts = 0;
		try {
			while (attempts < maxAttempts) {
				try {
					waitForElementToBeVisible(faqelement);
					waitForElementToBeClickable(faqelement);
					faqelement.click();
					return; // Exit the method if successful
				} catch (StaleElementReferenceException e) {
					System.err.println("StaleElementReferenceException. Retrying...");
					attempts++;
				} catch (Exception e) {
					System.err.println("Failed to click FAQ element: " + e.getMessage());
					e.printStackTrace();
					throw new RuntimeException("Failed to click FAQ element: " + e.getMessage());
				}
			}
		} finally {
			if (attempts == maxAttempts) {
				System.err.println("Exceeded maximum attempts to click the FAQ element.");
				throw new RuntimeException("Exceeded maximum attempts to click the FAQ element.");
			}
		}
	}
	// Method to click on back button
	public void navigateBack() {
		click(back_Btn);
	}
	// Methods to verify screen elements
	public void verifyUIofHelpScreenAtLoginScreen() {
		Assert.assertEquals(top_Nav_Title.getAttribute("text"), "Help");
		verifyUIofElement(faq1, "How do I get started with myUplink?", "How do I get started with myUplink?");
		verifyUIofElement(faq2, "What is a connection string?", "What is a connection string?");
		verifyUIofElement(faq3, "What are the requirements on my internet connection?",
				"What are the requirements on my internet connection?");
		verifyUIofElement(faq4, "How often is information sent between the system and the server?",
				"How often is information sent between the system and the server?");
		verifyUIofElement(faq5, "What happens if connection is broken?", "What happens if connection is broken?");
		verifyUIofElement(faq6, "I can't log in, what can I do?", "I can't log in, what can I do?");
		verifyUIofElement(faq7, "My system cannot connect to the internet, what can I do?",
				"My system cannot connect to the internet, what can I do?");
		verifyUIofElement(faq8, "What happens in the event of an alarm?", "What happens in the event of an alarm?");
		verifyUIofElement(faq9, "What should I do if the system changes owners?",
				"What should I do if the system changes owners?");
		verifyUIofElement(faq10, "How many systems can a user be connected to?",
				"How many systems can a user be connected to?");
		scrollToText("Which web browser is recommended for myUplink?");
		verifyUIofElement(faq11, "Can you monitor and administer my system?",
				"Can you monitor and administer my system?");
		verifyUIofElement(faq12, "How secure is my system against data breaches?",
				"How secure is my system against data breaches?");
		verifyUIofElement(faq13, "Which web browser is recommended for myUplink?",
				"Which web browser is recommended for myUplink?");
		navigateBack();
	}
	public void verifyUIOfHelpScreenForFrançais() {
		Assert.assertEquals(top_Nav_Title.getAttribute("text"), "Assistance");
		verifyUIofElement(faq1, "Comment démarrer avec myUplink?", "Comment démarrer avec myUplink?");
		verifyUIofElement(faq2, "Qu'est-ce qu'une chaîne de connexion ?", "Qu'est-ce qu'une chaîne de connexion ?");
		verifyUIofElement(faq3, "Quelle est la vitesse de connexion requise ?",
				"Quelle est la vitesse de connexion requise ?");
		verifyUIofElement(faq4, "À quelle fréquence l'information est-elle envoyée entre le système et le serveur ?",
				"À quelle fréquence l'information est-elle envoyée entre le système et le serveur ?");
		verifyUIofElement(faq5, "Que se passe-t-il si la connexion est interrompue ?",
				"Que se passe-t-il si la connexion est interrompue ?");
		verifyUIofElement(faq6, "Je n'arrive pas à me connecter, que puis-je faire ?",
				"Je n'arrive pas à me connecter, que puis-je faire ?");
		verifyUIofElement(faq7, "Mon système ne peut pas se connecter à Internet, que puis-je faire ?",
				"Mon système ne peut pas se connecter à Internet, que puis-je faire ?");
		verifyUIofElement(faq8, "Que se passe-t-il en cas d'alarme ?", "Que se passe-t-il en cas d'alarme ?");
		verifyUIofElement(faq9, "Que dois-je faire si le système change de propriétaire ?",
				"Que dois-je faire si le système change de propriétaire ?");
		verifyUIofElement(faq10, "À combien de systèmes un utilisateur peut-il se connecter ?",
				"À combien de systèmes un utilisateur peut-il se connecter ?");
		scrollToText("Quels sont les navigateurs Web recommandés pour myUplink ?");
		verifyUIofElement(faq11, "Pouvez-vous surveiller et gérer mon système ?",
				"Pouvez-vous surveiller et gérer mon système ?");
		verifyUIofElement(faq12,
				"Que recommandez-vous pour empêcher le piratage de mon produit myUplink et de mon compte ?",
				"Que recommandez-vous pour empêcher le piratage de mon produit myUplink et de mon compte ?");
		verifyUIofElement(faq13, "Quels sont les navigateurs Web recommandés pour myUplink ?",
				"Quels sont les navigateurs Web recommandés pour myUplink ?");
	}
	public void verifyUIOfHelpScreenForNorsk() {
		Assert.assertEquals(top_Nav_Title.getAttribute("text"), "Hjelp");
		verifyUIofElement(faq1, "Hvordan kommer jeg i gang med myUplink?", "Hvordan kommer jeg i gang med myUplink?");
		verifyUIofElement(faq2, "Hva er en forbindelsesstreng?", "Hva er en forbindelsesstreng?");
		verifyUIofElement(faq3, "Hvor rask forbindelse kreves?", "Hvor rask forbindelse kreves?");
		verifyUIofElement(faq4, "Hvor ofte sendes informasjon mellom systemet og serveren?",
				"Hvor ofte sendes informasjon mellom systemet og serveren?");
		verifyUIofElement(faq5, "Hva skjer hvis forbindelsen brytes?", "Hva skjer hvis forbindelsen brytes?");
		verifyUIofElement(faq6, "Jeg klarer ikke å logge inn, hva kan jeg gjøre?",
				"Jeg klarer ikke å logge inn, hva kan jeg gjøre?");
		verifyUIofElement(faq7, "Systemet mitt kan ikke kobles til internett, hva kan jeg gjøre?",
				"Systemet mitt kan ikke kobles til internett, hva kan jeg gjøre?");
		verifyUIofElement(faq8, "Hva skjer i tilfelle alarmen går?", "Hva skjer i tilfelle alarmen går?");
		verifyUIofElement(faq9, "Hva skal jeg gjøre hvis systemet skifter eiere?",
				"Hva skal jeg gjøre hvis systemet skifter eiere?");
		verifyUIofElement(faq10, "Hvor mange systemer kan en bruker koble seg til?",
				"Hvor mange systemer kan en bruker koble seg til?");
		scrollToText("Hvilken nettleser er anbefalt for myUplink?");
		verifyUIofElement(faq11, "Kan dere overvåke og administrere mitt system?",
				"Kan dere overvåke og administrere mitt system?");
		verifyUIofElement(faq12,
				"Hva anbefaler du for å forhindre at myUplink-produktet mitt og kontoen min blir hacket?",
				"Hva anbefaler du for å forhindre at myUplink-produktet mitt og kontoen min blir hacket?");
		verifyUIofElement(faq13, "Hvilken nettleser er anbefalt for myUplink?",
				"Hvilken nettleser er anbefalt for myUplink?");
	}
	public void verifyUIOfHelpScreenForSvenska() {
		Assert.assertEquals(top_Nav_Title.getAttribute("text"), "Hjälp");
		verifyUIofElement(faq1, "Hur kommer jag igång med myUplink?", "Hur kommer jag igång med myUplink?");
		verifyUIofElement(faq2, "Vad är en anslutningssträng?", "Vad är en anslutningssträng?");
		verifyUIofElement(faq3, "Vilka är kraven på min internetanslutning?",
				"Vilka är kraven på min internetanslutning?");
		verifyUIofElement(faq4, "Hur ofta skickas information mellan anläggningen och servern?",
				"Hur ofta skickas information mellan anläggningen och servern?");
		verifyUIofElement(faq5, "Vad händer om anslutningen bryts?", "Vad händer om anslutningen bryts?");
		verifyUIofElement(faq6, "Vad ska jag göra om det inte går att logga in?",
				"Vad ska jag göra om det inte går att logga in?");
		verifyUIofElement(faq7, "Vad ska jag göra om min anläggning inte kan ansluta till internet?",
				"Vad ska jag göra om min anläggning inte kan ansluta till internet?");
		verifyUIofElement(faq8, "Vad händer vid larm?", "Vad händer vid larm?");
		verifyUIofElement(faq9, "Vad ska jag göra om anläggningen byter ägare?",
				"Vad ska jag göra om anläggningen byter ägare?");
		verifyUIofElement(faq10, "Hur många anläggningar kan en användare vara ansluten till?",
				"Hur många anläggningar kan en användare vara ansluten till?");
		scrollToText("Vilken webbläsare rekommenderas till myUplink?");
		verifyUIofElement(faq11, "Kan ni övervaka och administrera min anläggning?",
				"Kan ni övervaka och administrera min anläggning?");
		verifyUIofElement(faq12,
				"Vad rekommenderar ni för att skydda min myUplink-produkt och mitt konto från att bli hackad?",
				"Vad rekommenderar ni för att skydda min myUplink-produkt och mitt konto från att bli hackad?");
		verifyUIofElement(faq13, "Vilken webbläsare rekommenderas till myUplink?",
				"Vilken webbläsare rekommenderas till myUplink?");
	}
	public void verifyUIOfHelpScreenForDanish() {
		Assert.assertEquals(top_Nav_Title.getAttribute("text"), "Hjælp");
		verifyUIofElement(faq1, "Hvordan kommer jeg i gang med myUplink?", "Hvordan kommer jeg i gang med myUplink?");
		verifyUIofElement(faq2, "Hvad er en tilslutningsstreng?", "Hvad er en tilslutningsstreng?");
		verifyUIofElement(faq3, "Hvor hurtig forbindelse kræves der?", "Hvor hurtig forbindelse kræves der?");
		verifyUIofElement(faq4, "Hvor ofte sendes der information mellem systemet og serveren?",
				"Hvor ofte sendes der information mellem systemet og serveren?");
		verifyUIofElement(faq5, "Hvad sker der, hvis forbindelsen bliver afbrudt?",
				"Hvad sker der, hvis forbindelsen bliver afbrudt?");
		verifyUIofElement(faq6, "Jeg kan ikke logge ind, hvad kan jeg gøre?",
				"Jeg kan ikke logge ind, hvad kan jeg gøre?");
		verifyUIofElement(faq7, "Mit system kan ikke forbinde til internettet, hvad kan jeg gøre?",
				"Mit system kan ikke forbinde til internettet, hvad kan jeg gøre?");
		verifyUIofElement(faq8, "Hvad sker der i tilfælde af en alarm?", "Hvad sker der i tilfælde af en alarm?");
		verifyUIofElement(faq9, "Hvad skal jeg gøre, hvis systemet skifter ejer?",
				"Hvad skal jeg gøre, hvis systemet skifter ejer?");
		verifyUIofElement(faq10, "Hvor mange systemer kan en bruger være forbundet til?",
				"Hvor mange systemer kan en bruger være forbundet til?");
		scrollToText("Hvilken webbrowser anbefales til myUplink?");
		verifyUIofElement(faq11, "Kan I overvåge og administrere mit system?",
				"Kan I overvåge og administrere mit system?");
		verifyUIofElement(faq12,
				"Hvad anbefaler du for at forhindre, at mit myUplink-produkt og min konto bliver hacket?",
				"Hvad anbefaler du for at forhindre, at mit myUplink-produkt og min konto bliver hacket?");
		verifyUIofElement(faq13, "Hvilken webbrowser anbefales til myUplink?",
				"Hvilken webbrowser anbefales til myUplink?");
	}
	public void verifyUIOfHelpScreenForDeutsch() {
		Assert.assertEquals(top_Nav_Title.getAttribute("text"), "Hilfe");
		verifyUIofElement(faq1, "Wie kann ich myUplink verwenden?", "Wie kann ich myUplink verwenden?");
		verifyUIofElement(faq2, "Was ist eine Verbindungszeichenfolge?", "Was ist eine Verbindungszeichenfolge?");
		verifyUIofElement(faq3, "Wie schnell muss die Verbindung sein?", "Wie schnell muss die Verbindung sein?");
		verifyUIofElement(faq4, "Wie oft werden Informationen zwischen Anlage und Server ausgetauscht?",
				"Wie oft werden Informationen zwischen Anlage und Server ausgetauscht?");
		verifyUIofElement(faq5, "Was passiert bei einem Verbindungsausfall?",
				"Was passiert bei einem Verbindungsausfall?");
		verifyUIofElement(faq6, "Ich kann mich nicht anmelden. Was soll ich tun?",
				"Ich kann mich nicht anmelden. Was soll ich tun?");
		verifyUIofElement(faq7, "Meine Anlage kann keine Verbindung zum Internet herstellen. Was soll ich tun?",
				"Meine Anlage kann keine Verbindung zum Internet herstellen. Was soll ich tun?");
		verifyUIofElement(faq8, "Was passiert bei einem Alarm?", "Was passiert bei einem Alarm?");
		verifyUIofElement(faq9, "Was soll ich tun, wenn die Anlage den Besitzer wechselt?",
				"Was soll ich tun, wenn die Anlage den Besitzer wechselt?");
		verifyUIofElement(faq10, "Mit wie vielen Anlagen kann ein Benutzer verbunden sein?",
				"Mit wie vielen Anlagen kann ein Benutzer verbunden sein?");
		scrollToText("Welcher Browser wird für myUplink empfohlen?");
		verifyUIofElement(faq11, "Können Sie meine Anlage überwachen und verwalten?",
				"Können Sie meine Anlage überwachen und verwalten?");
		verifyUIofElement(faq12,
				"Was empfehlen Sie, um zu verhindern, dass mein myUplink-Produkt und mein Konto gehackt werden?",
				"Was empfehlen Sie, um zu verhindern, dass mein myUplink-Produkt und mein Konto gehackt werden?");
		verifyUIofElement(faq13, "Welcher Browser wird für myUplink empfohlen?",
				"Welcher Browser wird für myUplink empfohlen?");
	}
	//Methods to verify Text of FAQs
	public void verifyTextofFAQs(WebElement faqElement, WebElement faqQuestion, String FaqQuestionText,
								 String FaqQelementName, WebElement faqAnswer, String FaqAnswerTextPart, String FaqAelementName) {
		clickFAQ(faqElement);
		waitForElementToBeVisible(faqQuestion);
		Assert.assertTrue(faqQuestion.isDisplayed(), FaqQelementName + " is not displayed.");
		Assert.assertEquals(faqQuestion.getAttribute("text"), FaqQuestionText);
		waitForElementToBeVisible(faqAnswer);
		Assert.assertTrue(faqAnswer.isDisplayed(), FaqAelementName + " is not displayed.");
		Assert.assertTrue(faqAnswer.getAttribute("text").contains(FaqAnswerTextPart));
		navigateBack();
	}
	//Methods to verify content and navigation of FAQs
	public void verifyNavigationAndContentOfFAQs() {
		verifyTextofFAQs(faq1, faq_ques_content, "How do I get started with myUplink?", "FAQ1 question",
				faq_Answer_Text, "To connect your system", "FAQ1 answer");
		verifyTextofFAQs(faq2, faq_ques_content, "What is a connection string?", "FAQ2 question", faq_Answer_Text,
				"A connection string is a code that", "FAQ2 answer");
		verifyTextofFAQs(faq3, faq_ques_content, "What are the requirements on my internet connection?",
				"FAQ3 question", faq_Answer_Text, "The speed of the connection has no", "FAQ3 answer");
		verifyTextofFAQs(faq5, faq_ques_content, "What happens if connection is broken?", "FAQ4 question",
				faq_Answer_Text, "If the modem is switched", "FAQ4 answer");
		verifyTextofFAQs(faq6, faq_ques_content, "I can't log in, what can I do?", "FAQ5 question", faq_Answer_Text,
				"First, make sure your internet connection", "FAQ5 answer");
		verifyTextofFAQs(faq7, faq_ques_content, "My system cannot connect to the internet, what can I do?",
				"FAQ6 question", faq_Answer_Text, "Make sure wifi is enabled on the system and/or", "FAQ6 answer");
		verifyTextofFAQs(faq8, faq_ques_content, "What happens in the event of an alarm?", "FAQ7 question",
				faq_Answer_Text, "you should contact your installer.", "FAQ7 answer");
		verifyTextofFAQs(faq9, faq_ques_content, "What should I do if the system changes owners?", "FAQ8 question",
				faq_Answer_Text, " a new Admin can delete the old users.", "FAQ8 answer");
		verifyTextofFAQs(faq10, faq_ques_content, "How many systems can a user be connected to?", "FAQ9 question",
				faq_Answer_Text, "There is no upper limit ", "FAQ9 answer");
		scrollToText("Which web browser is recommended for myUplink?");
		verifyTextofFAQs(faq11, faq_ques_content, "Can you monitor and administer my system?", "FAQ10 question",
				faq_Answer_Text, "At present, we do not offer", "FAQ10 answer");
		verifyTextofFAQs(faq12, faq_ques_content, "How secure is my system against data breaches?", "FAQ11 question",
				faq_Answer_Text, "between the Internet and the network where you install the system.", "FAQ11 answer");
		verifyTextofFAQs(faq13, faq_ques_content, "Which web browser is recommended for myUplink?", "FAQ12 question",
				faq_Answer_Text, "All web browsers with support for JavaScript should work", "FAQ12 answer");
		System.out.println("Verification for Content of FAQs for English language is successful.");
	}
	public void verifyContentOfFAQsForFrançais() {
		verifyTextofFAQs(faq1, faq_ques_content, "Comment démarrer avec myUplink?", "FAQ1 question", faq_Answer_Text,
				"Pour connecter votre système,", "FAQ1 answer");
		verifyTextofFAQs(faq2, faq_ques_content, "Qu'est-ce qu'une chaîne de connexion ?", "FAQ2 question",
				faq_Answer_Text, "La chaîne de connexion est générée", "FAQ2 answer");
		verifyTextofFAQs(faq3, faq_ques_content, "Quelle est la vitesse de connexion requise ?", "FAQ3 question",
				faq_Answer_Text, "La vitesse de la connexion n'a pas d'impact", "FAQ3 answer");
		verifyTextofFAQs(faq5, faq_ques_content, "Que se passe-t-il si la connexion est interrompue ?", "FAQ4 question",
				faq_Answer_Text, "Si le modem est éteint ou si la connexion Internet", "FAQ4 answer");
		verifyTextofFAQs(faq6, faq_ques_content, "Je n'arrive pas à me connecter, que puis-je faire ?", "FAQ5 question",
				faq_Answer_Text, "Tout d'abord, assurez-vous que votre connexion", "FAQ5 answer");
		verifyTextofFAQs(faq7, faq_ques_content, "Mon système ne peut pas se connecter à Internet, que puis-je faire ?",
				"FAQ6 question", faq_Answer_Text, "le Wi-Fi du système est activé", "FAQ6 answer");
		verifyTextofFAQs(faq8, faq_ques_content, "Que se passe-t-il en cas d'alarme ?", "FAQ7 question",
				faq_Answer_Text, "une notification est envoyée par push", "FAQ7 answer");
		verifyTextofFAQs(faq9, faq_ques_content, "Que dois-je faire si le système change de propriétaire ?",
				"FAQ8 question", faq_Answer_Text, "Lorsqu'un système change de propriétaire,", "FAQ8 answer");
		verifyTextofFAQs(faq10, faq_ques_content, "À combien de systèmes un utilisateur peut-il se connecter ?",
				"FAQ9 question", faq_Answer_Text, "Il n'y a pas de plafond", "FAQ9 answer");
		scrollToText("Quels sont les navigateurs Web recommandés pour myUplink ?");
		verifyTextofFAQs(faq11, faq_ques_content, "Pouvez-vous surveiller et gérer mon système ?", "FAQ10 question",
				faq_Answer_Text, "Nous n'offrons actuellement pas", "FAQ10 answer");
		verifyTextofFAQs(faq12, faq_ques_content,
				"Que recommandez-vous pour empêcher le piratage de mon produit myUplink et de mon compte ?",
				"FAQ11 question", faq_Answer_Text, " Il est donc important que vous", "FAQ11 answer");
		verifyTextofFAQs(faq13, faq_ques_content, "Quels sont les navigateurs Web recommandés pour myUplink ?",
				"FAQ12 question", faq_Answer_Text, "Nous vous recommandons de toujours", "FAQ12 answer");
		System.out.println("Verification for Content of FAQs for French language is successful.");
	}
	public void verifyContentOfFAQsForNorsk() {
		verifyTextofFAQs(faq1, faq_ques_content, "Hvordan kommer jeg i gang med myUplink?", "FAQ1 question",
				faq_Answer_Text, "For å koble til systemet ditt, er ", "FAQ1 answer");
		verifyTextofFAQs(faq2, faq_ques_content, "Hva er en forbindelsesstreng?", "FAQ2 question", faq_Answer_Text,
				"En forbindelsesstreng er en kode", "FAQ2 answer");
		verifyTextofFAQs(faq3, faq_ques_content, "Hvor rask forbindelse kreves?", "FAQ3 question", faq_Answer_Text,
				"Hastigheten på forbindelsen har", "FAQ3 answer");
		verifyTextofFAQs(faq5, faq_ques_content, "Hva skjer hvis forbindelsen brytes?", "FAQ4 question",
				faq_Answer_Text, "Hvis modemet slås av eller internettforbindelsen ", "FAQ4 answer");
		verifyTextofFAQs(faq6, faq_ques_content, "Jeg klarer ikke å logge inn, hva kan jeg gjøre?", "FAQ5 question",
				faq_Answer_Text, "forsikre deg om at internettforbindelsen", "FAQ5 answer");
		verifyTextofFAQs(faq7, faq_ques_content, "Systemet mitt kan ikke kobles til internett, hva kan jeg gjøre?",
				"FAQ6 question", faq_Answer_Text, "Sørg for at det trådløse ", "FAQ6 answer");
		verifyTextofFAQs(faq8, faq_ques_content, "Hva skjer i tilfelle alarmen går?", "FAQ7 question", faq_Answer_Text,
				"Varselet viser hva alarmen gjelder", "FAQ7 answer");
		verifyTextofFAQs(faq9, faq_ques_content, "Hva skal jeg gjøre hvis systemet skifter eiere?", "FAQ8 question",
				faq_Answer_Text, "system skifter eier", "FAQ8 answer");
		verifyTextofFAQs(faq10, faq_ques_content, "Hvor mange systemer kan en bruker koble seg til?", "FAQ9 question",
				faq_Answer_Text, "grense for hvor mange", "FAQ9 answer");
		scrollToText("Hvilken nettleser er anbefalt for myUplink?");
		verifyTextofFAQs(faq11, faq_ques_content, "Kan dere overvåke og administrere mitt system?", "FAQ10 question",
				faq_Answer_Text, "ikke denne tjenesten", "FAQ10 answer");
		verifyTextofFAQs(faq12, faq_ques_content,
				"Hva anbefaler du for å forhindre at myUplink-produktet mitt og kontoen min blir hacket?",
				"FAQ11 question", faq_Answer_Text, "i produktene som er koblet til", "FAQ11 answer");
		verifyTextofFAQs(faq13, faq_ques_content, "Hvilken nettleser er anbefalt for myUplink?", "FAQ12 question",
				faq_Answer_Text, "nyeste versjonen av en av de store", "FAQ12 answer");
		System.out.println("Verification for Content of FAQs for Norsk language is successful.");
	}
	public void verifyContentOfFAQsForSvenska() {
		verifyTextofFAQs(faq1, faq_ques_content, "Hur kommer jag igång med myUplink?", "FAQ1 question", faq_Answer_Text,
				"För att ansluta din anläggning", "FAQ1 answer");
		verifyTextofFAQs(faq2, faq_ques_content, "Vad är en anslutningssträng?", "FAQ2 question", faq_Answer_Text,
				"En anslutningssträng är en", "FAQ2 answer");
		verifyTextofFAQs(faq3, faq_ques_content, "Vilka är kraven på min internetanslutning?", "FAQ3 question",
				faq_Answer_Text, "Anslutningens hastighet har", "FAQ3 answer");
		verifyTextofFAQs(faq5, faq_ques_content, "Vad händer om anslutningen bryts?", "FAQ4 question", faq_Answer_Text,
				"Om modemet stängs av eller", "FAQ4 answer");
		verifyTextofFAQs(faq6, faq_ques_content, "Vad ska jag göra om det inte går att logga in?", "FAQ5 question",
				faq_Answer_Text, "att din internetanslutning fungerar", "FAQ5 answer");
		verifyTextofFAQs(faq7, faq_ques_content, "Vad ska jag göra om min anläggning inte kan ansluta till internet?",
				"FAQ6 question", faq_Answer_Text, "wifi är aktiverat i anläggningen.", "FAQ6 answer");
		verifyTextofFAQs(faq8, faq_ques_content, "Vad händer vid larm?", "FAQ7 question", faq_Answer_Text,
				"såväl push-meddelande som", "FAQ7 answer");
		verifyTextofFAQs(faq9, faq_ques_content, "Vad ska jag göra om anläggningen byter ägare?", "FAQ8 question",
				faq_Answer_Text, "anläggning byter ägare", "FAQ8 answer");
		verifyTextofFAQs(faq10, faq_ques_content, "Hur många anläggningar kan en användare vara ansluten till?",
				"FAQ9 question", faq_Answer_Text, "ingen övre gräns för", "FAQ9 answer");
		scrollToText("Vilken webbläsare rekommenderas till myUplink?");
		verifyTextofFAQs(faq11, faq_ques_content, "Kan ni övervaka och administrera min anläggning?", "FAQ10 question",
				faq_Answer_Text, "erbjuder vi inte den", "FAQ10 answer");
		verifyTextofFAQs(faq12, faq_ques_content,
				"Vad rekommenderar ni för att skydda min myUplink-produkt och mitt konto från att bli hackad?",
				"FAQ11 question", faq_Answer_Text, "i dina produkter anslutna", "FAQ11 answer");
		verifyTextofFAQs(faq13, faq_ques_content, "Vilken webbläsare rekommenderas till myUplink?", "FAQ12 question",
				faq_Answer_Text, "i din webbläsare.", "FAQ12 answer");
		System.out.println("Verification for Content of FAQs for Svenska language is successful.");
	}
	public void verifyContentOfFAQsForDanish() {
		verifyTextofFAQs(faq1, faq_ques_content, "Hvordan kommer jeg i gang med myUplink?", "FAQ1 question",
				faq_Answer_Text, "dit system skal", "FAQ1 answer");
		verifyTextofFAQs(faq2, faq_ques_content, "Hvad er en tilslutningsstreng?", "FAQ2 question", faq_Answer_Text,
				"som sikrer, at kun autoriserede", "FAQ2 answer");
		verifyTextofFAQs(faq3, faq_ques_content, "Hvor hurtig forbindelse kræves der?", "FAQ3 question",
				faq_Answer_Text, "ikke betydelig", "FAQ3 answer");
		verifyTextofFAQs(faq5, faq_ques_content, "Hvad sker der, hvis forbindelsen bliver afbrudt?", "FAQ4 question",
				faq_Answer_Text, "internetforbindelsen afbrydes, brydes", "FAQ4 answer");
		verifyTextofFAQs(faq6, faq_ques_content, "Jeg kan ikke logge ind, hvad kan jeg gøre?", "FAQ5 question",
				faq_Answer_Text, "at din internetforbindelse virker", "FAQ5 answer");
		verifyTextofFAQs(faq7, faq_ques_content, "Mit system kan ikke forbinde til internettet, hvad kan jeg gøre?",
				"FAQ6 question", faq_Answer_Text, "at dit kabel er forbundet", "FAQ6 answer");
		verifyTextofFAQs(faq8, faq_ques_content, "Hvad sker der i tilfælde af en alarm?", "FAQ7 question",
				faq_Answer_Text, "notifikation både via push og e-mail til", "FAQ7 answer");
		verifyTextofFAQs(faq9, faq_ques_content, "Hvad skal jeg gøre, hvis systemet skifter ejer?", "FAQ8 question",
				faq_Answer_Text, "Når et system skifter ejer", "FAQ8 answer");
		verifyTextofFAQs(faq10, faq_ques_content, "Hvor mange systemer kan en bruger være forbundet til?",
				"FAQ9 question", faq_Answer_Text, "hvor mange systemer en bruger", "FAQ9 answer");
		scrollToText("Hvilken webbrowser anbefales til myUplink?");
		verifyTextofFAQs(faq11, faq_ques_content, "Kan I overvåge og administrere mit system?", "FAQ10 question",
				faq_Answer_Text, "ikke denne service", "FAQ10 answer");
		verifyTextofFAQs(faq12, faq_ques_content,
				"Hvad anbefaler du for at forhindre, at mit myUplink-produkt og min konto bliver hacket?",
				"FAQ11 question", faq_Answer_Text, "de produkter og software", "FAQ11 answer");
		verifyTextofFAQs(faq13, faq_ques_content, "Hvilken webbrowser anbefales til myUplink?", "FAQ12 question",
				faq_Answer_Text, "version af en af de store", "FAQ12 answer");
		System.out.println("Verification for Content of FAQs for Danish language is successful.");
	}
	public void verifyContentOfFAQsForDeutsch() {
		verifyTextofFAQs(faq1, faq_ques_content, "Wie kann ich myUplink verwenden?", "FAQ1 question", faq_Answer_Text,
				"ist eine Internetverbindung", "FAQ1 answer");
		verifyTextofFAQs(faq2, faq_ques_content, "Was ist eine Verbindungszeichenfolge?", "FAQ2 question",
				faq_Answer_Text, "der sicherstellt, dass nur", "FAQ2 answer");
		verifyTextofFAQs(faq3, faq_ques_content, "Wie schnell muss die Verbindung sein?", "FAQ3 question",
				faq_Answer_Text, "Geschwindigkeit der Verbindung", "FAQ3 answer");
		verifyTextofFAQs(faq5, faq_ques_content, "Was passiert bei einem Verbindungsausfall?", "FAQ4 question",
				faq_Answer_Text, "Internetverbindung gestört ist", "FAQ4 answer");
		verifyTextofFAQs(faq6, faq_ques_content, "Ich kann mich nicht anmelden. Was soll ich tun?", "FAQ5 question",
				faq_Answer_Text, "Internetverbindung funktioniert", "FAQ5 answer");
		verifyTextofFAQs(faq7, faq_ques_content,
				"Meine Anlage kann keine Verbindung zum Internet herstellen. Was soll ich tun?", "FAQ6 question",
				faq_Answer_Text, "der Anlage aktiviert ist", "FAQ6 answer");
		verifyTextofFAQs(faq8, faq_ques_content, "Was passiert bei einem Alarm?", "FAQ7 question", faq_Answer_Text,
				"Benachrichtigung via Push und Mail", "FAQ7 answer");
		verifyTextofFAQs(faq9, faq_ques_content, "Was soll ich tun, wenn die Anlage den Besitzer wechselt?",
				"FAQ8 question", faq_Answer_Text, "sollte der ehemalige Besitzer sein", "FAQ8 answer");
		verifyTextofFAQs(faq10, faq_ques_content, "Mit wie vielen Anlagen kann ein Benutzer verbunden sein?",
				"FAQ9 question", faq_Answer_Text, "für die Anzahl der Anlagen", "FAQ9 answer");
		scrollToText("Welcher Browser wird für myUplink empfohlen?");
		verifyTextofFAQs(faq11, faq_ques_content, "Können Sie meine Anlage überwachen und verwalten?", "FAQ10 question",
				faq_Answer_Text, "aber erkundigen Sie sich bitte", "FAQ10 answer");
		verifyTextofFAQs(faq12, faq_ques_content,
				"Was empfehlen Sie, um zu verhindern, dass mein myUplink-Produkt und mein Konto gehackt werden?",
				"FAQ11 question", faq_Answer_Text, "der von uns entwickelten Produkte", "FAQ11 answer");
		verifyTextofFAQs(faq13, faq_ques_content, "Welcher Browser wird für myUplink empfohlen?", "FAQ12 question",
				faq_Answer_Text, "Version eines der großen Browserhersteller", "FAQ12 answer");
		System.out.println("Verification for Content of FAQs for Deutsch language is successful.");
	}
}