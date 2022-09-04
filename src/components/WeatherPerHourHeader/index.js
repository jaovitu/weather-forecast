import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function WeatherPerHourHeader() {
  const styles = StyleSheet.create({
    weatherPerHourHeaderContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    weatherPerHourTitle: {
      color: '#5c5a5a',
      fontSize: 16,
      fontWeight: '700',
    },

    nextDaysButton: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },

    nextDaysButtonText: {
      color: '#c4c4c4',
      fontSize: 16,
      fontWeight: '700',
    }
  });

  return (
    <View style={styles.weatherPerHourHeaderContainer} >
      <Text style={styles.weatherPerHourTitle} >Today</Text>

      <TouchableOpacity style={styles.nextDaysButton} >
        <Text style={styles.nextDaysButtonText} >Next 7 Days</Text>
        <MaterialIcons name="keyboard-arrow-right" size={22} color='#c4c4c4' />
      </TouchableOpacity>
    </View>
  );
}
