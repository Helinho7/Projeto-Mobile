import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Produto from './Produto';
import TextoPadrao from '../componentes/TextoPadrao';

interface ProdutoItem {
  id: number;
  nome: string;
  descricao: string;
  imagem: any;
  preco: string; 
  imagensModal: any[];
}

interface IndexProps {
  titulo: string;
  lista: ProdutoItem[];
}

export default function Index({ titulo, lista }: IndexProps) {

  // Um único estado de modal para toda a lista — melhor performance
  const [modalAbertoId, setModalAbertoId] = useState<number | null>(null);

  return (
    <View style={{ flex: 1, backgroundColor: '#0a0a0a' }}>

      {/* TÍTULO vindo do mock */}
      <TextoPadrao
        estiloEspecifico={{
          fontSize: 35,
          fontWeight: 'bold',
          marginTop: 65,
          marginBottom: 10,
          lineHeight: 38,
          color: '#d4af37',

          letterSpacing: 1.5,

          textAlign: 'center',

          textShadowColor: '#7a5a00',

          textShadowOffset: {
            width: 2,
            height: 2,
          },
          textShadowRadius: 3,
        }}
      >
        {titulo}
      </TextoPadrao>
      <TextoPadrao
        estiloEspecifico={{
          fontSize: 20,
          marginBottom: 10,
          color: '#888',
          textAlign: 'center',
        }}
      >
        Escolha o corte ideal para você
      </TextoPadrao>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Produto
            {...item}
            modalVisible={modalAbertoId === item.id}
            onAbrirModal={() => setModalAbertoId(item.id)}
            onFecharModal={() => setModalAbertoId(null)}
          />
        )}
      />

    </View>
  );
}
