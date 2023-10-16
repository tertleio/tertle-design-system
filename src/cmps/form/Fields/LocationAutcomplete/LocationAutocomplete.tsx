import { clsx } from '@/utils/classes';
import { useEffect, useRef } from 'react';
import { parsePlace } from './location.utils';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

const { VITE_IS_PROD, VITE_GAPIK_DEV, VITE_GAPIK_PROD } = import.meta.env;
const GOOGLE_API_KEY = VITE_IS_PROD ? VITE_GAPIK_PROD : VITE_GAPIK_DEV;

import { Text } from '@/cmps/form/Fields';
import type { TextProps } from '@/cmps/form/Fields';
const locationsListStyle = `p-4 border-b border-gray-300 dark:border-gray-700 first:rounded-t-lg hover:text-black dark:hover:text-white last:rounded-b-xl last:border-none cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`;

type LocationType = {
  cityCountry: string;
  countryCode: string;
  latLng: string; // output: "lat,lng"
};

type LocationAutocompleteProps = TextProps & {
  isDirty: boolean | undefined;
  searchInput: false | LocationType['cityCountry'];
  searchDebounce?: number;
  setSelectedLocation: (values: LocationType) => void;
};

const LocationAutocomplete = (props: LocationAutocompleteProps) => {
  const didResetOnNewSearch = useRef(false);
  const {
    isDirty,
    searchInput = false,
    searchDebounce = 400,
    setSelectedLocation,
    ...restForTextCmp
  } = props;
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: GOOGLE_API_KEY,
    // debounce: 300, -- we're using our own debounce
    options: {
      types: ['(cities)'],
      // fields: ['...'] -- current needed fields are default from package, change if needed
    },
  });

  useEffect(() => {
    if (!searchInput || !isDirty || !setSelectedLocation) return;

    // reset on new search
    if (!didResetOnNewSearch.current) {
      setSelectedLocation({
        cityCountry: searchInput,
        countryCode: '',
        latLng: '',
      });
      didResetOnNewSearch.current = true;
    }

    // debounced search on user input
    const timeout = setTimeout(() => {
      getPlacePredictions({ input: searchInput });
    }, searchDebounce);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line -- getPlacePredictions is returning a new fn ref on every render so we need to leave it out as a dependency or memoize it
  }, [isDirty, searchInput, setSelectedLocation, searchDebounce]);

  async function handleSelectedLocation(placeId: string, description: string) {
    placesService.getDetails(
      {
        // get
        placeId,
        fields: ['address_components', 'geometry.location'],
      },
      (place: any) => {
        // parse & set
        const { countryCode, latLng } = parsePlace(place);
        setSelectedLocation({
          cityCountry: description,
          countryCode,
          latLng,
        });
        // reset
        getPlacePredictions({ input: '' });
        didResetOnNewSearch.current = false;
      }
    );
  }

  return (
    <span className="relative w-full">
      <Text
        className=":after:content-[attr(data-after)] :after:absolute :after:right-0 :after:top-0 :after:in"
        {...restForTextCmp}
      />
      <ul
        className={clsx(
          'absolute border border-gray-300 dark:border-gray-700 z-50 bot-0 left-0 bg-white dark:bg-black rounded-xl'
        )}
      >
        {isPlacePredictionsLoading ? (
          <div className={locationsListStyle}>🐢 Tertle getting city...</div>
        ) : (
          placePredictions?.map((place) => (
            <li
              key={place.place_id}
              tabIndex={0}
              className={locationsListStyle}
              onKeyDown={(e) =>
                e.key === 'Enter' &&
                handleSelectedLocation(place.place_id, place.description)
              }
              onClick={() =>
                handleSelectedLocation(place.place_id, place.description)
              }
            >
              {place.description}
            </li>
          ))
        )}
      </ul>
    </span>
  );
};

export {
  LocationAutocomplete,
  type LocationAutocompleteProps,
  type LocationType,
};
