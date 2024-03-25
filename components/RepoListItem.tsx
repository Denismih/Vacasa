import { Link } from "expo-router";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

type RepoListItemProps = {
  item: { id: string; title: string; description: string };
};

const RepoListItem = ({ item }: RepoListItemProps) => {
  return (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </Pressable>
    </Link>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
  },
  desc: {
    fontSize: 12,
    marginBottom: 10,
  },
});

export default RepoListItem;
