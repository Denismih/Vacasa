import { StyleSheet, ActivityIndicator, FlatList, } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';

import { fetchRepos } from '@/api/repositories';
import { useQuery } from '@tanstack/react-query';

export default function TabOneScreen() {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['repos'],
    queryFn: fetchRepos,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList  data={repos} renderItem={({item})=> <Text>{item.name}</Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

