export type Coords = {
  latitude: number;
  longitude: number;
}

export type CoordsBounds = {
  northLatitude: number,
  southLatitude: number,
  westLongitude: number,
  eastLongitude: number
}

export type BoundedCoords = {
  latitude: number;
  longitude: number;
  bounds: CoordsBounds;
}

export const hardingBandBuildingCoords: BoundedCoords = {
  latitude: 40.1045591,
  longitude: -88.2313316,
  bounds: {
    northLatitude: 40.105409,
    southLatitude: 40.104145,
    westLongitude: -88.2316462,
    eastLongitude: -88.2309761
  }
}

export const testCoords: BoundedCoords = {
  latitude: 40.115702337985184,
  longitude: -88.23018666335797,
  bounds: {
    northLatitude: 40.1158462,
    southLatitude: 40.115389,
    westLongitude: -88.230437,
    eastLongitude: -88.2304119
  }
}