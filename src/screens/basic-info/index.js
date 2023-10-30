import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileEditIcon} from '../../../assets/svg-icons/svgIcons';

const BasicInfo = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Basic info</Text>
        <Image
          source={require('../../../assets/images/shopsmart-user-1.jpeg')}
          style={{height: 100, width: 100}}
        />
        <View>
          <Text>John Doe</Text>
          <ProfileEditIcon />
        </View>
        <Text>johndoe@gmail.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default BasicInfo;
