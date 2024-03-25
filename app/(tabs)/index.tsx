import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TextInput,
  View,
  Button,
} from "react-native";
import React, { useState } from "react";

import { fetchRepos } from "@/api/repositories";
import { useQuery } from "@tanstack/react-query";
import RepoListItem from "@/components/RepoListItem";
import ErrorScreen from "@/components/ErrorScreen";

export default function TabOneScreen() {
  const [searchQuery, setSearchQuery] = useState("org:vacasaoss");
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["repos"],
    queryFn: () => fetchRepos(searchQuery),
  });

  if (isFetching) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />;
  }

  const handleError = () => {
    setSearchQuery("org:vacasaoss");
    refetch();
  };

  if (error) {
    return <ErrorScreen errorMessage={error.message} onRetry={handleError} />;
  }

  const handleSearch = () => {
    refetch();
  };

  const parseRepositories = (jsonRepositories) => {
    const isRepoValid = (repo) =>
      repo &&
      typeof repo === "object" &&
      "id" in repo &&
      "name" in repo &&
      "description" in repo;

    return jsonRepositories.reduce((acc, repo) => {
      if (isRepoValid(repo)) {
        acc.push({
          id: String(repo.id),
          title: String(repo.name),
          description: String(repo.description),
        });
      } else {
        console.error("Invalid repository encountered", repo);
      }
      return acc;
    }, []);
  };
  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search repositories..."
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={parseRepositories(data)}
        renderItem={({ item }) => <RepoListItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 5 }}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    margin: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
    marginLeft: "3%",
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CED0CE",
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 10,
  },
});
