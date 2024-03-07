/*
 * This exception class represents an exception related to the usage of property files within the application.
 * It extends the ConstnatException class, which itself extends the RuntimeException class.
 * The class is marked with @SuppressWarnings("serial") to suppress compiler warnings related to serialization.
 */
package org.exception;

@SuppressWarnings("serial")
public class PropertyFileUsageException extends ConstnatException {

  // Constructor with a message parameter
  public PropertyFileUsageException(String message) {
    super(message);
  }

  // Constructor with message and cause parameters
  public PropertyFileUsageException(String message, Throwable t) {
    super(message, t);
  }
}
