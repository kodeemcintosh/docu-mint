
import { useState, useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { generateConfig } from "../../network.config";

export const useNetwork = () => {
  const { read } = useLocalStorage({ db: 'config', initialValue: 'mainnet' });

}