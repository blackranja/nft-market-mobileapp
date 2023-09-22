import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContatiner,DefaultTheme} from "@react-navigation/native";
import {useFonts} from 'expo-font';
import Home from './screens/Home';
import Details from "./screens/Details";
const Stack=createStackNavigator();
const theme={
    ...DefaultTheme,
    colors:{
    ...DefaultTheme.colors,
    background:"transparent"
    }
}
const App=()=>{
    const [loaded]=useFonts({
            InterBold:require(
            "./assets/fonts/Inter-Bold.ttf"
            ),
            InterSemiBold:require(
                './assets/fonts/Inter-SemiBold.ttf'),
            InterMedium:require(
                "./assets/fonts/Inter-Medium.ttf"
            ),
            InterRegular:require(
                "./assets/fonts/Inter-Regular.ttf"
            ),
            InterBold:require(
                "./assets/fonts/Inter-Bold.ttf"
            ),


    })
    return(
        <NavigationContatiner theme={theme}>
            <createStackNavigator screenOptions={{headerShown:false}} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </createStackNavigator>
        </NavigationContatiner>
    );
}

export default App;