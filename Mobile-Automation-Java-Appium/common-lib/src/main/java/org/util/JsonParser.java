/*
 * This utility class provides methods for parsing JSON files and retrieving configuration values from them.
 * It uses Jackson ObjectMapper for JSON parsing. The class is marked as final to prevent inheritance,
 * and the constructor is marked private to ensure that no instances of this class can be created,
 * as it is intended to be used only for accessing static methods.
 */
package org.util;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.constant.Constants;
import org.enumeration.ConfigJson;
import org.exception.JsonFileUsageException;
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class JsonParser {
  private static Map < String, String > map;
  // Method to read the JSON file and parse its content into a map
  static void readJson(String jsonPath) {
    try {
      map = new ObjectMapper().readValue(new File(jsonPath),
              new TypeReference < HashMap < String, String >> () {});
    } catch (IOException e) {
      throw new JsonFileUsageException("Exception occurred while reading Json file in the specified path");
    }
  }
  // Method to get a configuration value from the JSON map based on the provided key
  public static String getConfig(ConfigJson key) {
    readJson(Constants.CONFIG_JSON_PATH);
    if (Objects.isNull(map.get(key.name().toLowerCase()))) {
      throw new JsonFileUsageException("Property name - " + key + " is not found. Please check the config.json");
    }
    return map.get(key.name().toLowerCase());
  }
}