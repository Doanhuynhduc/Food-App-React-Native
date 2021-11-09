import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../const/color';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const ListFood = (data: any) => {
  const [food, setFood] = React.useState(data.data.item);
  console.log(food);
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
      <View
        style={{
          width: cardWidth,
          marginHorizontal: 10,
          marginBottom: 20,
          marginTop: 50,
          borderRadius: 15,
          elevation: 13,
          paddingBottom: 10,
          backgroundColor: COLORS.white,
        }}>
        <View style={{top: -40, alignItems: 'center'}}>
          <Image
            source={food.image}
            style={{width: 120, height: 120, resizeMode: 'cover'}}
          />
        </View>
        <View style={style.listItems}>
          <Text style={style.txtName}>{food.name}</Text>
          <Text style={style.txtCategories}>{food.ingredients}</Text>
        </View>
        <View style={style.bottomContain}>
          <Text style={style.txtPrice}>${food.price}</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <View style={style.addToCard}>
              <Text style={{color: COLORS.white, fontWeight: 'bold'}}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  bottomContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  listItems: {
    top: -10,
    marginHorizontal: 20,
  },
  addToCard: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtCategories: {
    color: COLORS.grey,
    fontSize: 14,
  },
  txtPrice: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListFood;
