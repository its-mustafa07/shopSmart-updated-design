import { StyleSheet } from "react-native";
import { ThemeContext } from "../themes/theme";
import { useContext } from "react";

const logoStyles =()=>{
    const {theme} = useContext(ThemeContext)

    return StyleSheet.create({
        MainWrapper:{
            backgroundColor: theme.primary,
            flex: 1,
            alignItems: "center",
        }
    })
}

export default logoStyles;