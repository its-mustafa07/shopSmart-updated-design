import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {MlkitBarcodeView, BARCODE} from 'react-native-mlkit-barcode';

import ProfileHeader from '../../components/profile-header';
import CustomButton from '../../utils/button';
import {styles, useStyles} from './style';
import {HeaderQRScanIcon} from '../../../assets/svg-icons/svgIcons';
import CustomInput from '../../utils/custom-input';
import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import ListItem from '../../components/list-item';
import ErrorPage from '../error';
import BackgroundGradient from '../../components/background-gradient';
import {RESULTS} from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ObjectDetection from '../../components/object-detection';

const ScanningPage = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();
  const [objectDeduction, setObjectDeduction] = useState(false);

  const handleToggle = () => setObjectDeduction(false);

  return (
    <BackgroundGradient style={{flex: 1}}>
      <SafeAreaView style={styles.ScanningPageWrapper}>
        <ProfileHeader />
        <View>
          <Text style={styles.Heading}>Scanning Page</Text>
        </View>
        <View style={styles.tabButtons}>
          <CustomButton
            buttonStyle={[
              objectDeduction ? styles.conditionalButton : styles.button,
            ]}
            onPress={() => setObjectDeduction(false)}
            textStyle={[
              !objectDeduction ? styles.buttonTexts : styles.buttonText,
            ]}>
            QR Scan
          </CustomButton>
          <CustomButton
            buttonStyle={[
              !objectDeduction ? styles.conditionalButton : styles.button,
            ]}
            onPress={() => setObjectDeduction(true)}
            textStyle={[
              objectDeduction ? styles.buttonTexts : styles.buttonText,
            ]}>
            Object Detection
          </CustomButton>
        </View>
        {objectDeduction ? (
          <ObjectDetection />
        ) : (
          <>
            <Image
              source={require('../../../assets/images/QRCode.jpg')}
              style={styles.scanner}
            />

            <View style={styles.searchBox}>
              <CustomInput
                placeholder="Search items"
                style={[styles.input, theme.boxShadow]}
                placeholderTextColor={theme.text}
              />
              <CustomButton
                buttonStyle={[styles.addButton, theme.boxShadow]}
                textStyle={{color: theme.text}}>
                Add
              </CustomButton>
            </View>
            <ScrollView>
              <View style={styles.ScrollViewList}>
                {/* <ListItem title={'atta'} /> */}
                <ListItem title={'umer'} />
                <ListItem title={'Faisal'} />
                {/* <ListItem />
        <ListItem /> */}
              </View>
              <View style={styles.mainButton}>
                <CustomButton
                  textStyle={{color: theme.text}}
                  buttonStyle={[styles.editButton, theme.boxShadow]}>
                  Edit
                </CustomButton>
                <CustomButton
                  textStyle={{color: theme.white}}
                  buttonStyle={[styles.saveButton, theme.boxShadow]}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </CustomButton>
              </View>
            </ScrollView>
            {/* </ScrollView> */}
          </>
        )}
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default ScanningPage;
