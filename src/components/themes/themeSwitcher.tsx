import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext, lightPink, lightBlue, darkPink, darkBlue} from './theme';

const ThemeSwitcher = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={theme.gradient.colors}
      start={theme.gradient.start}
      end={theme.gradient.end}
      locations={theme.gradient.locations}
      style={{flex: 1}}>
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
    </LinearGradient>
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
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default ThemeSwitcher;
