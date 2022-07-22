import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SubscribeForm from "../SubscribeForm";

type InputNames = {
  username: string;
  age: string;
  password: string;
}

describe("SubscribeForm", () => {
  beforeEach(() => {
    render(<SubscribeForm />)
  });

  const typeIntoInput = async ({ username, age, password }: Partial<InputNames>) => {
    const usernameInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /username/i});
    const ageInputElement: HTMLInputElement = screen.getByLabelText(/age/i);
    const passwordInputElement: HTMLInputElement = screen.getByLabelText(/password/i);

    if (username) {
      await userEvent.type(usernameInputElement, username);
    }

    if (age) {
      await userEvent.type(ageInputElement, age);
    }

    if (password) {
      await userEvent.type(passwordInputElement, password);
    }

    return {
      usernameInputElement,
      ageInputElement,
      passwordInputElement,
    }
  }

  const clickOnSubmitButton = async () => {
    const submitButtonElement = screen.getByRole("button", {name: /submit/i})

    await userEvent.click(submitButtonElement);
  }

  it("should init with empty inputs", () => {
    const usernameInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /username/i});
    const ageInputElement: HTMLInputElement = screen.getByLabelText(/age/i);
    const passwordInputElement: HTMLInputElement = screen.getByLabelText(/password/i);

    expect(usernameInputElement.value).toBe("");
    expect(ageInputElement.value).toBe("0");
    expect(passwordInputElement.value).toBe("");
  });

  it("should be able to type a username", async () => {
    const {usernameInputElement} = await typeIntoInput({username: "fthomasvp"})

    expect(usernameInputElement.value).toBe("fthomasvp");
  });

  it("should be able to type an age", async () => {
    const {ageInputElement} = await typeIntoInput({age: "72"})

    expect(ageInputElement.value).toBe("72");
  });

  it("should be able to type a password", async () => {
    const {passwordInputElement} = await typeIntoInput({password: "sub123"})

    expect(passwordInputElement.value).toBe("sub123");
  });

  it("should show username error if no username is provided", async () => {
    await clickOnSubmitButton();

    expect(screen.queryByText(/username is required/i)).toBeInTheDocument();
  });

  it("should show age error if no age is provided", async () => {
    await typeIntoInput({
      username: "fthomasvp",
    })
    await clickOnSubmitButton();

    expect(screen.queryByText(/age is required/i)).toBeInTheDocument();
  });

  it("should show password error if no password is provided", async () => {
    await typeIntoInput({
      username: "fthomasvp",
      age: "72",
    })
    await clickOnSubmitButton();

    expect(screen.queryByText(/password is required/i)).toBeInTheDocument();
  });

  it("should show no error message if every input is valid", async () => {
    await typeIntoInput({
      username: "fthomasvp",
      age: "72",
      password: "sub123"
    })
    await clickOnSubmitButton();

    expect(screen.queryByText(/username is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/age is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/password is required/i)).not.toBeInTheDocument();
  });
});
