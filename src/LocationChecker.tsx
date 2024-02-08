import { useEffect, useState } from "react";
import { BoundedCoords, hardingBandBuildingCoords, testCoords } from "./data";

const isPositionInBoundary = (currentPosition: GeolocationPosition, boundary: BoundedCoords) => {
  const { latitude, longitude } = currentPosition.coords;
  const { northLatitude, southLatitude, westLongitude, eastLongitude } = boundary.bounds;
  if (latitude <= northLatitude
    && latitude >= southLatitude
    && longitude >= westLongitude
    && longitude <= eastLongitude) {
    return true;
  }
  return false;
}

export const LocationChecker = () => {

  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const geolocation = navigator.geolocation;

  useEffect(() => {
    geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true, maximumAge: 30000,
      timeout: 27000,
    });
  }, []);

  const onSuccess = (position: GeolocationPosition) => {
    setLocation(position);
    console.log(position);
  }

  const onError = (error: GeolocationPositionError) => {
    console.log('Error getting location:', error);
  }


  if (!location) {
    return <p>Unknown location</p>
  }

  const { latitude, longitude } = location.coords;
  return <div>
    <p>Your location:</p>
    <p>{`(${latitude}, ${longitude})`}</p>
    <p>Are you at the Band Building? {isPositionInBoundary(location, hardingBandBuildingCoords) ? 'Yes' : 'No'}</p>
    <p>Are you at test location? {isPositionInBoundary(location, testCoords) ? 'Yes' : 'No'}</p>
  </div>
}