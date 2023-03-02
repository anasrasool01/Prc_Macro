import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignIN from '../Screens/ScreenOne';
import ForgetPassword from '../Screens/ScreenTwo';
import NewsFeed from '../Screens/ScreenThree';
import FavouriteScreen from '../Screens/ScreenFour';
import PodCastScreen from '../Screens/ScreenFive';
import ClintCallsScreen from '../Screens/ScreenSix';
import NotificationScreen from '../Screens/ScreenSeven';
import SettingsScreen from '../Screens/ScreenEight';
import ProfileInformationScreen from '../Screens/ScreenNine';

const Routes = () => {
    return (
        <View >
            {/* <SignIN/> */}
            {/* <ForgetPassword /> */}
            {/* <NewsFeed /> */}
            {/* <FavouriteScreen/> */}
            {/* <PodCastScreen /> */}
            {/* <ClintCallsScreen /> */}
            {/* <NotificationScreen /> */}
            {/* <SettingsScreen /> */}
            <ProfileInformationScreen />

        </View>
    );
};

const styles = StyleSheet.create({
});

export default Routes;
