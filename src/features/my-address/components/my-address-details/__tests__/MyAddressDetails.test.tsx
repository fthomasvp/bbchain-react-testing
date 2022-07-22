import { render, screen } from "@testing-library/react";

import MyAddressDetails from "../MyAddressDetails";

describe("MyAddressDetails", () => {
  const fakeAddress = {
    logradouro: "Rua da Harmonia",
    bairro: "Casa Amarela",
    localidade: "Recife"
  };

  it("should show an empty message", () => {
    render(<MyAddressDetails myAddress={null} />);

    const emptyMessageElement = screen.getByText(/please, type a zip code to search for an address/i);

    expect(emptyMessageElement).toHaveTextContent(/please, type a zip code to search for an address/i);
  });

  it("should not show an empty message", async () => {
    render(<MyAddressDetails myAddress={fakeAddress} />);

    const emptyMessageElement = screen.queryByText(/please, type a zip code to search for an address/i);

    expect(emptyMessageElement).not.toBeInTheDocument();
  });

  it("should show a list with address details", async () => {
    render(<MyAddressDetails myAddress={fakeAddress} />);

    const emptyMessageElement = screen.queryByText(/please, type a zip code to search for an address/i);

    const addressDetailsElement = screen.getByRole("list");

    expect(addressDetailsElement).toBeInTheDocument();
    expect(emptyMessageElement).not.toBeInTheDocument();
  });
});
