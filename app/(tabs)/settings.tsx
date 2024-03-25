import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import UserInfo from "@/components/UserInfo";
import AppVersion from "@/components/AppVersion";

export default function SettingsScreen() {
  const user = {
    name: "Vacassa",
    email: "vacassa@vacassa.com",
    avatar:
      "https://cms-assets.boise.vacasa.com/svg/140x32_Vacasa_Logo_Horizontal_Blue.898f70a0d30e.svg",
  };
  return (
    <View style={styles.container}>
      <UserInfo {...user} />
      <Text style={styles.label}>SUPPORT</Text>
      <AppVersion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  label: {
    backgroundColor: "transparent",
    padding: 10,
    color: "gray",
    fontWeight: "400",
  },
});
