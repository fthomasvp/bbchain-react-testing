import axios from "axios";

import { Address } from "../types";

export const getZipCodeService = async (zipCode: string) => {
  return await axios.get<Address>(`https://viacep.com.br/ws/${zipCode}/json/`);
};
