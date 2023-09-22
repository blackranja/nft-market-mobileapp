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