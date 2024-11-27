import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, Button, Linking, Modal } from 'react-native'
import { colors } from '../global/colors';
import Header from '../components/Header';
import packagejson from '../../package.json'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

const DonacionesScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.containerPadre}>
      <Header subtitle="Donaciones" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}> {packagejson.name} </Text>
        <Text style={styles.subtitle}>¿POR QUÉ HICE ESTA APP?</Text>
        <Text style={styles.parrafo}>Cree esta app porque pienso que es una gran ayuda para poder agilizar la reserva de una cancha. Ver tranquilamente las canchas ocupadas sin preguntar al dueño y esperar que te respondan.</Text>
        <Text style={styles.parrafo}>Con tu contribucion podés ayudarme a mantener este proyecto para que siga disponible en la tienda </Text>
        <Text style={styles.parrafo}>Si te gusta lo que hago y quieres apoyarme, puedes invitarme un cafecito haciendo click en "Donar un cafecito"</Text>
        <View style={styles.buttomsContainer}>
            <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}> ¿QUE ES CAFECITO? </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => Linking.openURL('https://cafecito.app/fulbo_salta')}>
                <Text style={styles.buttonText}>DONAR UN CAFECITO</Text>
            </Pressable>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeButtonText}>
                <Icon name="close" size={40} color={colors.Negro}/>
              </Text>
            </Pressable>
            
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>¿Qué es Cafecito?</Text>
            <Text style={styles.modalText}>Cafecito es una plataforma que te permite apoyar a tus creadores favoritos con pequeñas donaciones, como si les estuvieras invitando un cafecito.</Text>
            <Text style={styles.modalText}>Es una forma de agradecerles por su trabajo y ayudarles a seguir creando proyectos de calidad.</Text>
            <View style={styles.cafecitoContainer}>
                <Image source={require('../../assets/icons/cafecito.jpeg')} style={styles.icon} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default DonacionesScreen

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
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.Blanco,
        marginBottom: 30,
    },
    parrafo: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.Blanco,
        marginBottom: 20,
        alignItems: 'center',
    },
    buttomsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.Blanco,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginVertical: 10,
        width: 300,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.verdeOscuro,
        fontSize: 15,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(211, 211, 211, 100)',
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.Blanco,
        borderRadius: 20,
        padding: 30,
    },
    closeButton: {
        position: 'absolute',
        top: 70,
        right: 20,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.Negro,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
    },
    cafecitoContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 5,
        borderRadius: 10,
    },
})