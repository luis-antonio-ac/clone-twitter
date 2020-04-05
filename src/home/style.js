import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const widthScreen = Math.round(Dimensions.get('screen').width);
const widthTweetAvatar = 70;
const widthTweetContent = widthScreen - widthTweetAvatar;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d1d1',
        paddingBottom: 15,
    },

    headerIcon: {
        color: '#00bfff',
        backgroundColor: '#fff'
    },

    hamburguerIcon: {
        marginLeft: 15,
    },

    startIcon: {
        marginRight: 15,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: '#00bfff',
    },

    downButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
    },

    tweet: {
        flexDirection: 'row',
        height: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },

    tweetAvatar: {
        width: widthTweetAvatar,
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    avatarImg:  {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 10,
    },

    tweetContent: {
        width: widthTweetContent,
    },

    userInfo: {
        flexDirection: 'row',
        padding: 5,
    },

    nickName: {
        fontWeight: 'bold',
    },

    profileName: {
        color: '#8c8c8c',
    }, 

    tweetText: {
        padding: 5,
        paddingTop: 0,
    },

    tweetButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 290,
        padding: 5,
    },

    buttonIcon: {
        color: '#595959',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },

    retweet: {
        fontSize: 32,
    },

    share: {
        marginRight: 50,
    },
});