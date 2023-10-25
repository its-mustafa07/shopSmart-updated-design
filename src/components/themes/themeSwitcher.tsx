import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ThemeContext, lightPink, lightBlue, darkPink, darkBlue} from './theme';
import BackgroundGradient from '../background-gradient';


import ReactNativeModal from 'react-native-modal';
import {ThemeTemporaryIcon} from '../../../assets/svg-icons/svgIcons';



const ThemeSwitcher = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [modalShown, setModalShown] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalShown(true)}
        style={{position: 'absolute', top: 500, left: 10}}>
        <ThemeTemporaryIcon />
      </TouchableOpacity>
      <ReactNativeModal
        onBackButtonPress={() => setModalShown(false)}
        isVisible={modalShown}
        onBackdropPress={() => setModalShown(false)}>
        <BackgroundGradient>
          <View style={{padding: 20}}>
            <Text style={{color: theme.textPrimary, marginBottom: 20}}>
              Choose a theme:
            </Text>
            <RadioButton
              label="Light Pink"
              isSelected={theme === lightPink}
              onSelect={() => setTheme(lightPink)}
            />
            <RadioButton
              label="Light Blue"
              isSelected={theme === lightBlue}
              onSelect={() => setTheme(lightBlue)}
            />
            <RadioButton
              label="Dark Pink"
              isSelected={theme === darkPink}
              onSelect={() => setTheme(darkPink)}
            />
            <RadioButton
              label="Dark Blue"
              isSelected={theme === darkBlue}
              onSelect={() => setTheme(darkBlue)}
            />
          </View>
        </BackgroundGradient>
      </ReactNativeModal>
    </View>
  );
};

const RadioButton = ({
  label,
  isSelected,
  onSelect,
}: {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}
      onPress={onSelect}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 2,
          marginRight: 10,
          borderColor: isSelected ? 'green' : 'grey',
          backgroundColor: isSelected ? 'green' : 'transparent',
        }}
      />
      <Text style={{color: theme.textPrimary}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ThemeSwitcher;
