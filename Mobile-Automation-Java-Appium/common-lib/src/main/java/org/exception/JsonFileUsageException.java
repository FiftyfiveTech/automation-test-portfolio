/*
 * This exception class represents an exception related to the usage of JSON files within the application.
 * It extends the ConstnatException class, which itself extends the RuntimeException class.
 * The class is marked with @SuppressWarnings("serial") to suppress compiler warnings related to serialization.
 */
package org.exception;

@SuppressWarnings("serial")
public class JsonFileUsageException extends ConstnatException {

  // Constructor with a message parameter
  public JsonFileUsageException(String message) {
    super(message);
  }

  // Constructor with message and cause parameters
  public JsonFileUsageException(String message, Throwable t) {
    super(message, t);
  }
}
