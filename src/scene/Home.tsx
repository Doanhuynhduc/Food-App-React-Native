import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import COLORS from '../const/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListFood from '../component/ListFood';

const categories = [
  {id: '1', name: 'pizza', image: require('../assets/catergories/pizza.png')},
  {id: '2', name: 'Burger', image: require('../assets/catergories/burger.png')},
  {id: '3', name: 'Sushi', image: require('../assets/catergories/sushi.png')},
  {id: '4', name: 'Salad', image: require('../assets/catergories/salad.png')},
];

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
];

const Home = ({navigation}: any) => {
  const [indexCategories, setIndexCategories] = React.useState(0);
  const setSelectIndexCategories = (index: any) => {
    setIndexCategories(index);
  };
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
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories &&
            categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                  setSelectIndexCategories(index);
                  navigation.navigate('Cart');
                }}>
                <View
                  style={
                    indexCategories == index
                      ? styles.categories
                      : styles.categoriesSelected
                  }>
                  <View style={styles.imgcomtain}>
                    <Image style={styles.imgCategories} source={item.image} />
                  </View>
                  <Text style={styles.txtCate}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={foods}
          numColumns={2}
          renderItem={item => <ListFood data={item} navigation={''} />}
          keyExtractor={item => item.id}
        />
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
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginLeft: 15,
    paddingHorizontal: 10,
    borderRadius: 50,
    paddingVertical: 10,
    marginVertical: 10,
  },
  categoriesSelected: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginLeft: 15,
    paddingHorizontal: 10,
    borderRadius: 50,
    paddingVertical: 10,
    marginVertical: 10,
  },
  imgCategories: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  imgcomtain: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  txtCate: {
    color: COLORS.white,
    textTransform: 'capitalize',
    marginLeft: 10,
  },
});

export default Home;
