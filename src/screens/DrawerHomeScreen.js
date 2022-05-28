import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import HeaderScreen from '../components/Header';
import DiscussScreen from './DiscussScreen';
import CommunityScreen from './CommunityScreen';
import RewardsScreen from './RewardsScreen';
import AchievementScreen from './AchievementScreen';
import DashboardScreen from './DashboardScreen';
import EmployeeDataScreen from './EmployeeData';
import LearnScreen from './LearnScreen';
import AppColors from '../constants/AppColors';
import {leftDrawerData} from '../constants/Utils';

const DrawerHomeScreen = ({navigation}) => {
  const [selectedPosition, setSelectedPosition] = useState(1);
  const Drawer = createDrawerNavigator();
  const CustomDrawerContent = props => {
    const renderItem = item => {
      return (
        <View>
          <View
            style={{
              paddingHorizontal: 15,
              marginLeft: 15,
            }}>
            <Pressable
              style={styles.drawerItemView(selectedPosition, item.id)}
              onPress={() => {
                setSelectedPosition(item.id);
                if (item.id == 1) {
                  props.navigation.navigate('LearnScreen');
                } else if (item.id == 2) {
                  props.navigation.navigate('DiscussScreen');
                } else if (item.id == 3) {
                  props.navigation.navigate('CommunityScreen');
                } else if (item.id == 4) {
                  props.navigation.navigate('RewardsScreen');
                } else if (item.id == 5) {
                  props.navigation.navigate('AchievementScreen');
                } else if (item.id == 6) {
                  props.navigation.navigate('DashboardScreen');
                } else if (item.id == 7) {
                  props.navigation.navigate('EmployeeData');
                }
              }}>
              <Image style={styles.drawerIcon} source={item.image} />
              <Text style={styles.drawerItemText(selectedPosition, item.id)}>
                {item.name}
              </Text>
            </Pressable>
          </View>
        </View>
      );
    };
    return (
      <DrawerContentScrollView
        {...props}
        style={{
          backgroundColor: AppColors.appColor,
        }}
        contentContainerStyle={{flexGrow: 1, paddingTop: 0}}>
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            flexGrow: 1,
            paddingTop: 30,
          }}>
          {leftDrawerData.map(drawerItem => {
            return renderItem(drawerItem);
          })}
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <View style={styles.backgroundView}>
      <HeaderScreen
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
        onRightPress={() => {
          alert('Profile screen');
        }}
      />
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="LearnScreen"
          component={LearnScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="DiscussScreen"
          component={DiscussScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="RewardsScreen"
          component={RewardsScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="AchievementScreen"
          component={AchievementScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="EmployeeData"
          component={EmployeeDataScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: AppColors.appColor,
  },
  drawerIcon: {width: 24, height: 24, marginLeft: 5},

  drawerItemView: (selectPos, itemId) => ({
    flexDirection: 'row',
    flex: 1,
    height: 65,
    borderRadius: 10,
    backgroundColor: itemId == selectPos ? AppColors.drawerSelectd : '',
    borderBottomWidth: itemId == selectPos || itemId == selectPos - 1 ? 0 : 1,
    borderBottomColor: AppColors.drawerDivider,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  drawerItemText: (selectPos, itemId) => ({
    flex: 1,
    marginLeft: 3,
    fontSize: 16,
    color:
      itemId == selectPos ? AppColors.drawerSelectedText : AppColors.drawerText,
    marginLeft: 10,
    alignSelf: 'center',
  }),
});

export default DrawerHomeScreen;
