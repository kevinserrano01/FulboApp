import { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, Pressable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { colors } from '../global/colors'
import CameraIcon from '../components/CameraIcon';
import { clearUser } from '../features/auth/authSlice';
import { usePutProfileImageMutation } from '../services/userService';
import { setProfileImage } from '../features/auth/authSlice';

const ProfileScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const user = useSelector(state=>state.authReducer.value.email);
    const image = useSelector(state=>state.authReducer.value.profileImage);
    const dispatch = useDispatch();
    const [triggerPutProfileImage, result] = usePutProfileImageMutation();
    const localId = useSelector(state => state.authReducer.value.localId)

    const verifyCameraPermissions = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
          alert('Se necesita permiso para acceder a la cámara');
          return false;
      }
      return true;
    };

    const pickImage = async () => {
      const hasPermission = await verifyCameraPermissions();
      if (!hasPermission) return;
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All, // All files
          allowsEditing: true, // Editar imagen
          aspect: [1, 1], // Aspect de la imagen
          base64: true, // Guardar la imagen en base64
          quality: 1, // Calidad de la imagen
      });

      if (!result.cancelled) {
          dispatch(setProfileImage(`data:image/jpeg;base64,${result.assets[0].base64}`)); // Guardar la imagen en el store
          triggerPutProfileImage({image: `data:image/jpeg;base64,${result.assets[0].base64}`, localId}); // Enviar la imagen al servidor
      }
  };

    const editProfileHandle = () => {
        console.log('Sugerencias');
    };

    const settingsHandle = () => {
      console.log('Donaciones');
    };

    const acercaDeHandle = () => {
      navigation.navigate('Acerca de');
    };

    const LogoutHandle = () => {
      dispatch(clearUser())
      console.log('Cerrando Sesión');
    };

  return (
    <View style={styles.profileContainer}>
        <View style={styles.imageProfileContainer}>
            {
                image
                    ?
                    <Pressable onPress={() => setModalVisible(true)}>
                            <Image source={{ uri: image }} resizeMode='cover' style={styles.profileImage} />
                    </Pressable>
                    :
                    <Text style={styles.textProfilePlaceHolder}>{user.charAt(0).toUpperCase()}</Text>
            }
            <Pressable onPress={pickImage} style={({ pressed }) => [{ opacity: pressed ? 0.90 : 1 }, styles.cameraIcon]} >
                <CameraIcon />
            </Pressable>
        </View>
        <Text style={styles.profileData}>Email: {user}</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={editProfileHandle}>
            <Text style={styles.buttonText}>Sugerencias</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={settingsHandle}>
            <Text style={styles.buttonText}>Donaciones</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={acercaDeHandle}>
            <Text style={styles.buttonText}>Acerca de</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={LogoutHandle}>
            <Text style={styles.buttonTextLogout}>Cerrar sesión</Text>
          </Pressable>
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
                  <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.closeButtonText}>X</Text>
                  </TouchableOpacity>
                  <Image source={{ uri: image }} style={styles.fullImage} />
              </View>
          </Modal>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  profileContainer: {
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5, // Para sombra en Android
    shadowColor: '#000', // Para sombra en iOS
    shadowOffset: { width: 0, height: 2 }, // Para sombra en iOS
    shadowOpacity: 0.25, // Para sombra en iOS
    shadowRadius: 3.84, // Para sombra en iOS
  },
  button: {
    backgroundColor: colors.Blanco,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.Negro,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageProfileContainer: {
      width: 128,
      height: 128,
      borderRadius: 128,
      backgroundColor: colors.Verde,
      justifyContent: 'center',
      alignItems: 'center'
  },
  textProfilePlaceHolder: {
      color: colors.Negro,
      fontSize: 48,
  },
  profileData: {
      paddingVertical: 16,
      fontSize: 16,
      fontWeight: 'bold',
  },
  cameraIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
  },
  profileImage: {
      width: 128,
      height: 128,
      borderRadius: 128
  },
  modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  fullImage: {
      width: '90%',
      height: '70%',
      resizeMode: 'contain',
  },
  closeButton: {
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 1,
  },
  closeButtonText: {
      fontSize: 30,
      color: '#FFF',
      fontWeight: 'bold'
  },
  buttonTextLogout: {
    color: colors.Rojo,
    fontSize: 18,
    fontWeight: 'bold',
  },
})