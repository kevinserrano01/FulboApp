import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({subtitle, navigation}) => {

  return (
    <View style={styles.headerContainer}>
      <Pressable
        style={{position: 'absolute', left: 20, top: 60}}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={37} color={colors.Blanco} />
      </Pressable>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 120,
        alignItems: 'start',
        justifyContent: 'center',
    },
    subtitle:{
      fontSize:30,
      fontWeight: 'bold',
      color:colors.Blanco,
      marginTop: 60,
      marginBottom: 30,
      marginLeft: 70,
    },
})