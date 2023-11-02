import {
  Dimensions,
  FlatList,
  Image,
  // SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {MlkitBarcodeView, BARCODE} from 'react-native-mlkit-barcode';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import ProfileHeader from '../../components/profile-header';
import CustomButton from '../../utils/button';
import {useStyles} from './style';
import CustomInput from '../../utils/custom-input';
import {useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import ListItem from '../../components/list-item';
import BackgroundGradient from '../../components/background-gradient';
import ObjectDetection from '../../components/object-detection';
import OptionsModal from '../../components/options-modal';
import ConfirmationModal from '../../components/confirmation-modal';

const ScanningPage = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();
  const [objectDeduction, setObjectDeduction] = useState(false);

  // Scanning states
  const [enableScanner, setEnableScanner] = useState(true);
  const [barcodeFormat, setBarcodeFormat] = useState(
    BARCODE.FORMAT_ALL_FORMATS,
  );
  const [scanResults, setScanResults] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  let isScanning = false;

  const requestCameraPermission = async () => {
    try {
      const status = await check(PERMISSIONS.ANDROID.CAMERA);

      if (status === RESULTS.DENIED) {
        const result = await request(PERMISSIONS.ANDROID.CAMERA);
        if (result === RESULTS.GRANTED) {
          setEnableScanner(true);
        } else {
          console.log('Camera permission denied.');
        }
      } else if (status === RESULTS.GRANTED) {
        setEnableScanner(true);
      }
    } catch (error) {
      console.log('Error requesting camera permission:', error);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const handleScanSuccess = data => {
    if (isScanning) return;
    isScanning = true;
    console.log('BarCode On Success:', data);
    setScanResults(prevScanResults => [...prevScanResults, data.code]);

    setTimeout(() => {
      isScanning = false;
    }, 500);
  };

  const hideAllModals = () => {
    setOptionsVisible(false);
    setConfirmationVisible(false);
  };

  const handleDeleteScannedItem = itemIndex => {
    const updatedScanResults = [...scanResults];
    updatedScanResults.splice(itemIndex, 1);
    setScanResults(updatedScanResults);
    hideAllModals();
  };

  const clearScanList = () => {
    setScanResults([]);
    confirmationVisible(false);
  };

  const renderItem = ({item, index, drag}) => (
    <View style={styles.itemContainer} key={index}>
      <ListItem
        // drag={drag}
        setOptionsVisible={setOptionsVisible}
        title={item}
        handleDeleteItem={() => this.handleDeleteScannedItem(index)}
      />
    </View>
  );

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
            {/* <Image
              source={require('../../../assets/images/QRCode.jpg')}
              style={styles.scanner}
            /> */}

            {enableScanner ? (
              <SafeAreaView style={styles.cameraView}>
                <MlkitBarcodeView
                  style={{
                    width: 500,
                    height: 500,
                  }}
                  enableScanner={enableScanner}
                  barcodeFormat={barcodeFormat}
                  onSuccess={handleScanSuccess}
                />
              </SafeAreaView>
            ) : (
              <View style={styles.permissionMessage}>
                <Text>Please grant camera permission to use the scanner.</Text>
                <TouchableOpacity
                  onPress={requestCameraPermission}
                  style={styles.permissionButton}>
                  <Text>Grant Permission</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.bottomContent}>
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
              <ScrollView style={{flex: 1}}>
                <FlatList
                  data={scanResults}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => `draggable-item-${index}`}
                  contentContainerStyle={{
                    alignItems: 'center',
                    gap: 15,
                    paddingTop: 50,
                    paddingBottom: 50,
                    // width: screenWidth,
                  }}
                />
                {/* <View style={styles.ScrollViewList}>
                  <ListItem title={'umer'} />
                  <ListItem title={'Faisal'} />
                </View> */}
                {/* <View style={styles.mainButton}>
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
                </View> */}
              </ScrollView>
              <OptionsModal
                isVisible={optionsVisible}
                isNotVisible={() => setOptionsVisible(false)}
                onBackDropPress={() => setConfirmationVisible(false)}
                confirmationVisible={() => setConfirmationVisible(true)}
              />
              <ConfirmationModal
                isVisible={confirmationVisible}
                isNotVisible={() => setConfirmationVisible(false)}
                handleDeleteItem={handleDeleteScannedItem}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default ScanningPage;
