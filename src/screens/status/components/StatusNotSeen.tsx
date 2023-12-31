import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {IStatusData} from '../ShowStatus';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {IRootStackParamList} from '../../../types';
import getTimeFromNow from '../../../utils/getTimeFromNow';

interface IProps {
  item: IStatusData;
  handleSeenStatus: (userId: string) => void;
}
type NavigationPropType = NavigationProp<IRootStackParamList>;

const StatusNotSeen: FC<IProps> = ({item, handleSeenStatus}) => {
  const navigation = useNavigation<NavigationPropType>();

  const handleViewStatus = () => {
    handleSeenStatus(item.userId);
    navigation.navigate('ShowStatus', {
      userId: item.userId,
      photo: item.userPhoto,
      userName: item.userName,
    });
  };

  return (
    <TouchableOpacity onPress={handleViewStatus}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 1.8,
            borderColor: '#128C7E',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: item.contentType.includes('image')
                ? item.mediaLink
                : item.userPhoto,
            }}
            style={{
              width: '92%',
              height: '92%',
              borderRadius: 25,
              backgroundColor: '#ccc',
            }}
          />
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>
            {item.userName}
          </Text>
          <Text style={{fontSize: 12, color: '#aaa'}}>
            {getTimeFromNow(item.createdAt)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StatusNotSeen;

const styles = StyleSheet.create({});
