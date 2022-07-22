import { setupServer } from "msw/node";

import { myAddressHandlers } from "./my-address/my-address.handlers";

export const server = setupServer(...myAddressHandlers);
