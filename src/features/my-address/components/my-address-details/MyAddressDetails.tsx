import { Address } from "../../types";

type Props = {
  myAddress: Address | null;
}

const MyAddressDetails = ({myAddress}: Props) => {
  if (!myAddress) {
    return <p>Please, type a zip code to search for an address.</p>
  }

  return (
    <ul>
      <li><b>Street:</b> {myAddress.logradouro}</li>
      <li><b>District:</b> {myAddress.bairro}</li>
      <li><b>City:</b> {myAddress.localidade}</li>
    </ul>
  );
}

export default MyAddressDetails;
