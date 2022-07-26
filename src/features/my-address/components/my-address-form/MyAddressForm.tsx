import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { getZipCodeService } from "../../services";

import type { Address } from "../../types";
import "./MyAddressForm.css";

type Props = {
  setMyAddress: Dispatch<SetStateAction<Address | null>>;
};

const MyAddressForm = ({ setMyAddress }: Props) => {
  const [zipCode, setZipCode] = useState("");
  const [errorDescription, setErrorDescription] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();

    if (!zipCode) {
      return setErrorDescription("Zip Code is required!");
    }

    try {
      // Here is where MSW come in handy
      const { data } = await getZipCodeService(zipCode);

      setMyAddress(data);
    } catch (error) {
      setErrorDescription(JSON.stringify(error));
    }
  };

  return (
    <form className="form-container">
      <div className="field-input">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          name="zipCode"
          type="text"
          onChange={handleChange}
          value={zipCode}
        />
      </div>

      {errorDescription && <p className="danger">{errorDescription}</p>}

      <button type="submit" onClick={handleClick}>
        Search
      </button>
    </form>
  );
};

export default MyAddressForm;
