import { rest } from "msw";

import type { Address } from "../../features/my-address";

export const mockAddress = {
  data: {
    logradouro: "Rua da Harmonia",
    bairro: "Casa Amarela",
    localidade: "Recife",
  } as Address,
};

export const myAddressHandlers = [
  rest.get('https://viacep.com.br/ws/:zipCode/json/', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockAddress));
  }),
];
