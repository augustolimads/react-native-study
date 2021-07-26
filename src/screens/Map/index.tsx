import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import auth from "src/config/auth.json";
import MapViewDirections from "react-native-maps-directions";

import { Container } from "src/components/Container";
import { Text } from "src/components/Text";
import { theme } from "src/theme";
import * as S from "./styles";
import { Spacer } from "src/components/Spacer";
import { Button } from "src/components/Button";

const precision = {
  latitudeDelta: 0.0922, //precisao 0.000922 seria mais perto
  longitudeDelta: 0.0421, //precisao
};

const initialPosition = {
  latitude: -8.28,
  longitude: -35.97,
  ...precision,
};

export function Map() {
  const ref = useRef();
  const mapEl = useRef(null); //direction red
  const [currentPos, setCurrentPos] = useState(initialPosition);
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  async function getCurrentPosition() {
    let location = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = location.coords;
    setCurrentPos({
      latitude,
      longitude,
      ...precision,
    });
  }

  async function verifyPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    getCurrentPosition();
  }

  function racePrice(distance: number): number {
    const factor = 2.85;
    const minValue = 3.52;
    const calc = distance * factor;
    return Number(calc < minValue ? minValue : calc.toFixed(2));
  }

  useFocusEffect(
    useCallback(() => {
      verifyPermission();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      ref.current?.setAddressText("");
    }, [])
  );

  useCallback(() => {
    getCurrentPosition();
  }, [currentPos]);

  return (
    <Container hasKeyboard>
      <S.Map
        initialRegion={{
          ...currentPos,
          ...precision,
        }}
        // zoomEnabled={false}
        loadingEnabled
        showsPointsOfInterest
        showsUserLocation
        showsMyLocationButton
        ref={mapEl}
      >
        {destination && (
          <MapViewDirections
            origin={currentPos}
            destination={destination}
            apikey={auth.googleAPI}
            strokeWidth={3}
            strokeColor={theme.colors.secondary30}
            onReady={(result) => {
              const distanceNumber = Number(result.distance) as number;
              setDistance(distanceNumber);
              setPrice(racePrice(distanceNumber));

              mapEl.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  top: 260,
                  bottom: 260,
                  left: 50,
                  right: 50,
                },
              });
            }}
          />
        )}

        <Marker
          pinColor={theme.colors.alert}
          coordinate={currentPos}
          title="Local Atual"
          description="Augusto está Online"
        />
        {destination && (
          <Marker
            pinColor={theme.colors.success}
            draggable
            coordinate={destination}
            onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
            title="Destino"
            description="txururu"
          />
        )}
      </S.Map>
      <S.SearchContainer>
        <GooglePlacesAutocomplete
          ref={ref}
          placeholder="Para onde vamos?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            if (details) {
              setDestination({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
            }
          }}
          query={{
            key: auth.googleAPI,
            language: "pt-br",
          }}
          fetchDetails
        />
      </S.SearchContainer>
      <S.Card>
        <Spacer flex={1} />
        <Text center color="highlight">
          Distance: {String(distance)}m
        </Text>
        <Button label={`Pay R$ ${price}`} />
      </S.Card>
    </Container>
  );
}
