import {Text, View} from 'react-native';
import CustomButton from '../../utils/button';
import {useStyle} from './styles';
import BackgroundGradient from '../background-gradient';
import {useState} from 'react';

const Updates = () => {
  const styles = useStyle();
  const [updates, setUpdates] = useState(false);
  return (
    <BackgroundGradient style={{flex: 1}}>
      <View style={styles.Container}>
        <View>
          <Text style={styles.Heading}>Updates</Text>
          <View style={styles.TextContainer}>
            <Text style={styles.VersionHeading}>
              The latest version is already installed
            </Text>
            <Text style={styles.VersionPara}>
              No updates available for now please check back latter
            </Text>
            <Text style={styles.VersionPara}>Current version: 2.23.0</Text>
            {!updates ? (
              <Text
                style={styles.VersionPara}
                onPress={() => setUpdates(!updates)}>
                Available version: 3.23.0
              </Text>
            ) : (
              <>
                <Text
                  style={styles.VersionPara}
                  onPress={() => setUpdates(!updates)}>
                  Available version: 3.23.0
                </Text>
                <Text style={styles.VersionPara}>
                  New features added in this update:
                </Text>
                <View style={styles.updatesCon}>
                  <Text
                    style={[
                      styles.VersionPara,
                      {paddingLeft: 20, paddingTop: 10},
                    ]}>
                    {'\u2022  '}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page
                  </Text>

                  <Text
                    style={[
                      styles.VersionPara,
                      {paddingLeft: 20, paddingTop: 10},
                    ]}>
                    {'\u2022  '}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>

        <CustomButton buttonStyle={styles.Btn} textStyle={styles.BtnText}>
          Check for updates
        </CustomButton>
      </View>
    </BackgroundGradient>
  );
};
export default Updates;
