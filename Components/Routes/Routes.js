import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import SignIN from '../Screens/ScreenOne';
import ForgetPassword from '../Screens/ScreenTwo';
import NewsFeed from '../Screens/ScreenThree';
import FavouriteScreen from '../Screens/ScreenFour';
import PodCastScreen from '../Screens/ScreenFive';
import ClintCallsScreen from '../Screens/ScreenSix';
import NotificationScreen from '../Screens/ScreenSeven';
import SettingsScreen from '../Screens/ScreenEight';
import ProfileInformationScreen from '../Screens/ScreenNine';
import MyModal from '../Screens/ModalScreen';
import ChangePasswordModal from '../Screens/ModalScreen';
import FeedBackModal from '../Screens/FeedBackModal';
import TermsConditionsScreen from '../Screens/ScreenTen';
import PrivacyPolicyScreen from '../Screens/ScreenEleven';
import DeleteAccountModal from '../Screens/DeleteModal';

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIN" component={SignIN} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="NewsFeed" component={NewsFeed} />
                <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
                <Stack.Screen name="PodCastScreen" component={PodCastScreen} />
                <Stack.Screen name="ClintCallsScreen" component={ClintCallsScreen} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
                <Stack.Screen name="ProfileInformationScreen" component={ProfileInformationScreen} />
                <Stack.Screen name="ChangePasswordModal" component={ChangePasswordModal} />
                <Stack.Screen name="FeedBackModal" component={FeedBackModal} />
                <Stack.Screen name="TermsConditionsScreen" component={TermsConditionsScreen} />
                <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
                <Stack.Screen name="DeleteAccountModal" component={DeleteAccountModal} />
                <Stack.Screen name="MyModal" component={MyModal} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
});

export default Routes;