import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";

import { fetchRepos } from "@/api/repositories";
import { useQuery } from "@tanstack/react-query";
import RepoListItem from "@/components/RepoListItem";
import ErrorScreen from "@/components/ErrorScreen";

export default function TabOneScreen() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />;
  }

  if (error) {
    return <ErrorScreen errorMessage={error.message} onRetry={refetch} />;
  }

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
});
