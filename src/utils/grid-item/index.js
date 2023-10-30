import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  GridViewIcon,
  LeftIcon,
  NextIcon,
  PlusIcon,
  RightIcon,
} from '../../../assets/svg-icons/svgIcons';
import useStyle from './styles';
import {ThemeContext} from '../../components/themes/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
const GridItem = ({id, title}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyle();

  return (
    <SafeAreaView style={[styles.GridItem, theme.boxShadow]} key={id}>
      <View style={[styles.tagContainer, theme.boxShadow]}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'SourceSansPro-Regular',
            color: theme.text,
          }}>
          Home Stock
        </Text>
      </View>
      <View style={styles.gridImage}>
        <PlusIcon />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.catogary}>
          Added: {new Date().toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.counterNo}>
          <Text style={styles.counterText}>3</Text>
        </View>
        <TouchableOpacity>
          <LeftIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GridItem;
