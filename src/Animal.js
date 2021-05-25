import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Linking } from 'react-native';

class Animal extends React.Component {
  dataSource;
  link;
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
    const { link } = props.route.params;
    this.link = link;
  }
  componentDidMount(){
    fetch(this.link).then(res => res.json()).then(res => {
      this.dataSource = res;
      this.setState({isLoading: false})
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading && <ActivityIndicator color={"#000"} />}
        {!this.state.isLoading && 
          <View>
            <View style={styles.displayFlex}>
              <View style={styles.sideInfo}>
                <Text style={styles.title}>{this.dataSource.name}</Text>
                <View style={styles.row}>
                  <Text style={styles.row_title}>Type: </Text>
                  <Text style={styles.row_info}>{this.dataSource.type}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.row_title}>Class Type: </Text>
                  <Text style={styles.row_info}>{this.dataSource.classType}</Text>
                </View>
                <View style={{...styles.row, flexDirection: 'column', alignItems: 'flex-start'}}>
                  <Text style={styles.row_title}>Order Type: </Text>
                  <Text style={styles.row_info}>{this.dataSource.orderType}</Text>
                </View>
                <View style={{...styles.row, flexDirection: 'column', alignItems: 'flex-start'}}>
                  <Text style={styles.row_title}>Reference: </Text>
                  <Text style={{...styles.row_info, color: 'blue'}}
                        onPress={() => Linking.openURL(this.dataSource.reference)}>
                    {this.dataSource.reference}
                  </Text>
                </View>
              </View>
              <View style={styles.sideInfo}>
                <Image style={styles.img} source={{uri: this.dataSource.picture}} />
              </View>
            </View>
            <View>
              <Text style={styles.row_title}>Description: </Text>
              <Text>{this.dataSource.description}</Text>
            </View>
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 15
    },
    displayFlex: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    sideInfo: {
      width: '50%'
    },
    img: {
      width: 200,
      height: 200,
      marginTop: 40
    },
    title: {
      fontWeight: 'bold',
      fontSize: 36,
      marginBottom: 20
    },
    row:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center'
    },
    row_title: {
      fontWeight: 'bold',
      fontSize: 18
    },
    row_info: {
      fontSize: 16
    }
  });

export default Animal;