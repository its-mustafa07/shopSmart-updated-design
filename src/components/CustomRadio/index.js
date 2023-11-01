import {React} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import RadioStyle from './style';
import CheckBox from 'react-native-check-box';
import {useContext, useState} from 'react';
import {ThemeContext} from '../themes/theme';

const Radio = ({onSelect, isSelected, label}) => {
  const {theme} = useContext(ThemeContext);
  const Styles = RadioStyle();
  const [isChecked, setIsChecked] = useState(false);
  return (
    // <View style={Styles.MainWrapper}>
    //   <Text style={Styles.TextWrapper}>Theme Color</Text>

    //   <View style={Styles.MainRadiobox}>
    //     <View style={Styles.Radiobox}>
    //       <Text>HY</Text>
    //     </View>
    //     <View style={Styles.Radiobox}>
    //       <Text>HY</Text>
    //     </View>
    //     <View style={Styles.Radiobox}>
    //       <Text>HY</Text>
    //     </View>
    //     <View style={Styles.Radiobox}>
    //       <Text>HY</Text>
    //     </View>
    //   </View>
    //   <View>
    //     <CheckBox
    //       isChecked={isChecked}
    //       onClick={() => setIsChecked(!isChecked)}
    //       checkBoxWidth="50"
    //     />
    //   </View>
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}
      onPress={onSelect}>
      <View
        style={{
          width: 34,
          height: 34,
          borderRadius: 18,
          borderWidth: 2,
          marginRight: 10,
          borderColor: isSelected ? '' : 'rgba(7, 7, 7, 0.20)',
          backgroundColor: isSelected ? 'rgba(7, 7, 7, 0.20)' : 'transparent',
        }}
      />
      <Text style={{color: theme.textPrimary}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Radio;
