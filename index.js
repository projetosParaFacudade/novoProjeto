import { Text, StyleSheet } from "react-native";

export default function AppName({ children }) {
    return (
      <>
        <Text style={style.appName}>
          {children}
          </Text>
      </>
        
    );    
}
const style = StyleSheet.create({
    appName:{
        color: 'green',
    },
})