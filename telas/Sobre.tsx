import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video'; 

//Componente de Texto Parão 
import TextoPadrao from '../componentes/TextoPadrão';

export default function Sobre() {

  //Configuração do Vídeo
  const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player=>{ player.loop=true; player.play();});
  
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../assets/Pesca.png')} style={styles.logo}resizeMode='contain'/>
      <TextoPadrao estiloEspecifico={styles.texto}>
        A helios pesca é uma empresa tradicional no ramos da pesca, 
        {'\n'}onde pai e filho fundaram a empresa pelo fato de que {/*utilizamos o {'\n'} pra pular linha*/}
        {'\n'}ambos são amantes da pesca
      </TextoPadrao>
      <Image source={require('../assets/PESCA1.jpg')} style={styles.logo}resizeMode='contain'/>
      <VideoView player={player} style={styles.video} allowsPictureInPicture/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    paddingHorizontal: 16,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',

  },
  video: {
    width: 350,
    height: 275,
    alignSelf: 'center',
  },
  texto: {
    color: 'black',
  }
});