import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    backgroundColor: '#000',
  },
  card: {
    margin: 12,
    borderRadius: 18,
    backgroundColor: '#1e1e1e',
    elevation: 5,
    paddingTop: 15,
    overflow: 'hidden',
    borderWidth: 2,           // ← fino e elegante
    borderColor: '#2c2b2b',
  },

  imagem: {
    width: 320,
    height: 300,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 10,
  },

  nome: {
    color: 'white',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 6,
    fontWeight: 'bold',
  },

  descricao: {
    color: '#cfcfcf',
  },

  botao: {
    backgroundColor: '#c9960c',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
  },

  coracao: {
    position: 'absolute',
    top: 25,
    right: 25,
    zIndex: 999,
    elevation: 10,
    borderRadius: 30,
    padding: 5,
  },
  preco: {
    color: '#c9960c',    
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 6,
  },

});

export const modalStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  btnVoltar: {
    width: 45,
    height: 45,
    borderRadius: 18,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitulo: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'MontBold',
  },

  btnCoracao: {
    width: 45,
    height: 45,
    borderRadius: 18,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemContainer: {
    marginHorizontal: 8,
    marginVertical: 13,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#c9960c',
    overflow: 'hidden',
    height: 450,
    backgroundColor: '#111',
  },

  imagem: {
    width: Dimensions.get('window').width - 16,
    height: 500,
    alignSelf: 'center',
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 3,
    backgroundColor: '#2a2a2a',
  },

  dotAtivo: {
    width: 18,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#c9960c',
  },

  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
    paddingHorizontal: 16,
  },

  badgeTempo: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },

  badgeTempoTexto: {
    color: '#666666',
    fontSize: 15,
  },

  nome: {
    color: '#ffffff',
    fontSize: 26,
    fontFamily: 'MontBold',
    marginTop: 10,
    paddingHorizontal: 16,
  },

  preco: {
    color: '#c9960c',
    fontSize: 22,
    fontFamily: 'MontBold',
    marginTop: 8,
    paddingHorizontal: 16,
  },

  descricao: {
    color: '#888888',
    fontSize: 16,
    marginTop: 6,
    paddingHorizontal: 16,
    lineHeight: 18,
  },

  divider: {
    height: 3,
    backgroundColor: '#1e1e1e',
    marginHorizontal: 16,
    marginTop: 16,
  },

  btnAgendar: {
    backgroundColor: '#c9960c',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },

  btnAgendarTexto: {
    color: '#0a0a0a',
    fontFamily: 'MontBold',
    fontSize: 18,
    letterSpacing: 1,
  },

});

export default styles;
