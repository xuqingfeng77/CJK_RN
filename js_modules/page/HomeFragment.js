/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageButton from '../component/ImageButtonWithText';
import Button from '../component/Button';
import px2dp from '../util/px2dp';
import Toast2Android from '../config/Toast2Android';
import theme from '../config/theme';
import PageComponent from './BackPageComponent';
import ViewPager from 'react-native-viewpager';
const BANNER_IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024'
];
//首页
export default class HomeFragment extends PageComponent {
    constructor(props){
        super(props);
        //
        var dataSource=new ViewPager.DataSource({
            pageHasChanged:(p1,p2)=>p1!=p2,
        });

        this.state = {
                    dataSource: dataSource.cloneWithPages(BANNER_IMGS)
                }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={{uri:data}}
                style={styles.page}/>
        );
    }

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.view2}>
                <ViewPager
                        style={{height:150}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}
                         />
                 </View>
                <View style={styles.editGroup}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    view2: {
        height:151,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    editGroup:{

        padding: px2dp(20)
    },
    page: {
            flex: 1,
            height: 150,
            resizeMode: 'stretch'
        }

});