import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {styles} from './styles';

export default function App() {
  const handlePress = () => {};

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.nav}>
          <View style={styles.nav1}>
            <Image source={require('./assets/nubank.png')} style={styles.foto}/>
          </View>
          <View style={styles.nav2}>
            <Image source={require('./assets/eye.png')} style={styles.icones}/>
            <Image source={require('./assets/help-circle.png')} style={styles.icones}/>
            <Image source={require('./assets/mail.png')} style={styles.icones}/>
          </View>
        </View>
        <View style={styles.nome}>
          <Text style={styles.textoNome}>Olá, Fulano</Text>
        </View>
      </View>

      <ScrollView style={styles.main}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Conta</Text>
          <Image source={require('./assets/chevron-right.png')}/>
        </View>
        <View style={styles.detail}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>R$ 1.356,98</Text>
        </View>
      </ScrollView>

    </View>
  );
}
