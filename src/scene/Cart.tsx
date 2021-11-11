import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import CartItem from '../component/CartItem';
import Header from '../component/Header';
import PrimaryButton from '../component/PrimaryButton';
import COLORS from '../const/color';

const foods = [
  {
    id: '1',
    name: 'Meat Pizza',
    ingredients: 'Mixed Pizza',
    price: '8.30',
    image: require('../assets/meatPizza.png'),
  },
  {
    id: '2',
    name: 'Cheese Pizza',
    ingredients: 'Cheese Pizza',
    price: '7.10',
    image: require('../assets/cheesePizza.png'),
  },
  {
    id: '3',
    name: 'Chicken Burger',
    ingredients: 'Fried Chicken',
    price: '5.10',
    image: require('../assets/chickenBurger.png'),
  },
  {
    id: '4',
    name: 'Sushi Makizushi',
    ingredients: 'Salmon Meat',
    price: '9.55',
    image: require('../assets/sushiMakizushi.png'),
  },
  {
    id: '5',
    name: 'Sushi Makizushi',
    ingredients: 'Salmon Meat',
    price: '9.55',
    image: require('../assets/sushiMakizushi.png'),
  },
];

const Cart = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <Header name="cart" />
        <View
          style={{
            paddingVertical: 10,
            height: 430,
            backgroundColor: COLORS.white,
          }}>
          <FlatList
            data={foods}
            renderItem={item => <CartItem data={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingTop: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Total Price</Text>
            <Text style={{fontWeight: 'bold', fontSize: 23}}>$50</Text>
          </View>
          <PrimaryButton text="Add to cart" onPress={() => {}} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Cart;
