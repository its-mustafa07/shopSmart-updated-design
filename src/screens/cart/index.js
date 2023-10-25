import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ProfileHeader from '../../components/profile-header';
import ListTitleBar from '../../components/list-title-bar';
import styles from './styles';
import BackgroundGradient from '../../components/background-gradient';
import ListView from '../../components/list-view';
import ListItem from '../../components/list-item';

const CartScreen = () => {
  const numberOfItems = 10;

  const itemsArray = Array.from({length: numberOfItems}, (v, i) => i);
  return (
    <BackgroundGradient>
      <SafeAreaView>
        <ProfileHeader style={styles.cartHeader} />
        <ListTitleBar
          title="Items added to cart:"
          style={styles.cartTitleBar}
        />
        <ListView>
          {/* <ScrollView style={{flex: 1}}> */}
          {itemsArray.map(index => (
            <ListItem key={index} />
          ))}
          {/* </ScrollView> */}
        </ListView>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default CartScreen;
