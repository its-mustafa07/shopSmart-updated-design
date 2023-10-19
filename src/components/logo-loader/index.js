import React from "react";
import logoStyles from "./styles";
import {View,Text} from 'react-native'
const LogoLoader = () => {
    const styles = logoStyles()
    return ( 
        <View style={styles.MainWrapper}>
         <Text>hy sunny</Text>
        </View>
     );
}
 
export default LogoLoader;