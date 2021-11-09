import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../const/color';

const PrimaryButton = ({text, onPress}: {text: any; onPress?: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContain}>
        <Text style={{color: COLORS.white, fontWeight: '500'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContain: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 80,
    marginVertical: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
});
export default PrimaryButton;
