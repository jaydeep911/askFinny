import React, {useEffect} from 'react';

import {StyleSheet, Image, View, StatusBar} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import AppColors from '../constants/AppColors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(AppColors.appColor, true);

    setTimeout(() => {
      navigation.replace('DrawerHomeScreen');
    }, 3000);
  }, []);

  let s = requestIdleCallback;
  return (
    <View style={styles.splashScreen}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../../assets/finny_main_logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.appColor,
  },
});

export default SplashScreen;
