import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video'; 

//Componente de Texto Parão 
import TextoPadrao from '../componentes/TextoPadrão';

export default function Sobre() {

  //Configuração do Vídeo
  const player = useVideoPlayer(require('../assets/SALAO.mp4'), player=>{ player.loop=true; player.play();});
  
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../assets/logo.png')} style={styles.logo}resizeMode='contain'/>
      <TextoPadrao estiloEspecifico={styles.texto}>
        Na JK Visual, cada corte é pensado para valorizar o estilo e a personalidade de cada cliente. 
        {'\n'}Com técnica, precisão e atenção aos detalhes, a barbearia oferece um atendimento de qualidade em um ambiente moderno e confortável.
        {'\n'}Mais do que um corte de cabelo, a JK Visual entrega confiança, estilo e um visual renovado. 
        {'\n'}✂️💈JK Visual — seu estilo em destaque.
        
      </TextoPadrao>
      <Image source={require('../assets/PESCA1.jpeg')} style={styles.logo1}resizeMode='contain'/>
      <VideoView player={player} style={styles.video} allowsPictureInPicture/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',

  },
  logo1: {
    width: 320,
    height: 320,
    alignSelf: 'center',

  },
  video: {
    width: 380,
    height: 320,
    alignSelf: 'center',
  },
  texto: {
    color: 'white',
    textAlign: 'center',
  }
});