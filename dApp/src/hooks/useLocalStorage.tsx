import { useEffect, useState } from 'react';

interface Props {
  db: string;
  initialValue: any;
}
export const useLocalStorage = ({ db, initialValue = {} }: Props) => {
  const [state, setState] = useState({ [db]: initialValue });

  const read = (key: string) => {
    if (state[key]) {
      return state[key];
    }

    const data = localStorage.getItem(db);
    if (data) {
      return JSON.parse(data[key]);
    }
  };
  const write = (key: string, value: any) => {
    const nextData = { ...state, [key]: value };
    localStorage.setItem(db, JSON.stringify(nextData));
    setState({ [db]: nextData });
  };

  const initialize = () => {
    const data = read(db);
    if (data) {
      setState({ [db]: data });
      return;
    }

    write(db, JSON.stringify(initialValue));
  };

  useEffect(() => {
    initialize();
  }, []);

  return { read, write, state };
};
