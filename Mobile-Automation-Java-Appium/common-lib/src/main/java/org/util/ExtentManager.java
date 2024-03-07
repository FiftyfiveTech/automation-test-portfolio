/*
 * This utility class manages the creation and flushing of ExtentReports, which are used for generating test reports.
 * It provides methods to get the instance of ExtentReports, create a new test in the report, and flush the reports.
 */
package org.util;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

public class ExtentManager {
    private static ExtentReports extent;
    private static ExtentSparkReporter sparkReporter;

    // Method to get the instance of ExtentReports
    public static ExtentReports getInstance() {
        if (extent == null) {
            extent = createInstance("extent.html");
        }
        return extent;
    }

    // Method to create a new instance of ExtentReports with the specified file name
    private static ExtentReports createInstance(String fileName) {
        sparkReporter = new ExtentSparkReporter(fileName);
        extent = new ExtentReports();
        extent.attachReporter(sparkReporter);
        return extent;
    }

    // Method to create a new test in the ExtentReports with the specified name and description
    public static ExtentTest createTest(String testName, String testDescription) {
        return extent.createTest(testName, testDescription);
    }

    // Method to flush the ExtentReports and save the test results
    public static void flushReports() {
        if (extent != null) {
            extent.flush();
        }
    }
}
