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

const GridItem = ({id, title, style, counter, tag, quantity}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyle();

  return (
    <SafeAreaView style={[styles.GridItem, theme.boxShadow, style]} key={id}>
      {tag && (
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
      )}
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
        {counter && (
          <TouchableOpacity>
            <RightIcon />
          </TouchableOpacity>
        )}
        {quantity && (
          <View style={styles.counterNo}>
            <Text style={styles.counterText}>3</Text>
          </View>
        )}
        {counter && (
          <TouchableOpacity>
            <LeftIcon />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default GridItem;
