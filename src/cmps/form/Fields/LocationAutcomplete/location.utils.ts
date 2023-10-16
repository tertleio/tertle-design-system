import type { LocationType } from './LocationAutocomplete';

// TODO: google places API response types

function parseCountryCode(addresses: any[]) {
  for (let i = 0; i < addresses.length; i++) {
    if (addresses[i].types.includes('country')) {
      const code = addresses[i].short_name;
      return code;
    }
  }
  return `Could not find country code/'short_name' in Google API response`;
}

function parsePlace(place: any): Omit<LocationType, 'cityCountry'> {
  const { address_components, geometry } = place;
  const { lat, lng } = geometry.location;

  return {
    countryCode: parseCountryCode(address_components),
    latLng: `${lat()},${lng()}`,
  };
}

export { parsePlace };
