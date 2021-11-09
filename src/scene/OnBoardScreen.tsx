import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PrimaryButton from '../component/PrimaryButton';
import COLORS from '../const/color';

const OnBoardScreens = ({navigation}: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={styles.topImages}>
          <Image
            style={styles.imgBanner}
            source={require('../assets/onboardImage.png')}
          />
        </View>
        <View style={styles.textCenter}>
          <Text style={styles.txtTop}>Delicious Food</Text>
          <Text style={styles.txtBottom}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.dotContain}>
          <View style={styles.dotActive}></View>
          <View style={styles.dotUnActive}></View>
          <View style={styles.dotUnActive}></View>
        </View>
        <PrimaryButton
          text="Get Stated"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topImages: {
    height: 350,
  },
  imgBanner: {
    width: '100%',
    resizeMode: 'contain',
    top: -180,
  },
  textCenter: {
    alignItems: 'center',
  },
  txtTop: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  txtBottom: {
    fontSize: 17,
    color: COLORS.grey,
    marginTop: 18,
    marginHorizontal: 100,
    textAlign: 'center',
    marginBottom: 30,
  },
  dotContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotActive: {
    width: 20,
    height: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  dotUnActive: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.grey,
    marginHorizontal: 2,
    borderRadius: 50,
  },
});

export default OnBoardScreens;
