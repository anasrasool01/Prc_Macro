import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignIN from '../Screens/ScreenOne';
import ForgetPassword from '../Screens/ScreenTwo';
import NewsFeed from '../Screens/ScreenThree';
import FavouriteScreen from '../Screens/ScreenFour';
import PodCastScreen from '../Screens/ScreenFive';

const Routes = () => {
    return (
        <View >
            {/* <SignIN/> */}
            {/* <ForgetPassword /> */}
            {/* <NewsFeed /> */}
            {/* <FavouriteScreen/> */}
            <PodCastScreen />

        </View>
    );
};

const styles = StyleSheet.create({
});

export default Routes;
