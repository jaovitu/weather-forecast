import { StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function MainWeatherDetailsCard({ iconName, title, value }) {

  const styles = StyleSheet.create({
    mainWeatherDetailsCard: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },

    textArea: {
      marginLeft: 15,
    },

    title: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 13,
      marginBottom: 5,
    },

    value: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 13,
    }
  });

  return (
    <View style={styles.mainWeatherDetailsCard} >
      <Feather name={iconName} size={24} color="#FFF" />

      <View style={styles.textArea} >
        <Text style={styles.title} >{`${title}`.toUpperCase()}</Text>
        <Text style={styles.value} >{value}</Text>
      </View>
    </View>
  );
}
