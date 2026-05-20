import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },

  titulo: {
    color: '#d4af37',
    fontSize: 28,
    fontFamily: 'MontBold',

    marginTop: 60,
    textAlign: 'center',

    textShadowColor: '#7a5a00',

          textShadowOffset: {
            width: 2,
            height: 2,
          },
          textShadowRadius: 3,
  },

  subtitulo: {
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },

  fotoContainer: {
    alignSelf: 'center',
    marginBottom: 30,
  },

  foto: {
    width: 150,
    height: 150,

    borderRadius: 75,

    borderWidth: 2,
    borderColor: '#c9960c',
  },

  cameraButton: {
    position: 'absolute',

    bottom: 0,
    right: 0,

    backgroundColor: '#c9960c',

    width: 42,
    height: 42,

    borderRadius: 21,

    justifyContent: 'center',
    alignItems: 'center',
  },

  notificacaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#111',

    borderWidth: 1,
    borderColor: '#c9960c',

    borderRadius: 16,

    padding: 18,

    marginTop: 10,
  },

  notificacaoTexto: {
    color: '#fff',
    fontSize: 16,
  },

  botaoSalvar: {
    backgroundColor: '#c9960c',

    padding: 18,

    borderRadius: 16,

    alignItems: 'center',

    marginTop: 30,
    marginBottom: 40,
  },

  textoBotao: {
    color: '#000',
    fontFamily: 'MontBold',
    fontSize: 16,
  },

});