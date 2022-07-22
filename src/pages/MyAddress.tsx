import { useState } from "react";

import { MyAddressDetails, MyAddressForm } from "../features/my-address";
import type { Address } from "../features/my-address";

const MyAddress = () => {
  const [myAddress, setMyAddress] = useState<Address | null>(null);

  return (
    <section style={{ margin: 'auto 40px'  }}>
      <h1>My Address</h1>

      <section>
        <MyAddressForm setMyAddress={setMyAddress} />
      </section>

      <section>
        <MyAddressDetails myAddress={myAddress} />
      </section>
    </section>
  )
}

export default MyAddress;
