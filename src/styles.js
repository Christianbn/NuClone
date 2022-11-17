import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(130,38,158)',
  },
  //Main 
  main: {
    flex: 1,
    backgroundColor: '#d4d4d4'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0
  },
  detail: {
    padding: 20,
    paddingTop: 10
  },
  mainNav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  mainBotao: {
    borderRadius: 100,
    height: '100%',
    width: '22%',
    backgroundColor: '#edeef3',
    alignItems: 'center',
    padding: 20,
    marginStart: 10
  },
  cardBotao: {
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#edeef3',
    padding: 20,

  },
  cardNovidade: {
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#edeef3',
    padding: 20,
    marginEnd: 20,
    width: '40%'
  }
});
