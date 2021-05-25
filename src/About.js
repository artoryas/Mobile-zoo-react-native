import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class About extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Mobile QR Scanning App for ZOO</Text>
                <Text style={{...styles.subtitle, fontStyle: 'normal'}}>
                    Made by
                </Text>
                <Text style={styles.subtitle}>
                    Yerniyaz Dossanov
                </Text>
                <Text style={styles.subtitle}>
                    Iliyas Altynbek
                </Text>
                <Text style={styles.subtitle}>
                    Sanzhar Zhakashbayev
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 30
    },
    subtitle: {
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    }
})
export default About;