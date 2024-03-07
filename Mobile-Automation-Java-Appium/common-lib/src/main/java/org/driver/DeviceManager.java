/*
 * This class provides a centralized mechanism to manage device names in a multi-threaded environment.
 * It utilizes a ThreadLocal variable to store the device name, ensuring thread safety and isolation.
 * The class is marked as final to prevent inheritance, and the constructor is marked private to
 * ensure that no instances of this class can be created, as it is intended to be used only for
 * accessing static methods related to device management.
 */
package org.driver;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class DeviceManager {

  // ThreadLocal variable to store the device name for each thread
  private static final ThreadLocal<String> DEVICE_NAME = new ThreadLocal<>();

  // Method to retrieve the device name associated with the current thread
  public static String getDeviceName() {
    return DEVICE_NAME.get();
  }

  // Method to set the device name for the current thread
  public static void setDeviceName(String device) {
    DEVICE_NAME.set(device);
  }

  // Method to remove the device name associated with the current thread
  public static void removeDeviceName() {
    DEVICE_NAME.remove();
  }
}
