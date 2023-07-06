
import { useState, useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

export const useNetwork = () => {
  const { read } = useLocalStorage({ db: 'config', initialValue: 'mainnet' });

}