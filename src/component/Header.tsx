import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../const/color';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({name}: {name: string}) => {
  return (
    <View style={style.headerContain}>
      <View style={style.leftContain}>
        <Icon name="left" size={15} />
        <Text
          style={{
            textTransform: 'capitalize',
            fontSize: 18,
            marginLeft: 3,
            fontWeight: '800',
          }}>
          {name}
        </Text>
      </View>
      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  headerContain: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: COLORS.grey,
  },
  leftContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
