import React from 'react';
import {View, StyleSheet, Image, Pressable, SafeAreaView} from 'react-native';

const HeaderScreen = props => {
  return (
    <View>
      <SafeAreaView />
      <View style={styles.headerView}>
        <Pressable onPress={props.onPress}>
          <View style={styles.headerLeftView}>
            <Image
              style={styles.headerMenuIcon}
              source={require('../../assets/Menu.png')}
            />
          </View>
        </Pressable>
        <View style={styles.headerLogoView}>
          <Image
            style={styles.headerCenterLogo}
            source={require('../../assets/Finny.png')}
          />
        </View>

        <Pressable
          style={styles.headerProfileView}
          onPress={props.onRightPress ? props.onRightPress : null}>
          <Image
            style={styles.headerProfile}
            source={require('../../assets/userImage.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(45, 39, 102, 1)',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
  logo: {
    height: 25,
    width: 30,
  },

  headerLeftView: {
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    width: 38,
  },

  headerMenuIcon: {
    width: 18,
    height: 7,
  },
  headerLogoView: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenterLogo: {
    width: 65,
    height: 35,
  },
  headerProfile: {width: 38, height: 38},
  headerProfileView: {alignSelf: 'center', marginRight: 15},
});

export default HeaderScreen;
