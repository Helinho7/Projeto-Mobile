import React, { useState } from 'react';

import {
  View,
  Modal,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

import { Card } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

import TextoPadrao from '../componentes/TextoPadrao';
import { styles, modalStyles } from './EstilosProdutos';

interface ProdutoProps {
  nome: string;
  descricao: string;
  preco: string;
  imagem: ImageSourcePropType;
  imagensModal: ImageSourcePropType[];
  modalVisible: boolean;
  onAbrirModal: () => void;
  onFecharModal: () => void;
}

export default function Produto({
  nome,
  descricao,
  preco,
  imagem,
  imagensModal,
  modalVisible,
  onAbrirModal,
  onFecharModal,
}: ProdutoProps) {

  const [favorito, setFavorito] = useState(false);
  const [imagemAtiva, setImagemAtiva] = useState(0);   

  return (
    <View>

      <Card style={styles.card}>
        <TouchableOpacity
          style={styles.coracao}
          onPress={() => setFavorito(!favorito)}
        >
          <Ionicons
            name={favorito ? 'heart' : 'heart-outline'}
            size={28}
            color='#c9960c'
          />
        </TouchableOpacity>

        <Image
          source={imagem}
          style={styles.imagem}
          resizeMode="cover"
        />

        <Card.Content>
          <TextoPadrao estiloEspecifico={styles.nome}>{nome}</TextoPadrao>
          <TextoPadrao estiloEspecifico={styles.preco}>{preco}</TextoPadrao>
          <TextoPadrao estiloEspecifico={styles.descricao}>{descricao}</TextoPadrao>

          <TouchableOpacity style={styles.botao} onPress={onAbrirModal}>
            <TextoPadrao estiloEspecifico={styles.textoBotao}>
              Ver detalhes
            </TextoPadrao>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Modal
        visible={modalVisible}
        animationType='slide'
        onRequestClose={onFecharModal}
      >
        <View style={modalStyles.container}>

          <View style={modalStyles.header}>
            <TouchableOpacity style={modalStyles.btnVoltar} onPress={onFecharModal}>
              <Ionicons name="arrow-back" size={18} color="#888" />
            </TouchableOpacity>
            <TextoPadrao estiloEspecifico={modalStyles.headerTitulo}>
              Detalhes
            </TextoPadrao>
            <TouchableOpacity style={modalStyles.btnCoracao} onPress={() => setFavorito(!favorito)}>
              <Ionicons
                name={favorito ? 'heart' : 'heart-outline'}
                size={18}
                color="#c9960c"
              />
            </TouchableOpacity>
          </View>

          <View style={modalStyles.imagemContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={{ overflow: 'hidden' }}
              onScroll={(e) => {
                const index = Math.round(
                  e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
                );
                setImagemAtiva(index);
              }}
              scrollEventThrottle={16}
            >
              {imagensModal.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={modalStyles.imagem}
                  resizeMode="contain"
                />
              ))}
            </ScrollView>
          </View>

          {/* DOTS */}
          <View style={modalStyles.dots}>
            {imagensModal.map((_, index) => (
              <View
                key={index}
                style={index === imagemAtiva ? modalStyles.dotAtivo : modalStyles.dot}
              />
            ))}
          </View>

          <View style={modalStyles.badgeRow}>
            <View style={modalStyles.badgeTempo}>
              <TextoPadrao estiloEspecifico={modalStyles.badgeTempoTexto}>
                ⏱ 45 min
              </TextoPadrao>
            </View>
          </View>

          <TextoPadrao estiloEspecifico={modalStyles.nome}>{nome}</TextoPadrao>
          <TextoPadrao estiloEspecifico={modalStyles.preco}>{preco}</TextoPadrao>
          <TextoPadrao estiloEspecifico={modalStyles.descricao}>{descricao}</TextoPadrao>

          <View style={modalStyles.divider} />

          <TouchableOpacity style={modalStyles.btnAgendar} onPress={onFecharModal}>
            <TextoPadrao estiloEspecifico={modalStyles.btnAgendarTexto}>
              AGENDAR AGORA
            </TextoPadrao>
          </TouchableOpacity>

        </View>
      </Modal>

    </View>
  );
}