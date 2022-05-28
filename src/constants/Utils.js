import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const leftDrawerData = [
  {
    id: 1,
    name: 'Learn',
    image: require('../../assets/Learn.png'),
  },
  {
    id: 2,
    name: 'Discuss',
    image: require('../../assets/Discuss.png'),
  },
  {
    id: 3,
    name: 'Community',
    image: require('../../assets/Community.png'),
  },
  {
    id: 4,
    name: 'Rewards',
    image: require('../../assets/Rewards.png'),
  },
  {
    id: 5,
    name: 'Achievements',
    image: require('../../assets/Achievements.png'),
  },
  {
    id: 6,
    name: 'Dashboard',
    image: require('../../assets/Dashboard.png'),
  },
  {
    id: 7,
    name: 'Employee data',
    image: require('../../assets/EmployeeData.png'),
  },
];

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function fontSizeScaleRemove(fontsize) {
  let fontscale = PixelRatio.getFontScale();
  let value = fontsize;
  if (fontscale) {
    value = fontsize / PixelRatio.getFontScale();
  }
  // console.log('Scale remove ' + value);
  return value;
}

export const consoleLog = logMsg => {
  console.log(logMsg);
};
