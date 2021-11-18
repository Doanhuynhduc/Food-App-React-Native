import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import COLORS from '../const/color';
const {width} = Dimensions.get('screen');

const CartItem = ({data}: {data: any}) => {
  const [food, setFood] = React.useState(data.item);
  const [count, setCount] = React.useState(0);
  console.log(food);
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 15,
            elevation: 13,
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: COLORS.white,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={food.image}
                style={{width: 80, height: 80, resizeMode: 'cover'}}
              />
            </View>
            <View style={style.listItems}>
              <Text>Xin chao thien </Text>
              <Text style={style.txtName}>{food.name}</Text>
              <Text style={style.txtCategories}>{food.ingredients}</Text>
              <Text style={style.txtPrice}>${food.price}</Text>
            </View>
          </View>
          <View style={style.bottomContain}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}> {count} </Text>
            <View style={style.addToCard}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <Text style={{color: COLORS.white, fontWeight: 'bold'}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
  bottomContain: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  listItems: {
    marginHorizontal: 20,
  },
  addToCard: {
    height: 30,
    width: 80,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
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

export default CartItem;
