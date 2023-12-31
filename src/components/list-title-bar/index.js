import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  GridViewIcon,
  ListViewIcon,
  SearchIcon,
} from '../../../assets/svg-icons/svgIcons';
import useStyles from './styles';

const ListTitleBar = ({title, style}) => {
  const styles = useStyles();
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <GridViewIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <ListViewIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListTitleBar;
