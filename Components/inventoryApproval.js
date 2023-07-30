import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function InventoryApprovals() {
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.hrContainer}>
          <Text style={styles.title}>Inventory Approvals</Text>
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
              <Text style={styles.text}>
                Stock{'\n'}Adjust{'\n'}ment
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Image
                style={{width: 30, height: 30, color: '#fff'}}
                source={require('../Assets/star.png')}
                tintColor="gray"
              />
              <Text style={styles.text}>
                Item{'\n'}conve{'\n'}sion
              </Text>
            </View>

            <View>
              <Image
                style={{width: 30, height: 30, color: '#fff'}}
                source={require('../Assets/star.png')}
                tintColor="gray"
              />
              <Text style={styles.text}>requisition</Text>
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
