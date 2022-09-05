import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import GlobalContainer from "../components/GlobalContainer";
import HeaderTitle from "../components/HeaderTitle";
import NextDaysWeatherCard from "../components/NextDaysWeatherCard";

export default function NextDays() {
  const styles = StyleSheet.create({
    header: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      position: 'relative',
    },

    headerIcon: {
      left: 0,
      position: 'absolute',
    },

    nextDaysTitleContainer: {
      marginTop: 50,
    },

    nextDaysTitle: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 18,
    },

    nextDaysWeatherContainer: {
      marginTop: 40,
    },
  });

  return (
    <GlobalContainer>
      <View style={styles.header} >
        <TouchableOpacity style={styles.headerIcon} >
          <MaterialIcons name="keyboard-arrow-left" size={24} color='rgba(255, 255, 255, 0.7)' />
        </TouchableOpacity>

        <HeaderTitle city='São Paulo' country='Brasil' />
      </View>

      <View style={styles.nextDaysTitleContainer} >
        <Text style={styles.nextDaysTitle} >Next 7 Days</Text>
      </View>

      <View style={styles.nextDaysWeatherContainer} >
        <NextDaysWeatherCard iconName='sun' weekDay='Monday' day={3} month='Oct' max={32} min={31} />
        <NextDaysWeatherCard iconName='cloud-rain' weekDay='Tuesday' day={4} month='Oct' max={23} min={22} />
        <NextDaysWeatherCard iconName='cloud-showers-heavy' weekDay='Wednesday' day={5} month='Oct' max={31} min={30} />
        <NextDaysWeatherCard iconName='sun' weekDay='Thursday' day={6} month='Oct' max={26} min={24} />
        <NextDaysWeatherCard iconName='cloud-sun' weekDay='Friday' day={7} month='Oct' max={27} min={26} />
        <NextDaysWeatherCard iconName='cloud-sun' weekDay='Saturday' day={8} month='Oct' max={28} min={27} />
        <NextDaysWeatherCard iconName='cloud-showers-heavy' weekDay='Sunday' day={9} month='Oct' max={23} min={22} />
      </View>

    </GlobalContainer>
  );
}
