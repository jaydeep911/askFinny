import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import {Surface} from 'react-native-paper';

import {ProgressBar} from 'react-native-paper';
import AppColors from '../constants/AppColors';

// import { ScrollView } from "react-native-gesture-handler";

const LearnScreen = ({navigation}) => {
  const dummyData = [
    {
      id: 1,
      color: '#5E54C2',
      title: 'Finny Gauge',
      subTitle: 'Budgeting & Savings',
      progress: 10,
      image: require('../../assets/piggybank.png'),
    },
    {
      id: 1,
      color: '#FFD36C',
      title: 'Credit Card FUNdamentals',
      subTitle: 'Budgeting & Savings',
      progress: 30,
      image: require('../../assets/card.png'),
    },
    {
      id: 1,
      color: '#FF8762',
      title: 'Decoding DEBT Jargon (Part 1) ',
      subTitle: 'Budgeting & Savings',
      progress: 67,
      image: require('../../assets/coint.png'),
    },
    {
      id: 1,
      color: '#45C2BB',
      title: 'Decoding DEBT Jargon (Part 2)',
      subTitle: 'Budgeting & Savings',
      progress: 80,
      image: require('../../assets/coint.png'),
    },
  ];
  const renderItem = item => {
    return (
      <View style={{marginVertical: 10}}>
        <Surface style={styles.card}>
          <View style={{width: '100%'}}>
            <View style={styles.cardTopColor(item.color)} />
            <View style={{margin: 15}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 60, height: 60}}
                  source={item.image}
                  resizeMode="contain"
                />
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubTitle}>{item.subTitle}</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginHorizontal: 10,
                  }}>
                  <ProgressBar
                    style={{backgroundColor: '#F6F6FF', borderRadius: 5}}
                    progress={item.progress / 100}
                    color={item.color}
                  />
                </View>
                <Text style={styles.progressText}>{item.progress}%</Text>
              </View>
            </View>
          </View>
        </Surface>
      </View>
    );
  };

  const renderTopLevelView = () => {
    return (
      <View style={{marginVertical: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Surface
            style={{
              flex: 1,
              borderRadius: 8,
              elevation: 2,
              marginRight: 10,
              backgroundColor: 'white',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              paddingVertical: 15,
              // overflow: "hidden",
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginHorizontal: 12,
              }}>
              <Image
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  marginLeft: 5,
                }}
                resizeMode="center"
                source={require('../../assets/small_menu.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  fontWeight: '700',
                  color: 'black',
                }}>
                Level 2
              </Text>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 10,
                  marginLeft: 5,
                }}
                resizeMode="center"
                source={require('../../assets/down.png')}
              />
            </View>
          </Surface>

          <Surface
            style={{
              flex: 1,
              borderRadius: 8,
              elevation: 2,
              marginLeft: 10,
              backgroundColor: '#FF774C',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              paddingVertical: 15,

              // overflow: "hidden",
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  marginLeft: 5,
                }}
                source={require('../../assets/lesson_icon.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'white',
                  //fontFamily: AppString.FONT_B,
                }}>
                Lessons Menu
              </Text>
            </View>
          </Surface>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.backgroundView}>
      <SafeAreaView />
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={{}}
        style={{backgroundColor: AppColors.appBackgroundColor}}>
        <View style={styles.backgroundView}>
          <View style={{margin: 20}}>
            {renderTopLevelView()}
            {dummyData.map(item => {
              return renderItem(item);
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: AppColors.appBackgroundColor,
  },
  card: {
    width: '100%',
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.titleColor,
  },

  cardTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  cardTopColor: color => ({
    width: '100%',
    backgroundColor: color,
    height: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }),
  cardSubTitle: {
    fontSize: 12,
    marginTop: 6,
    color: AppColors.subTitleColor,
  },
  progressText: {fontSize: 14, fontWeight: '600', color: AppColors.titleColor},
});
export default LearnScreen;
