import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';

const { width } = Dimensions.get('window');

//Componente de Texto Parão 
import TextoPadrao from '../componentes/TextoPadrao';

const imagens = [

  {
    imagem: require('../assets/ambiente1.png'),

    titulo: 'NOSSO ESPAÇO', 

    descricao:
      'Ambiente moderno, elegante e confortável.',
  },

  {
    imagem: require('../assets/ambiente2.png'),

    titulo: 'EXPERIÊNCIA JK',

    descricao:
      'Conforto, sofisticação e atendimento premium.',
  },

  {
    imagem: require('../assets/ambiente3.png'),

    titulo: 'PRECISÃO PREMIUM',

    descricao:
      'Cada detalhe pensado para elevar seu estilo.',
  },

];

export default function Sobre() {

  //Configuração do Vídeo
  const player = useVideoPlayer(require('../assets/SALAO.mp4'), player=>{ player.loop=true; player.play();});
  const [imagemAtiva, setImagemAtiva] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../assets/logo.png')} style={styles.logo}resizeMode='contain'/>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginHorizontal: 16 }}>
      <View style={{ flex: 1, height: 2, backgroundColor: '#ffca37', opacity: 0.3 }} />
      <Ionicons name="cut-outline" size={22} color="gold" style={{ marginHorizontal: 10, opacity: 0.6,textShadowColor: '#7a5a00',textShadowOffset: {width: 2, height: 2},textShadowRadius: 3 }} />
      <View style={{ flex: 1, height: 2, backgroundColor: '#ffca37', opacity: 0.3 }} />
      </View>

      <TextoPadrao estiloEspecifico={styles.texto}>
        Na <TextoPadrao estiloEspecifico={styles.textohistoria}>
            JK Visual
          </TextoPadrao>, cada corte é pensado para valorizar o estilo e a personalidade de cada cliente. 
        {'\n'}Com técnica, precisão e atenção aos detalhes, a barbearia oferece um atendimento de qualidade em um ambiente <Text style={{ color: '#d4af37', fontFamily: 'MontBold',fontSize: 18 }}>Moderno e Confortável</Text>
        {'\n'}Mais do que um corte de cabelo, a JK Visual entrega confiança, estilo e um visual renovado. 
        {'\n'}<Text style={{ color: '#d4af37' }}>✂️💈JK Visual — seu estilo em destaque.</Text>
        
      </TextoPadrao>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginHorizontal: 16 }}>
      <View style={{ flex: 1, height: 2, backgroundColor: '#ffca37', opacity: 0.3 }} />
      <Ionicons name="cut-outline" size={22} color="gold" style={{ marginHorizontal: 10, opacity: 0.6,textShadowColor: '#7a5a00',textShadowOffset: {width: 2, height: 2},textShadowRadius: 3  }} />
      <View style={{ flex: 1, height: 2, backgroundColor: '#ffca37', opacity: 0.3 }} />
      </View>

      <View style={styles.infoVideo}>

          <TextoPadrao estiloEspecifico={styles.tituloVideo}>
            ✂ NOSSO ESPAÇO!
          </TextoPadrao>

          <TextoPadrao estiloEspecifico={styles.descricaoVideo}>
            Um ambiente pensado para elevar
            sua experiência.
          </TextoPadrao>

      </View>

            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}

              onScroll={(event) => {

                const slide = Math.round(
                  event.nativeEvent.contentOffset.x / width
                );

                setImagemAtiva(slide);

              }}

              scrollEventThrottle={16}
            >

              {imagens.map((item, index) => (

                <View
                  key={index}
                  style={styles.cardCarrossel}
                >

                  {/* IMAGEM */}
                  <Image
                    source={item.imagem}
                    style={styles.imagemCarrossel}
                    resizeMode='cover'
                  />

                  {/* OVERLAY */}
                  <View style={styles.overlay}>

                    <TextoPadrao estiloEspecifico={styles.tituloOverlay}>
                      {item.titulo}
                    </TextoPadrao>

                    <TextoPadrao estiloEspecifico={styles.descricaoOverlay}>
                      {item.descricao}
                    </TextoPadrao>

                  </View>

                </View>

              ))}

            </ScrollView>
    
            <View style={styles.dots}>

            {imagens.map((_, index) => (

              <View
                key={index}
                style={
                  index === imagemAtiva
                    ? styles.dotAtivo
                    : styles.dot
                }
              />

            ))}

            </View>
        <View style={styles.infoVideo}>

          <TextoPadrao estiloEspecifico={styles.tituloVideo}>
            ✂ EXPERIÊNCIA PREMIUM
          </TextoPadrao>

          <TextoPadrao estiloEspecifico={styles.descricaoVideo}>
            Ambiente moderno e profissionais
            qualificados.
          </TextoPadrao>

        </View>
        <View style={styles.videoContainer}>
        <VideoView
            player={player}
            style={styles.video}
            allowsPictureInPicture
          />

        </View>

        
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: -30,

  },
  logo1: {
    width: 320,
    height: 320,
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#c9960c',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,

  },
  texto: {
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  textohistoria: {
    fontSize: 17,
    marginTop: -5,
    fontFamily: 'MontBold',
    color: '#d4af37',
    letterSpacing: 1.5,
    textAlign: 'center',
    textShadowColor: '#7a5a00',
    textShadowOffset: {
      width: 1.5,
      height: 1.5,
    },

    textShadowRadius: 3,
    lineHeight: 30,
  },
    cardCarrossel: {
    width: width,
    alignItems: 'center',
    marginTop: 30,
  },

  imagemCarrossel: {
    width: width - 40,
    height: 300,
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 2,           // ← fino e elegante
    borderColor: '#2c2b2b',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,

    width: width - 40,

    padding: 25,

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

    backgroundColor: 'rgba(0, 0, 0, 0.42)',
  },

  tituloOverlay: {
    color: '#c9960c',
    fontSize: 18,
    fontFamily: 'MontBold',
    textShadowColor: '#000',
    textShadowRadius: 8,
  },

  descricaoOverlay: {
    color: '#ffffff',
    marginTop: 6,
    lineHeight: 22,
    fontSize: 15,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 30,
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#444',
  },

  dotAtivo: {
    width: 22,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#c9960c',
  },
  videoContainer: {
    width: width - 32,
    height: 180,
    marginBottom: 20,
    alignSelf: 'center',

    borderRadius: 20,
    overflow: 'hidden',

    marginTop: 40,

    borderWidth: 1,
    borderColor: '#2c2b2b',
  },

  video: {
    width: '100%',
    height: '100%',
  },

  infoVideo: {
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: -5,
    
  },

  tituloVideo: {
    fontSize: 20,
    marginTop: -5,
    fontFamily: 'MontBold',

    color: '#d4af37',

    letterSpacing: 1.5,

    textAlign: 'center',

    textShadowColor: '#7a5a00',

    textShadowOffset: {
      width: 2,
      height: 2,
    },

    textShadowRadius: 3,
    lineHeight: 30,
  },

  descricaoVideo: {
    color: '#ffffffe1',
    marginTop: 6,
    lineHeight: 22,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: -13,
  },
});