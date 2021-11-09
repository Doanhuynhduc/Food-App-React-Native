import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../const/color';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.topContain}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 17, color: COLORS.dark}}>Hello, </Text>
            <Text
              style={{fontSize: 17, fontWeight: 'bold', color: COLORS.dark}}>
              Huynh duc
            </Text>
          </View>
          <Text style={{color: COLORS.grey, fontSize: 17}}>
            What do you want today
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/person.png')}
            style={styles.person}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  person: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Home;
