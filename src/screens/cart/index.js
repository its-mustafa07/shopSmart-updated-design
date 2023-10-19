import React from 'react';
import {FlatList, SafeAreaView, Text, ScrollView} from 'react-native';
import ProfileHeader from '../../components/profile-header';
import ListTitleBar from '../../components/list-title-bar';
import useStyles from './styles';
import BackgroundGradient from '../../components/background-gradient';
import ListView from '../../components/list-view';
import ListItem from '../../components/list-item';

const CartScreen = () => {
  const styles = useStyles();
  const numberOfItems = 20;

  const itemsArray = Array.from({length: numberOfItems}, (v, i) => i);
  return (
    <BackgroundGradient>
      <SafeAreaView style={{flex: 1}}>
        <ProfileHeader style={styles.cartHeader} />
        <Text style={styles.pageTitle}>Cart</Text>
        <ListTitleBar
          title="Items added to cart:"
          style={styles.cartTitleBar}
        />
        {/* <ListView>
          <ScrollView style={{flex: 1}}>
            {itemsArray.map(index => (
              <ListItem key={index} />
            ))}
          </ScrollView>
        </ListView> */}
        <FlatList
          contentContainerStyle={{
            rowGap: 20,
            paddingVertical: 20,
            paddingBottom: 10,
          }}
          data={itemsArray}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => <ListItem key={item} />}
        />
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default CartScreen;
