import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppContext } from './AppContext';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Scanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasPermission: null,
            scanned: false
        }
    }

    initCam = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            this.setState({hasPermission: status === 'granted'})
        })();
    }
  
    handleBarCodeScanned = ({ type, data }) => {
        if (type === 'org.iso.QRCode'){
            this.setState({scanned: true})
            this.props.navigation.navigate('Animal Information', {link: data});
        }
    };
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Добро пожаловать в мобильный справочник Зоопарка</Text>
                {!this.state.hasPermission && <Button
                    title="Начать сканирование" onPress={this.initCam} />}
                {this.state.hasPermission && <BarCodeScanner
                    onBarCodeScanned={this.handleBarCodeScanned}
                    style={styles.camera_wrapper}
                />}
            </View>
        );
    }
}
Scanner.contextType = AppContext;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 50
    },
    camera_wrapper: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      top: 250,
      left: 20,
      right: 20
    },
    title: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center'
    }
  });