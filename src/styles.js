import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(130,38,158)',
  },

// Header
  header: {
    height: '15%',
    padding: 10,
  },
  nav: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
  },
  nav1: {
    height: '100%',
    width: '60%',
    justifyContent: 'center'
  },
  nav2: {
    height: '100%',
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  foto: {
    borderRadius: 100,
    height: '100%',
    width: '25%',
  },
  icones: {
    width: '15%',
    height: '40%',
  },
  nome: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
  },
  textoNome:{
    fontSize: 20
  },

//Main 
  main:{
    flex: 1,
    backgroundColor: '#fff'
  },
  title:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0
  },
  detail:{
    padding: 20,
    paddingTop: 10
  },
  mainNav:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    padding: 20,
  },
  mainBotao:{
    borderRadius: 100,
    height: '100%',
    width: '22%',
    backgroundColor: 'gray',
    alignItems: 'center',
    padding:20,
    marginStart: 10
  },
  cardBotao:{
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 20
  },
  cardNovidade:{
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 20,
    marginEnd: 20,
    width: '40%'
  }
});
