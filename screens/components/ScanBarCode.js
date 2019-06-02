import React from 'react';
import { Vibration,StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

class ScanBarCode extends React.Component {

  state = {
     hasCameraPermission:null,
  }

  async componentWillMount() {
     const { status } = await Permissions.askAsync(Permissions.CAMERA);
     this.setState({hasCameraPermission:status==='granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
        return (
            <View style={styles.container}>
              <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{ height: 250, width: 350 }}
              />
            </View>
            );
      }
  }

  _handleBarCodeRead = ({ type, data }) => {
      Vibration.vibrate(100);
      this.props.navigation.navigate("ProductDetail", {productId: data});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScanBarCode
