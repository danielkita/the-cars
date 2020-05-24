import { Vehicle } from '../types/vehicle';

export const API_HOST = 'http://localhost:8080/api';

const api = <T>(url: string): Promise<T> =>
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });

export const fetchMakes = () => api<string[]>(`${API_HOST}/makes`);

export const fetchModels = ({ make }: { make: string }) => api<string[]>(`${API_HOST}/models?make=${make}`);

export const fetchVehicles = ({ make, model }: { make: string; model: string }) =>
  api<Vehicle[]>(`${API_HOST}/vehicles?make=${make}&model=${model}`);
