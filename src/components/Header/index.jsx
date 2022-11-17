import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.nav}>
                <View style={styles.nav1}>
                    <Image
                        source={require('../../assets/user.png')}
                        style={styles.foto}
                    />
                </View>
                <TouchableOpacity style={styles.nav2}>
                    <Image source={require('../../assets/eye.png')} style={styles.icones} />

                    <Image source={require('../../assets/help-circle.png')} style={styles.icones} />

                    <Image source={require('../../assets/mail.png')} style={styles.icones} />
                </TouchableOpacity>
            </View>
            <View style={styles.nome}>
                <Text style={styles.textoNome}>Olá, Fulano</Text>
            </View>
        </View>
    )
}