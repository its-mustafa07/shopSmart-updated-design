import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  KeyIcon,
  PhoneIcon,
  PlusIcon,
  ProfileEditIcon,
  ProfileKeyIcon,
  ProfilePlusIcon,
} from '../../../assets/svg-icons/svgIcons';
import {useStyle} from './styles';
import BackgroundGradient from '../../components/background-gradient';

const BasicInfo = () => {
  const styles = useStyle();
  return (
    <BackgroundGradient style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Text style={styles.BasicInfoHeading}>Basic info</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/shopsmart-user-1.jpeg')}
              style={styles.profileImage}
            />

            <TouchableOpacity style={styles.PlusIconBox}>
              <ProfilePlusIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.NameBox}>
            <Text style={styles.profileName}>John Doe</Text>
            <TouchableOpacity>
              <ProfileEditIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileMail}>johndoe@gmail.com</Text>
          <View style={styles.ContactInfo}>
            <View style={styles.PasswordContainer}>
              <View style={styles.keyBox}>
                <ProfileKeyIcon />
              </View>

              <Text style={styles.contactText}>Change password</Text>
            </View>
            <View style={styles.phoneContainer}>
              <View style={styles.phoneBox}>
                <PhoneIcon />
              </View>
              <Text style={styles.contactText}>+92 301 0000000</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default BasicInfo;
