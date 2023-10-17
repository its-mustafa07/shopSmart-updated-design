import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {MyListIcon} from '../../../assets/svg-icons/svgIcons';
import {ThemeContext} from '../themes/theme';

const HomeItem = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();
  return (
    <TouchableOpacity style={[styles.itemContainer, theme.boxShadow]}>
      <MyListIcon />
      <Text style={styles.itemText}>My List</Text>
    </TouchableOpacity>
  );
};

export default HomeItem;
