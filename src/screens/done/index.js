import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Path, Svg} from 'react-native-svg';
import CustomButton from '../../utils/button';
import {styles} from './styles';

const DoneComponent = () => {
  return (
    <LinearGradient
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      locations={[0, 0.5, 1]}
      colors={['#FFF', '#FFEDE2', '#FFF']}
      style={styles.mainDoneWrapper}>
      <View style={{marginBottom: -300, gap: 24}}>
        <View>
          <Svg
            width="87"
            height="73"
            viewBox="0 0 87 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M80.7538 37.6061L87 43.8442L57.8661 73L42.3846 57.5152L48.6308 51.277L57.8661 60.4794L80.7538 37.6061ZM31.2308 57.5152L44.6154 70.7879H0V61.9394C0 52.1618 15.9723 44.2424 35.6923 44.2424L44.1246 44.7291L31.2308 57.5152ZM35.6923 0C40.4254 0 44.9646 1.8645 48.3114 5.18332C51.6582 8.50215 53.5385 13.0034 53.5385 17.697C53.5385 22.3905 51.6582 26.8918 48.3114 30.2106C44.9646 33.5294 40.4254 35.3939 35.6923 35.3939C30.9592 35.3939 26.42 33.5294 23.0732 30.2106C19.7264 26.8918 17.8462 22.3905 17.8462 17.697C17.8462 13.0034 19.7264 8.50215 23.0732 5.18332C26.42 1.8645 30.9592 0 35.6923 0Z"
              fill="#FF8C71"
            />
            <Path
              d="M56.8074 61.542L57.8677 62.5985L58.9265 61.5404L80.7542 39.7264L84.8784 43.8453L57.8659 70.8782L44.5065 57.5159L48.632 53.3957L56.8074 61.542ZM30.1746 56.4501L29.1005 57.5152L30.1746 58.5803L40.9725 69.2879H1.5V61.9394C1.5 57.9311 4.81466 53.8933 11.1175 50.7682C17.3181 47.6938 25.987 45.7482 35.6493 45.7424L40.6797 46.0328L30.1746 56.4501ZM35.6923 1.5C40.0316 1.5 44.1907 3.20949 47.2552 6.24842C50.3194 9.28693 52.0385 13.4053 52.0385 17.697C52.0385 21.9886 50.3194 26.107 47.2552 29.1455C44.1907 32.1844 40.0316 33.8939 35.6923 33.8939C31.353 33.8939 27.1939 32.1844 24.1294 29.1455C21.0652 26.107 19.3462 21.9886 19.3462 17.697C19.3462 13.4053 21.0652 9.28693 24.1294 6.24842C27.1939 3.20949 31.353 1.5 35.6923 1.5Z"
              stroke="#000"
              stroke-opacity="1"
              stroke-width="12"
            />
          </Svg>
        </View>
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'SourceSansPro-SemiBold',
            color: '#0c0c0c',
          }}>
          Account created!
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'SourceSansPro-Regular',
            color: '#040325',
          }}>
          {' '}
          Your account has been created successfully.
        </Text>
        <CustomButton buttonStyle={styles.button}>Done</CustomButton>
      </View>
    </LinearGradient>
  );
};

export default DoneComponent;
