import { useQuery } from 'react-query';
import axios from '../axios';

export default function useAlert() {
  const { data, isLoading } = useQuery('/alert', () => axios.get('/device'));

  return { alert: data, isLoading };
};
