import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Approval() {
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.hrContainer}>
          <Text style={styles.title}>HR Approvals</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 45,
              marginTop: 20,
              gap: 55,
            }}>
            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/train.png')}
              tintColor="gray"
            />

            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/car.png')}
              tintColor="gray"
            />
            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/map-and-location.png')}
              tintColor="gray"
            />
            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/walk.png')}
              tintColor="gray"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 45,
              marginTop: 40,
              marginBottom: 30,
              gap: 55,
            }}>
            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/contact-book.png')}
              tintColor="gray"
            />

            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/checklist.png')}
              tintColor="gray"
            />
            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/money.png')}
              tintColor="gray"
            />
            <Image
              style={{width: 30, height: 30, color: '#fff'}}
              source={require('../Assets/loan.png')}
              tintColor="gray"
            />
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingTop: 20,
  },
  hrContainer: {
    backgroundColor: '#fff',
  },
});
