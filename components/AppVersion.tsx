import Colors from "@/constants/Colors";
import packageJson from "../package.json";
import { View, Text, StyleSheet } from "react-native";

const AppVersion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App Version</Text>
      <Text style={styles.value}>{packageJson.version}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: Colors.light.background,
  },
  label: {
    flex: 1,
    justifyContent: "flex-start",
    fontSize: 18,
  },
  value: {
    justifyContent: "flex-end",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default AppVersion;
