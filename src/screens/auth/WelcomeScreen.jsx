import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../global/colors';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/welcome.jpg')}
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0, 248, 80, 100)', 'rgba(0, 0, 0, 0.5)']}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a Fulbo 👋🏼</Text>
          <Text style={styles.paragraph}>
            Aplicación móvil para ver canchas de fútbol disponibles en Salta Capital y poder reservar un turno para disfrutar un lindo partido con tus amigos.
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Empezar</Text>
            </Pressable>
            <Pressable style={styles.guestButton}>
              <Text style={styles.guestButtonText}>Ingresar como invitado</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 210,
  },
  paragraph: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.Verde,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  guestButton: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    alignItems: 'center',
  },
  guestButtonText: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
})