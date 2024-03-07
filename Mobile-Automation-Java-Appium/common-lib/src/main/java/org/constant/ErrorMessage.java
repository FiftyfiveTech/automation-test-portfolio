package org.constant;

public interface ErrorMessage {

	public static final String VALIDATION_PASSWORD_FIELD_RULE = "The password must be at least 8 characters long with 1 lower case, 1 upper case and 1 digit.";
	public static final String VALIDATION_EMAIL_FIELD = "Invalid email address.";
	public static final String VALIDATION_EMPTY_FIELD = "Field can't be empty.";
	public static final String AUTHORIZATION_INCORRECT_EMAIL = "Incorrect email or password";
	public static final String RECOVERY_CHECK_EMAIL = "Please check your email.";
	public static final String VALIDATION_CONFIRM_PASSWORD_FIELD ="Passwords do not match.";
}
