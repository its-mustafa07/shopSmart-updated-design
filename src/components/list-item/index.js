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

const ListItem = ({style, title, quantity, counter, tag}) => {
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
              <Text style={styles.itemTitle}>{title}</Text>
              {quantity && (
                <View style={[styles.quantityContainer, theme.boxShadow]}>
                  <Text style={styles.quantity}>
                    {Math.ceil(Math.random() * 20)}
                  </Text>
                </View>
              )}
            </View>
            <Text style={styles.itemDate}>
              Added: {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.counterAndIcon}>
          {counter && (
            <View style={styles.counter}>
              <TouchableOpacity>
                <UpIcon />
              </TouchableOpacity>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>{Math.random() * 10}</Text>
              </View>
              <TouchableOpacity>
                <DownIcon />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity>
            <ThreeDotsIcon />
          </TouchableOpacity>
        </View>
      </View>
      {tag && (
        <View style={styles.tagContainer}>
          <Text style={styles.tagTitle}>Home Stock</Text>
        </View>
      )}
    </View>
  );
};

export default ListItem;
