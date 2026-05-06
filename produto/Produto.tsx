import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import TextoPadrao from '../componentes/TextoPadrao';
import styles from './EstilosProdutos';

export default function Produto({ nome, descricao, imagem }: any) {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <TextoPadrao>{nome}</TextoPadrao>
          <TextoPadrao>{descricao}</TextoPadrao>
        </Card.Content>

        <Card.Cover source={imagem} />
      </Card>
    </View>
  );
}