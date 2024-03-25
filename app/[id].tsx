import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const RepoDetails = () => {
  const { id: idString } = useLocalSearchParams();
  const id = typeof idString === "string" ? idString : idString[0];
  return (
    <View>
      <Stack.Screen options={{ title: id }} />
      <Text style={{ fontSize: 16, padding: 20 }}>
        `Some detail info for repo id:{id}`
      </Text>
    </View>
  );
};

export default RepoDetails;
