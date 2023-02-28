import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignIN from '../Screens/ScreenOne';
import ForgetPassword from '../Screens/ScreenTwo';
import NewsFeed from '../Screens/ScreenThree';

const Routes = () => {
    return (
        <View style={styles.container}>
            {/* <SignIN/> */}
            {/* <ForgetPassword /> */}
            <NewsFeed />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Routes;
