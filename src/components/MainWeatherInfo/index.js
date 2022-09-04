import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function MainWeatherInfo({ iconName, weather, weekDay, day, month, temperature }) {

  const styles = StyleSheet.create({
    mainWeatherInfoContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 20,
    },

    weatherText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: '400',
      letterSpacing: 1,
      marginTop: 8
    },

    dateText: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 12,
      marginTop: 5
    },

    temperatureText: {
      color: '#FFF',
      fontSize: 65,
      fontWeight: '700',
      marginTop: 10,
    }
  });

  return (
    <View style={styles.mainWeatherInfoContainer} >
      <FontAwesome5 name={iconName} size={48} color="#FFF" />
      <Text style={styles.weatherText} >{weather}</Text>
      <Text style={styles.dateText} >{`${weekDay}, ${day} ${month}`}</Text>
      <Text style={styles.temperatureText} >{`${temperature}°`}</Text>
    </View>
  );
}
