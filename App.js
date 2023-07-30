import React from 'react';
import {ScrollView, View} from 'react-native';
import Approval from './Components/approval';
import Header from './Components/Headern';
import InventoryApprovals from './Components/inventoryApproval';
import Prockerment from './Components/prockerment';
import Salseapproval from './Components/salseapproval';

export default function app() {
  return (
    <ScrollView>
      <View>
        <Header />
        <Approval />
        <View>
          <Prockerment />
          <Salseapproval />
          <InventoryApprovals />
        </View>
      </View>
    </ScrollView>
  );
}
