import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function NextDaysWeatherCard({ iconName, weekDay, day, month, max, min }) {

  const styles = StyleSheet.create({
    nextDaysWeatherCardContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
    },

    leftBox: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },

    dateText: {
      alignItems: 'center',
      display: 'flex',
      fontSize: 15,
      justifyContent: 'center',
      marginLeft: 25,
    },

    weekDay: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: '500',
    },

    monthDay: {
      color: 'rgba(255, 255, 255, 0.4)',
    },

    rightBox: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
    },

    maxTemperature: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 16,
      fontWeight: '700',
    },

    minTemperature: {
      color: 'rgba(255, 255, 255, 0.4)',
      fontSize: 14,
    },
  });

  return (
    <View style={styles.nextDaysWeatherCardContainer} >
      <View style={styles.leftBox} >
        <FontAwesome5 name={iconName} size={22} color='#FFF' />
        <Text style={styles.dateText} >
          <Text style={styles.weekDay} >{`${weekDay}, `}</Text>
          <Text style={styles.monthDay} >{`${day} ${month}`}</Text>
        </Text>
      </View>

      <View style={styles.rightBox} >
        <Text style={styles.maxTemperature} >{max}</Text>
        <Text style={styles.minTemperature} >{` / ${min}°`}</Text>
      </View>
    </View>
  );
}
