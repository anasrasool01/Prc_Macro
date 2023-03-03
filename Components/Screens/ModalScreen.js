import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ChangePasswordModal = ( {navigation}) => {
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
                        <Text style={styles.modalheadingText}>Change Password</Text>
                        <Text style={styles.modalsmallText}>CURRENT PASSWORD</Text>
                        <View style={styles.InputModal}>
                            <TextInput style={styles.TextInputModal} placeholder='Type Password..' />
                        </View>

                        <Text style={styles.modalsmallText}>NEW PASSWORD</Text>
                        <View style={styles.InputModal}>
                            <TextInput style={styles.TextInputModal} placeholder='Type Password..' />
                        </View>


                        <Text style={styles.modalsmallText}>REPEAT PASSWORD</Text>
                        <View style={styles.InputModal}>
                            <TextInput style={styles.TextInputModal} placeholder='Type Password..' />
                        </View>

                        <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.btnText}>Change Password</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ChangePasswordModal;

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
    InputModal: {
        marginTop: "5%",
        borderWidth: 1,
        borderRadius : 6,
        borderColor: '#F2F2F2',
        backgroundColor :'#F2F2F2',
    },
    btn: {
        marginTop: "25%",
        backgroundColor:"#F01716",
        width :"83%",
        height :"12%",
        borderRadius : 8,
        alignSelf : "center",
        },
    btnText : {
        color : "white",
        fontSize : 20,
        textAlign :"center",
        fontWeight : "700",
        marginTop :15,
    },
})
