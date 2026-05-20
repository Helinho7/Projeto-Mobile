import React, { useState } from 'react';

import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Ionicons from '@expo/vector-icons/Ionicons';

import TextoPadrao from '../componentes/TextoPadrao';
import InputPadrao from '../componentes/InputPadrao';

import { styles } from './EstilosConta';

export default function Conta() {

  const [notificacao, setNotificacao] = useState(true);

  const [foto, setFoto] = useState(null);

  async function selecionarImagem() {

    const resultado =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,

        quality: 1,

      });

    if (!resultado.canceled) {

      setFoto(resultado.assets[0].uri);

    }
  }

  return (

    <ScrollView style={styles.container}>

      <TextoPadrao estiloEspecifico={styles.titulo}>
        Meu Perfil
      </TextoPadrao>

      <TextoPadrao estiloEspecifico={styles.subtitulo}>
        Gerencie suas informações
      </TextoPadrao>

      {/* FOTO */}
      <View style={styles.fotoContainer}>

        <Image
        source={
          foto
            ? { uri: foto }
            : require('../assets/perfil.png')
        }
        style={styles.foto}
      />

        <TouchableOpacity
          style={styles.cameraButton}
          onPress={selecionarImagem}
        >

          <Ionicons
            name="camera"
            size={20}
            color="#000"
          />

        </TouchableOpacity>

      </View>

      {/* INPUTS */}
      <InputPadrao
        icon="person-outline"
        placeholder="Nome Completo"
      />

      <InputPadrao
        icon="mail-outline"
        placeholder="E-mail"
      />

      <InputPadrao
        icon="logo-whatsapp"
        placeholder="WhatsApp"
      />

      {/* NOTIFICAÇÕES */}
      <View style={styles.notificacaoContainer}>

        <TextoPadrao estiloEspecifico={styles.notificacaoTexto}>
          Receber notificações
        </TextoPadrao>

        <Switch
          value={notificacao}
          onValueChange={setNotificacao}

          thumbColor="#c9960c"
          trackColor={{
            false: '#333',
            true: '#555',
          }}
        />

      </View>

      {/* BOTÃO */}
      <TouchableOpacity style={styles.botaoSalvar}>

        <TextoPadrao estiloEspecifico={styles.textoBotao}>
          SALVAR ALTERAÇÕES
        </TextoPadrao>

      </TouchableOpacity>

    </ScrollView>
  );
}