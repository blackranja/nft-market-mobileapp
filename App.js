import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContatiner,DefaultTheme} from "@react-navigation/native";
import {useFonts} from 'expo-font';

const Stack=createStackNavigator();
const theme={
    ...DefaultTheme,
    colors:{
    ...DefaultTheme.colors,
    background:"transparent"
    }
}
const App=()=>{
    return(
        <NavigationContatiner>
            <createStackNavigator>
                <Stack.Screen/>
                <Stack.Screen/>
            </createStackNavigator>
        </NavigationContatiner>
    );
}

export default App;