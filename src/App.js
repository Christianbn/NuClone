import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {styles} from './styles';

export default function App() {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <View style={styles.nav1}>
            <Image
              source={require('./assets/nubank.png')}
              style={styles.foto}
            />
          </View>
          <View style={styles.nav2}>
            <Image source={require('./assets/eye.png')} style={styles.icones} />
            <Image
              source={require('./assets/help-circle.png')}
              style={styles.icones}
            />
            <Image
              source={require('./assets/mail.png')}
              style={styles.icones}
            />
          </View>
        </View>
        <View style={styles.nome}>
          <Text style={styles.textoNome}>Olá, Fulano</Text>
        </View>
      </View>

      <ScrollView style={styles.main}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Conta</Text>
          <Image source={require('./assets/chevron-right.png')} />
        </View>
        <View style={styles.detail}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>R$ 1.356,98</Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.mainNav}>
            <TouchableOpacity style={styles.mainBotao}>
              <Text>Pix</Text>
              <Text>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mainBotao}>
              <Text>Pix</Text>
              <Text>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mainBotao}>
              <Text>Pix</Text>
              <Text>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mainBotao}>
              <Text>Pix</Text>
              <Text>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mainBotao}>
              <Text>Pix</Text>
              <Text>Pix</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{padding: 15}}>
          <TouchableOpacity style={styles.cardBotao}>
            <Image source={require('./assets/credit-card.png')} />
            <Text style={{fontSize: 15, fontWeight: 'bold', marginStart: 15}}>
              Meus cartões
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true}>
          <View style={{padding: 15, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.cardNovidade}>
              <Text style={{fontSize: 15}}>
                <Text style={{color: 'rgb(130,38,158)'}}>Novidade! </Text>
                Conheça a ferramenta de Controle de gastos do Nubank.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardNovidade}>
              <Text style={{fontSize: 15}}>
                Concorra a prêmios de até R$ 50mil com Nubank Vida.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
