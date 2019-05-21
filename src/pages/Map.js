import React, { Component }  from 'react';
import { StyleSheet, Text, View ,Image , TouchableOpacity,Button , Dimensions ,Platform} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Expo, {  AdMobBanner , Constants ,AdMobInterstitial,  PublisherBanner,  AdMobRewarded } from 'expo';
import MapView, { ProviderPropType, Marker, AnimatedRegion , Circle } from 'react-native-maps';



const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -6.364410;
const LONGITUDE = 106.980547;
const LATITUDE_DELTA = 0.012 * ( width / height );
const LONGITUDE_DELTA = 0.012 * ( width / height );
const RADIUS = 300;

import  Makanan  from '@warung/Makanan';
export default class Map extends Component<{}> {
constructor(props) {
   super(props);
   this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markersall: [
              {
                title: 'Ino',
                coordinate: {
                    latitude: -6.372395,
                    longitude: 106.990612
                  },
                id:'1',
                },
              {
                 title: 'Rita',
                 coordinate: {
                     latitude: -6.372065,
                     longitude: 106.991229
                },  
                id:'2',
              }
        ]
    };
  }

 

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

 componentDidMount() {
   Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);    
  navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          currentLatitude: null,
          currentLongitude: null,
        });
      }
    );
  }

markerPressed(){
    console.log("MarkerPressed Indri");
    // onPress={()=>{ window.alert('button pressed') }}
    //                         title={'Indri Destiani'}
}

 render() {
    return (
       <View style={styles.container}>
         <MapView style={styles.map}  region={this.state.region} customMapStyle={customStyle} >
            {
              this.state.markersall.map(
                markera => (
                    <Marker.Animated  key={markera.id} coordinate={markera.coordinate}  title={markera.title} />
                )
              )
            }
                          <Marker.Animated
                            ref={marker => { this.marker = marker; }}
                            coordinate={this.state.region}
                            onPress={this.markerPressed}
                            title={'Indri Destiani'}
                          />
                        <MapView.Circle
                                key = { (this.state.currentLongitude + this.state.currentLongitude).toString() }
                                center = { this.state.region }
                                radius = { RADIUS }
                                strokeWidth = { 1 }
                                strokeColor = { '#0043f7' }
                                fillColor = { 'rgba(238,255,22,0.7)' }
                              
                        />
         </MapView>      
      </View>
    );   
  }
}

Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
