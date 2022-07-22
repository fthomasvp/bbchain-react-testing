import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SubscribeForm from "../SubscribeForm";

describe("SubscribeForm", () => {
  it("should init with empty inputs", () => {
    render(<SubscribeForm />)

    const usernameInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /username/i});
    const ageInputElement: HTMLInputElement = screen.getByLabelText(/age/i);
    const passwordInputElement: HTMLInputElement = screen.getByLabelText(/password/i);

    expect(usernameInputElement.value).toBe("");
    expect(ageInputElement.value).toBe("0");
    expect(passwordInputElement.value).toBe("");
  });

  it("should be able to type a username", async () => {
    render(<SubscribeForm />)

    const usernameInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /username/i});

    await userEvent.type(usernameInputElement, "fthomasvp");

    expect(usernameInputElement.value).toBe("fthomasvp");
  });

  it("should be able to type an age", async () => {
    render(<SubscribeForm />)

    const ageInputElement: HTMLInputElement = screen.getByLabelText(/age/i);

    await userEvent.type(ageInputElement, "72");

    expect(ageInputElement.value).toBe("72");
  });

  it("should be able to type a password", async () => {
    render(<SubscribeForm />)

    const passwordInputElement: HTMLInputElement = screen.getByLabelText(/password/i);

    await userEvent.type(passwordInputElement, "sub123");

    expect(passwordInputElement.value).toBe("sub123");
  });

  it("should show username error if no username is provided", async () => {
    render(<SubscribeForm />)

    const submitButtonElement = screen.getByRole("button", {name: /submit/i})

    await userEvent.click(submitButtonElement);

    const errorDescriptionElement = screen.queryByText(/username is required/i);

    expect(errorDescriptionElement).toBeInTheDocument();
  });

  it("should show age error if no age is provided", async () => {
    render(<SubscribeForm />)

    const usernameInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /username/i});
    const submitButtonElement = screen.getByRole("button", {name: /submit/i})

    await userEvent.type(usernameInputElement, "fthomasvp");
    await userEvent.click(submitButtonElement);

    const errorDescriptionElement = screen.queryByText(/age is required/i);

    expect(errorDescriptionElement).toBeInTheDocument();
  });

  it("should show password error if no password is provided", async () => {
    render(<SubscribeForm />)

    const usernameInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /username/i});
    const ageInputElement: HTMLInputElement = screen.getByLabelText(/age/i);
    const submitButtonElement = screen.getByRole("button", {name: /submit/i})

    await userEvent.type(usernameInputElement, "fthomasvp");
    await userEvent.type(ageInputElement, "72");
    await userEvent.click(submitButtonElement);

    const errorDescriptionElement = screen.queryByText(/password is required/i);

    expect(errorDescriptionElement).toBeInTheDocument();
  });

  it("should show no error message if every input is valid", async () => {
    render(<SubscribeForm />)

    const usernameInputElement: HTMLInputElement = screen.getByRole("textbox", {name: /username/i});
    const ageInputElement: HTMLInputElement = screen.getByLabelText(/age/i);
    const passwordInputElement: HTMLInputElement = screen.getByLabelText(/password/i);
    const submitButtonElement = screen.getByRole("button", {name: /submit/i})

    await userEvent.type(usernameInputElement, "fthomasvp");
    await userEvent.type(ageInputElement, "72");
    await userEvent.type(passwordInputElement, "sub123");
    await userEvent.click(submitButtonElement);

    const usernameErrorDescriptionElement = screen.queryByText(/username is required/i);
    const ageErrorDescriptionElement = screen.queryByText(/age is required/i);
    const passwordErrorDescriptionElement = screen.queryByText(/password is required/i);

    expect(usernameErrorDescriptionElement).not.toBeInTheDocument();
    expect(ageErrorDescriptionElement).not.toBeInTheDocument();
    expect(passwordErrorDescriptionElement).not.toBeInTheDocument();
  });
});
