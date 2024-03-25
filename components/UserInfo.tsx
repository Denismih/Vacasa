import Colors from "@/constants/Colors";
import { View, Text, Image, StyleSheet } from "react-native";

type UserIfoProps = {
  name: string;
  email: string;
  avatar: string;
};

const UserInfo = ({ name, email, avatar }: UserIfoProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: Colors.light.background,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 5,
  },
  email: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
});

export default UserInfo;
