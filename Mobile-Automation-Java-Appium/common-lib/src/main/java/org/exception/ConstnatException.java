/*
 * This exception class represents an exception related to constants within the application.
 * It extends the RuntimeException class and is marked with @SuppressWarnings("serial") to suppress
 * compiler warnings related to serialization.
 */
package org.exception;

@SuppressWarnings("serial")
public class ConstnatException extends RuntimeException {

  // Constructor with a message parameter
  public ConstnatException(String message) {
    super(message);
  }

  // Constructor with message and cause parameters
  public ConstnatException(String message, Throwable t) {
    super(message, t);
  }
}
