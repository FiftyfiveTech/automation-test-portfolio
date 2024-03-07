/*
 * This class provides a centralized mechanism to manage platform names in a multi-threaded environment.
 * It utilizes a ThreadLocal variable to store the platform name, ensuring thread safety and isolation.
 * The class is marked as final to prevent inheritance, and the constructor is marked private to
 * ensure that no instances of this class can be created, as it is intended to be used only for
 * accessing static methods related to platform management.
 */
package org.driver;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class PlatformManager {

  // ThreadLocal variable to store the platform name for each thread
  private static final ThreadLocal<String> PLATFORM_NAME = new ThreadLocal<>();

  // Method to retrieve the platform name associated with the current thread
  public static String getPlatformName() {
    return PLATFORM_NAME.get();
  }

  // Method to set the platform name for the current thread
  public static void setPlatformName(String platform) {
    PLATFORM_NAME.set(platform);
  }

  // Method to remove the platform name associated with the current thread
  public static void removePlatformName() {
    PLATFORM_NAME.remove();
  }
}
