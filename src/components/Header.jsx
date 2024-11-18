import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors';

const Header = () => {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Fulbo</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        paddingTop: 50,
        backgroundColor: colors.Verde,
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
    },
    title: {
        color: colors.Negro,
        fontWeight: 'bold',
        fontSize: 21
    },
    access: {
      alignSelf: 'flex-end',
      paddingRight: 16
    }
})