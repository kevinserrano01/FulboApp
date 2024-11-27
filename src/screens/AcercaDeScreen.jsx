import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native'
import { colors } from '../global/colors';
import packagejson from '../../package.json'
import Header from '../components/Header';

const AcercaDeScreen = ({navigation}) => {
  return (
    <View style={styles.containerPadre}>
      <Header subtitle="Acerca de" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}> {packagejson.name} </Text>
        <Text style={styles.version}>Version {packagejson.version} </Text>
        <Text style={styles.desarrollador}>Desarrollada por:</Text>
        <Text style={styles.nombre}>Kevin D. Serrano</Text>
        <Text style={styles.para}>Para:</Text>
        <Text style={styles.texto}>Todos los salteños</Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:kevinserrano010@gmail.com')}>
            <View style={styles.contactItem}>
              <Image source={require('../../assets/icons/gmailIcon.png')} style={styles.icon} />
              <Text style={styles.contactText}>kevinserrano010@gmail.com</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/kevinserranook/profilecard/?igsh=MWt5Z3VvM2ZuODg5Ng==')}>
            <View style={styles.contactItem}>
              <Image source={require('../../assets/icons/instagramIcon.png')} style={styles.icon} />
              <Text style={styles.contactText}>fulbo.salta</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  )
}

export default AcercaDeScreen

const styles = StyleSheet.create({
  containerPadre: {
    flex: 1,
    backgroundColor: colors.verdeOscuro,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.verdeOscuro,
    padding: 20,
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: colors.Blanco,
    marginBottom: 20,
  },
  version: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.Blanco,
    marginBottom: 30,
  },
  desarrollador: {
    fontSize: 18,
    color: colors.Blanco,
    marginBottom: 5,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.Blanco,
    marginBottom: 30,
  },
  para: {
    fontSize: 18,
    color: colors.Blanco,
    marginBottom: 5,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.Blanco,
    marginBottom: 20,
  },
  contactContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  contactText: {
    fontSize: 18,
    color: colors.Blanco,
    marginLeft: 10,
  },
})