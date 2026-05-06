import React from 'react';
import { FlatList } from 'react-native';
import Produto from './Produto';

export default function Index({ lista }: any) {
  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => <Produto {...item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}