import React, { useState } from 'react';
import { View, Text,StyleSheet, Image,ScrollView, Pressable } from 'react-native'

const PrivacyPolicyScreen = ({navigation}) => {

    return (
        <ScrollView>
            <View>

                <View style={styles.start}>
                    <Pressable>
                        <Image source={require("../Assets/Images/BackArrowICon.png")} />
                    </Pressable>

                    <View style={styles.via}>
                        <Text style={styles.font}>Privacy Policy</Text>
                    </View>

                    </View>


                    <View style={styles.para}>
                        <Text style={styles.parafont}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque, nemo esse provident aperiam odit in quaerat odio, unde natus est, sapiente veniam. Et molestiae sed earum nisi minus amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque, nemo esse provident aperiam odit in quaerat odio, unde natus est, sapiente veniam. Et molestiae sed earum nisi minus amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque, nemo esse provident aperiam odit in quaerat odio, unde natus est, sapiente veniam. Et molestiae sed earum nisi minus amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque, nemo esse provident aperiam odit in quaerat odio, unde natus est, sapiente veniam. Et molestiae sed earum nisi minus amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque, nemo esse provident aperiam odit in quaerat odio, unde natus est, sapiente veniam. Et molestiae sed earum nisi minus amet?</Text>
                    </View>

            </View>
        </ScrollView>
    )
}
export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
    start: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "black",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        width: "100%",
        padding: 20,
    },

    via: {
        marginLeft: "20%",
    },
    font: {
        alignContent: "center",
        fontSize: 20,
        color: "white",
    },
    para : {
        marginVertical : "10%",
        marginHorizontal : "10%",
    },
    parafont :{
        textAlign :"center",
        fontSize : 18,
        fontWeight :"500",

    },
})