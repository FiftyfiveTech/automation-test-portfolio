/*
 * This class provides a centralized mechanism to manage AppiumDriver instances in a multi-threaded environment.
 * It utilizes a ThreadLocal variable to store the driver instance, ensuring thread safety and isolation.
 * The class is marked as final to prevent inheritance, and the constructor is marked private to
 * ensure that no instances of this class can be created, as it is intended to be used only for
 * accessing static methods related to driver management.
 */
package org.driver;

import io.appium.java_client.AppiumDriver;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.Objects;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class DriverManager {

  // ThreadLocal variable to store the AppiumDriver instance for each thread
  private static final ThreadLocal<AppiumDriver> DRIVER_THREAD_LOCAL = new ThreadLocal<>();

  // Method to retrieve the AppiumDriver instance associated with the current thread
  public static AppiumDriver getDriver() {
    return DRIVER_THREAD_LOCAL.get();
  }

  // Method to set the AppiumDriver instance for the current thread
  public static void setAppiumDriver(AppiumDriver driver) {
    if (Objects.nonNull(driver))
      DRIVER_THREAD_LOCAL.set(driver);
  }

  // Method to remove the AppiumDriver instance associated with the current thread
  public static void unload() {
    DRIVER_THREAD_LOCAL.remove();
  }
}
