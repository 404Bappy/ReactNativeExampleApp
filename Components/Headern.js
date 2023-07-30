import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.hComponent}>
        <View>
          <Text style={styles.title}>Approvals</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
          <Image
            style={{width: 30, height: 30, color: '#fff'}}
            source={require('../Assets/user.png')}
            tintColor="white"
          />

          <Image
            style={{width: 30, height: 30, color: '#fff'}}
            source={require('../Assets/bell.png')}
            tintColor="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 25,
    backgroundColor: '#2e8b57',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  hComponent: {
    flexDirection: 'row',
    gap: 170,
  },
});
