import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ListView = ({children}) => {
  return <View style={styles.listViewContainer}>{children}</View>;
};

export default ListView;
