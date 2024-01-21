import React, { useEffect, useState } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}
const MapContainer = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Location permission denied');
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setRegion((prevRegion) => ({
          ...prevRegion,
          latitude,
          longitude,
        }));
      } catch (error: any) {
        console.error('Error getting current location:', error.message);
      }
    };

    console.log('Component mounted. Fetching current location...');
    getCurrentLocation();

    const locationSubscription: any = Location.watchPositionAsync(
      { accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 1 },
      (newLocation) => {
        const { latitude, longitude } = newLocation.coords;
        setRegion((prevRegion) => ({
          ...prevRegion,
          latitude,
          longitude,
        }));
      }
    );

    // Cleanup function to stop watching for location changes when the component unmounts
    return () => {
      locationSubscription.remove();
      Location.stopLocationUpdatesAsync('locationUpdates');
    };
  }, []); // Empty dependency array ensures this runs only once

  const handleRegionChangeComplete = (newRegion: React.SetStateAction<{ latitude: number; longitude: number; latitudeDelta: number; longitudeDelta: number; }>) => {
    setRegion(newRegion);
  };

  return (
    <View style={styles.root}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={true}
        followsUserLocation={true}
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title="Your Location"
          description="This is where you are!"
        />
      </MapView>
    </View>
  );
};
export default MapContainer;


const styles = StyleSheet.create({
  root: { flex: 1 },
  map: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    flex: 1,

  },
})