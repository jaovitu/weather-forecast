import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function WeatherPerHourCard({ isCurrentHour, hour, temperature, iconName }) {

  const styles = StyleSheet.create({
    weatherPerHourCard: {
      alignItems: 'center',
      backgroundColor: isCurrentHour ? '#477fff' : '#FFF',
      borderColor: 'rgba(128, 128, 128, 0.2)',
      borderRadius: 10,
      borderWidth: isCurrentHour ? 0 : 1,
      display: 'flex',
      marginRight: 10,
      padding: 8,
    },

    weatherHour: {
      color: isCurrentHour ? 'rgba(255, 255, 255, 0.8)' : 'rgba(128, 128, 128, 0.8)',
      fontSize: 13,
      fontWeight: '700',
    },

    weatherIcon: {
      color: isCurrentHour ? '#FFF' : '#477fff',
      marginBottom: 10,
      marginTop: 10,
    },

    nowFlag: {
      color: 'rgba(255, 255, 255, 0.9)',
      fontWeight: '700',
    },

    temperatureText: {
      color: 'rgba(128, 128, 128, 1)',
      fontWeight: '700',
    },
  });

  const bottomText = () => {
    return (
      (
        isCurrentHour
          ? <Text style={styles.nowFlag} >Now</Text>
          : <Text style={styles.temperatureText} >{`${temperature}°`}</Text>
      )
    );
  };

  return (
    <View style={styles.weatherPerHourCard} >
      <Text style={styles.weatherHour} >{hour}</Text>
      <FontAwesome5 name={iconName} size={20} style={styles.weatherIcon} />
      {bottomText()}
    </View>
  );
}
