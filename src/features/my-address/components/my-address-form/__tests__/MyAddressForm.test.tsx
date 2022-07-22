import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MyAddressForm from "../MyAddressForm";

type InputNames = {
  zipCode: string;
}

describe("MyAddressForm", () => {
  beforeEach(() => {
    render(<MyAddressForm setMyAddress={vi.fn} />)
  });

  const typeIntoInput = async ({ zipCode }: Partial<InputNames>) => {
    const zipCodeInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /zip code/i});

    if (zipCode) {
      await userEvent.type(zipCodeInputElement, zipCode);
    }

    return {
      zipCodeInputElement,
    }
  }

  const clickOnSearchButton = async () => {
    const searchButtonElement = screen.getByRole("button", {name: /search/i})

    await userEvent.click(searchButtonElement);
  }

  it("should init with empty input", () => {
    const zipCodeInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /zip code/i});

    expect(zipCodeInputElement.value).toBe("");
  });

  it("should be able to type a zip code", async () => {
    const { zipCodeInputElement } = await typeIntoInput({zipCode: "52051395"})

    expect(zipCodeInputElement.value).toBe("52051395");
  });

  it("should show zip code error if no zip code is provided", async () => {
    await clickOnSearchButton();

    expect(screen.queryByText(/zip code is required/i)).toBeInTheDocument();
  });

  it("should show no error message if zip code input is valid", async () => {
    await typeIntoInput({
      zipCode: "52051395",
    })
    await clickOnSearchButton();

    expect(screen.queryByText(/zip code is required/i)).not.toBeInTheDocument();
  });
});
