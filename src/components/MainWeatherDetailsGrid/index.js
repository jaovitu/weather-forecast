import { StyleSheet, View } from "react-native";

import MainWeatherDetailsCard from "../MainWeatherDetailsCard/index";

export default function MainWeatherDetailsGrid() {

  const styles = StyleSheet.create({
    mainWeatherDetailsGridContainer: {
      display: 'flex',
      flexDirection: 'row',
    },

    leftColumn: {
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderRightWidth: 2,
      borderTopWidth: 2,
      width: '50%'
    },

    rightColumn: {
      borderTopColor: 'rgba(255, 255, 255, 0.5)',
      borderTopWidth: 2,
      width: '50%',
    },

    topCell: {
      alignItems: 'center',
      borderBottomColor: 'rgba(255, 255, 255, 0.5)',
      borderBottomWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      padding: 10,
    },

    bottomCell: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: 10,
    }
  });

  return (
    <View style={styles.mainWeatherDetailsGridContainer} >

      <View style={styles.leftColumn} >
        <View style={styles.topCell} >
          <MainWeatherDetailsCard iconName='wind' title='wind' value='19.2km/j' />
        </View>

        <View style={styles.bottomCell} >
          <MainWeatherDetailsCard iconName='sun' title='index uv' value='2' />
        </View>
      </View>

      <View style={styles.rightColumn} >
        <View style={styles.topCell} >
          <MainWeatherDetailsCard iconName='thermometer' title='fells like' value='25°' />
        </View>

        <View style={styles.bottomCell} >
          <MainWeatherDetailsCard iconName='activity' title='pressure' value='1014 mbar' />
        </View>
      </View>

    </View>
  );
}
