import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../global/colors';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('../../../assets/welcome.jpg')}
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)']}
            style={styles.gradient}
          >
            <Text style={styles.title}>Fulbo</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Iniciar sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </Pressable>
        <Pressable style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerButtonText}>¿No tienes una cuenta? Regístrate</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    height: '40%',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomLeftRadius: 45,
    // borderBottomRightRadius: 41,
    // overflow: 'hidden',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
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
  registerButton: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: colors.Negro,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
})