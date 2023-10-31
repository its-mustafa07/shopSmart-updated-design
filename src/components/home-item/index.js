import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {MyListIcon} from '../../../assets/svg-icons/svgIcons';
import {ThemeContext} from '../themes/theme';

const HomeItem = ({icon, heading, onPress}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, theme.boxShadow]}>
      {icon}
      <Text style={styles.itemText}>{heading}</Text>
    </TouchableOpacity>
  );
};

export default HomeItem;
