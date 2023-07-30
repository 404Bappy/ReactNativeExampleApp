import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Salseapproval() {
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.hrContainer}>
          <Text style={styles.title}>Salse Approvals</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 45,
              marginTop: 20,
              gap: 55,
              marginBottom: 30,
            }}>
            <View>
              <Image
                style={{width: 30, height: 30, color: '#fff'}}
                source={require('../Assets/star.png')}
                tintColor="gray"
              />
              <Text style={styles.text}>Order</Text>
            </View>
            <View>
              <Image
                style={{width: 30, height: 30, color: '#fff'}}
                source={require('../Assets/star.png')}
                tintColor="gray"
              />
              <Text style={styles.text}>Quot</Text>
            </View>

            <View>
              <Image
                style={{width: 30, height: 30, color: '#fff'}}
                source={require('../Assets/star.png')}
                tintColor="gray"
              />
              <Text style={styles.text}>Return</Text>
            </View>
            <View>
              <Image
                style={{width: 30, height: 30, color: '#fff'}}
                source={require('../Assets/star.png')}
                tintColor="gray"
              />
              <Text style={styles.text}>Collection</Text>
            </View>
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
