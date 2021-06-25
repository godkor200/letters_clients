import { useEffect, useReducer, useRef, useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

interface State<T> {
  status: 'init' | 'fetching' | 'error' | 'fetched';
  reRending(): void;
  data?: T;
  error?: string;
}

interface Cache<T> {
  [url: string]: T;
}

type Action<T> =
  | { type: 'request' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; payload: string };

function useFetch<T = unknown>(
  url?: string,
  options?: AxiosRequestConfig
): State<T> {
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);
  const reRending = () => setRefresh(!refresh);
  const initialState: State<T> = {
    status: 'init',
    reRending: reRending,
    error: undefined,
    data: undefined,
  };
  const [refresh, setRefresh] = useState(false);
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'request':
        return { ...initialState, status: 'fetching' };
      case 'success':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'failure':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      dispatch({ type: 'request' });

      if (cache.current[url]) {
        dispatch({ type: 'success', payload: cache.current[url] });
      } else {
        try {
          const response = await axios(url, options);
          cache.current[url] = response.data;
          if (cancelRequest.current) return;
          dispatch({ type: 'success', payload: response.data });
        } catch (error: any) {
          if (cancelRequest.current) return;
          dispatch({ type: 'failure', payload: error.message });
        }
      }
    };

    fetchData();

    console.log('refresh', refresh);
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return state;
}

export { useFetch };
