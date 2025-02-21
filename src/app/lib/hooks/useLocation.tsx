import { useEffect, useState } from "react";
import { State, City, UserLocation } from "../../../types/locations";

export default function useLocation() {
  const [states, setStates] = useState<State[]>();
  const [cities, setCities] = useState<City[]>();
  const [selectedState, setSelectedState] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);
  const statesUrl = "location/states";

  useEffect(() => {
    async function getStates() {
      setLoadingStates(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${statesUrl}`);
        const data: State[] = await response.json();
        setStates(data.toSorted((a, b) => a.nome.localeCompare(b.nome)));
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingStates(false);
      }
    }
    getStates();
  }, []);

  useEffect(() => {
    async function getCities(stateId: number) {
      setLoadingCities(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${statesUrl}/${stateId}/cities`);
        const data: City[] = await response.json();
        setCities(data.toSorted((a, b) => a.nome.localeCompare(b.nome)));
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingCities(false);
      }
    }

    if (selectedState) {
      getCities(selectedState);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedState && selectedCity) {
      const state = states?.find((state) => state.id === selectedState);
      const city = cities?.find((city) => city.id === selectedCity);
      if (state && city) {
        setLocation({ state, city });
      }
    } else {
      setLocation(null);
    }
  }, [selectedState, selectedCity, states, cities]);

  return {
    states,
    cities,
    loadingStates,
    loadingCities,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    location,
  };
}
