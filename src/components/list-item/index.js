import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DownIcon,
  PlusIcon,
  ThreeDotsIcon,
  UpIcon,
} from '../../../assets/svg-icons/svgIcons';
import useStyles from './styles';
import {ThemeContext} from '../themes/theme';

<<<<<<< HEAD
const ListItem = ({item}) => {
=======
const ListItem = ({style, title}) => {
>>>>>>> f4f77d67288f410fb19468a178d21ce46c1f3134
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();

  return (
    <View style={[styles.mainContainer, theme.boxShadow, style]}>
      <View style={styles.contentContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.iconContainer}>
            <PlusIcon />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleWithQuantity}>
<<<<<<< HEAD
              <Text style={styles.itemTitle}>{item}</Text>
=======
              <Text style={styles.itemTitle}>{title}</Text>
>>>>>>> f4f77d67288f410fb19468a178d21ce46c1f3134
              <View style={[styles.quantityContainer, theme.boxShadow]}>
                <Text style={styles.quantity}>7</Text>
              </View>
            </View>
            <Text style={styles.itemDate}>
              Added: {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.counterAndIcon}>
          <View style={styles.counter}>
            <TouchableOpacity>
              <UpIcon />
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantity}>7</Text>
            </View>
            <TouchableOpacity>
              <DownIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <ThreeDotsIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tagContainer}>
        <Text style={styles.tagTitle}>Home Stock</Text>
      </View>
    </View>
  );
};

export default ListItem;
