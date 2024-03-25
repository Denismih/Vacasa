import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ErrorScreenProps {
  errorMessage: string;
  onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ errorMessage, onRetry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Error: {errorMessage}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ErrorScreen;
