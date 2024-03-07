# Core Mobile Automation Framework using Java & Appium
This project consists of two primary modules: a common library (common-lib) and a consumer automation suite (consumer-automation). The common library offers reusable components, utilities, and constants, while the consumer automation suite is dedicated to automating tests for a consumer application.

## Installation

Pre-requisite you need to have following softwares installed on your computer

```
1) Install JDK 1.8+ and set path
2) Install Maven and set path
3) Eclipse or IntelliJ IDEA
4) Eclipse Plugins: Maven,TestNg
5)Install NodeJS
6)Install Android studio
7)Install Appium Server using npm (CLI) command npm install -g appium
8)Install [Appium Inspector](https://github.com/appium/appium-inspector/releases)

```
## Add below Android SDK path in the environment variable

```
    - ANDROID_HOME = <path to Sdk folder>
    - %ANDROID_HOME%\tools
    - %ANDROID_HOME%\tools\bin
    - %ANDROID_HOME%\platform-tools
```
## Creating Android Virtual Device (Emulator) from Android Studio:
```
1) Open Android Studio.
2) Click on Tools -> AVD Manager -> Create Virtual Device -> Select the device and OS version -> Finish.
3) Once Virtual device is created, click on Launch this AVD in the emulator.
4) Command to view the list of devices attached `adb devices`

```
## Project structure

```java
nibejpi-app-automation

│   pom.xml             # Maven project configuration file
└───src
    └───main
        └───java
            └───org
                └───annotations    # Custom annotations
                └───base           # Base classes for tests
                └───constant       # Constants and enums
                └───driver         # WebDriver setup and management
                └───enumeration    # Enumerations
                └───exception      # Custom exceptions
                └───listener       # TestNG listeners
                └───utils          # General utility classes

├───pro-app-automation
├───src
│   ├───main
│   │   └───java
            └───pages
                  └───forgotpassword      # Page objects and actions for the 'Forgot Password' functionality
                  └───hamburgermenu       # Page objects and actions for the 'Hamburger Menu' functionality
                  └───login               # Page objects and actions for the 'Login' functionality
                  └───help                # Page objects and actions for the 'Help' functionality
                  └───login               # Page objects and actions for the 'Login' functionality
                 
  └───resources
            └───app                                    # Directory to store application binaries (e.g., APK)
                └───professionalapp-prod-release.apk   # profesional application binary
            └───config                                 # Directory to store configuration files
                └───config.json                        # Configuration file for the consumer automation suite
            └───testData                               # Directory to store test data files
                └───ProTestData.xlsx                   # Test data for pro tests
    └───test
        └───java
            └───testcases
                └───AboutSection          # Test cases for the 'AboutSection' functionality
                └───ForgotPassword        # Test cases for the 'Forgot Password' functionality
                    └───HelpSection       # Test case for the 'HelpSection' screen
                    └───LoginHelper       # Helper class for login-related operations
                    └───LoginScreenTest   # Test case for the 'Login' screen
        └───resources
            └───target                    # Compiled output directory

 
```