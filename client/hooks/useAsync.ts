import {
  useReducer,
  useCallback,
  useRef,
  useLayoutEffect,
} from 'react';

interface AsyncState<Data> {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: Data | null;
  error: Error | null;
}

type AsyncAction<Data> =
  | { type: 'idle' }
  | { type: 'pending' }
  | { type: 'resolved'; data: Data }
  | { type: 'rejected'; error: Error };

interface AsyncActions<Data> {
  setData: (data: Data) => void;
  setError: (error: Error) => void;
  reset: () => void;
  run: (promise: Promise<Data>) => Promise<Data>;
}

function useSafeDispatch<Data>(
  dispatch: React.Dispatch<AsyncAction<Data>>,
) {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return useCallback(
    (action: AsyncAction<Data>) =>
      mounted.current ? dispatch(action) : void 0,
    [dispatch],
  );
}

const defaultInitialState = {
  status: 'idle',
  data: null,
  error: null,
};

function useAsync<Data>(
  initialState?: AsyncState<Data>,
): AsyncState<Data> & AsyncActions<Data> {
  const initialStateRef = useRef<AsyncState<Data>>(
    initialState || defaultInitialState,
  );
  const [{ status, data, error }, dispatch] = useReducer(
    (s: AsyncState<Data>, a: AsyncAction<Data>) => {
      switch (a.type) {
        case 'idle':
        case 'pending':
        case 'resolved':
        case 'rejected':
          return { ...s, ...a };
        default:
          return s;
      }
    },
    initialStateRef.current,
  );

  const safeSetState = useSafeDispatch(dispatch);

  const setData = useCallback(
    (data: Data) => safeSetState({ type: 'resolved', data }),
    [safeSetState],
  );

  const setError = useCallback(
    (error: Error) => safeSetState({ type: 'rejected', error }),
    [safeSetState],
  );

  const reset = useCallback(
    () => safeSetState({ type: 'idle' }),
    [safeSetState],
  );

  const run = useCallback(
    (promise: Promise<Data>) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        );
      }

      safeSetState({ type: 'pending' });

      return promise.then(
        (data) => {
          setData(data);
          return data;
        },
        (error) => {
          setError(error);
          return Promise.reject(error);
        },
      );
    },
    [safeSetState, setData, setError],
  );

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    reset,
    run,
    error,
    status,
    data,
  };
}

export { useAsync };
