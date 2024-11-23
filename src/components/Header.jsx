import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors';

const Header = ({subtitle}) => {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Fulbo</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 115,
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
    subtitle:{
      fontSize:18,
      fontWeight: 'bold',
      color:colors.Negro,
      marginTop: 10,
      marginBottom: 10,
    },
})