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
  latitude: 40.1045,
  longitude: -88.2313,
  bounds: {
    northLatitude: 40.105,
    southLatitude: 40.104,
    westLongitude: -88.2316,
    eastLongitude: -88.2310
  }
}

export const foellingerHallCoords: BoundedCoords = {
  latitude: 40.108,
  longitude: -88.222,
  bounds:
  {
    northLatitude: 40.109,
    southLatitude: 40.107,
    westLongitude: -88.223,
    eastLongitude: -88.221
  }
}

export const testCoords: BoundedCoords = {
  latitude: 40.1157,
  longitude: -88.2301,
  bounds: {
    northLatitude: 40.1160,
    southLatitude: 40.1153,
    westLongitude: -88.2304,
    eastLongitude: -88.2299
  }
}

export type Rehearsal = {
  dateTime: Date,
  location: BoundedCoords,
  isDressRehearsal?: boolean,
  isConcert?: boolean
}

export const rehearsals: Rehearsal[] = [
  {
    dateTime: new Date('2024-02-12T19:00:00.000-06:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-02-19T19:00:00.000-06:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-02-26T19:00:00.000-06:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-03-04T19:00:00.000-06:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-03-18T19:00:00.000-05:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-03-25T19:00:00.000-05:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-04-01T19:00:00.000-05:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-04-08T19:00:00.000-05:00'),
    location: hardingBandBuildingCoords
  },
  {
    dateTime: new Date('2024-04-15T19:00:00.000-05:00'),
    location: foellingerHallCoords,
    isDressRehearsal: true,
  },
  {
    dateTime: new Date('2024-04-21T19:00:00.000-05:00'),
    location: foellingerHallCoords,
    isConcert: true,
  },
  {
    dateTime: new Date('2024-04-29T19:00:00.000-05:00'),
    location: foellingerHallCoords,
  }
];
