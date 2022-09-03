import { StyleSheet, View } from "react-native";

import TopBar from "../components/TopBar/index";
import GlobalContainer from '../components/GlobalContainer/index';
import HeaderTitle from '../components/HeaderTitle/index';
import MainWeatherBox from "../components/MainWeatherBox/index";

export default function Home() {

  const styles = StyleSheet.create({
    header: {
      marginTop: 40
    }
  });

    return (
      <GlobalContainer isHomePage >
        <TopBar />

        <View style={styles.header} >
          <HeaderTitle city='São Paulo' country='Brasil' isHomePage />
        </View>

        <MainWeatherBox />
      </GlobalContainer>
    );
}
