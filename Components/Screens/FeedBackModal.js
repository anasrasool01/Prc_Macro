import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const FeedBackModal = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Text style={styles.modalheadingText}>FEEDBACK</Text>
                        <Text style={styles.modalsmallText}>EMAIL</Text>
                        <View style={styles.InputModal}>
                            <TextInput style={styles.TextInputModal} placeholder='Type email..' />
                        </View>

                        <Text style={styles.modalsmallText}>MESSAGE</Text>
                        <View style={styles.InputModal2}>
                            <TextInput style={styles.TextInputModal2} multiline={true} placeholder='Type here..' />
                        </View>

                        <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default FeedBackModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        width: "90%",
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalheadingText: {
        marginBottom: 25,
        color: '#4A5981',
        fontStyle: "normal",
        fontWeight: '700',
        fontSize: 25,
    },
    modalsmallText: {
        color: '#4A5981',
        fontWeight: "500",
        fontSize: 16,
        marginTop : "8%"
    },
    TextInputModal: {
        width: 310,
        fontSize: 17,
        marginLeft : "3%",
        fontWeight: '500',
    },
    TextInputModal2:{
        fontSize: 17,
        marginLeft : "3%",
        bottom : 70,
        fontWeight: '500',
        height : 200,
    },
    InputModal: {
        marginTop: "5%",
        borderWidth: 1,
        borderRadius : 6,
        borderColor: '#F2F2F2',
        backgroundColor :'#F2F2F2',
    },
    InputModal2:{
        marginTop: "5%",
        borderWidth: 1,
        borderRadius : 6,
        borderColor: '#F2F2F2',
        backgroundColor :'#F2F2F2',
    },
    btn: {
        marginTop: "15%",
        backgroundColor:"#F01716",
        width :"83%",
        height :"12%",
        borderRadius : 8,
        alignSelf : "center",
        },
    btnText : {
        color : "white",
        fontSize : 20,
        fontWeight : "700",
        textAlign :"center",
        marginTop :15,
    },
})
