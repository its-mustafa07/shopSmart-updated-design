import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {BottomIcon, TopIcon} from '../../../assets/svg-icons/svgIcons';
import useStyle from './styles';
import {useContext} from 'react';
import {ThemeContext} from '../themes/theme';
import Collapsible from 'react-native-collapsible';

const FAQList = ({title, discription}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyle();
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);
  const toggleCollapse = () => {
    return setCollapsed(!collapsed);
  };
  return (
    <View style={styles.mainList}>
      <TouchableOpacity
        onPress={toggleCollapse}
        style={[styles.mainWrapper, theme.boxShadow]}>
        <Text
          style={[
            {color: collapsed ? theme.primary : theme.text},
            styles.FAQtext,
          ]}>
          {title}
        </Text>
        {collapsed ? <TopIcon /> : <BottomIcon />}
      </TouchableOpacity>

      <Collapsible collapsed={!collapsed}>
        <View style={styles.collapseContainer}>
          <Text style={[styles.FAQtext, {color: theme.textSecondary}]}>
            {discription}
          </Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default FAQList;
