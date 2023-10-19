import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {GridViewIcon, PlusIcon} from '../../../assets/svg-icons/svgIcons';
import useStyle from './styles';
const GridItem = ({id, imageURL, title, catogary}) => {
  const styles = useStyle();

  return (
    <TouchableOpacity style={styles.GridItem} key={id}>
      <View style={styles.gridImage}>
        <PlusIcon />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.catogary}>{catogary}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GridItem;
