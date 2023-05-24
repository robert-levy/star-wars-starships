import { RenderResult, render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";

let wrapper: RenderResult
beforeEach(() => {
    wrapper = render(<Header />);
  });

describe("<header />", () => {
  test("App mounts properly", () => {
    expect(wrapper).toBeTruthy();
  });

  test("should render logo", () => {
    const logo = wrapper.getByRole("logo");
    expect(logo).toBeInTheDocument();
  });

  test("should load text", () => {
    screen.getByText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum laborum repudiandae nam quibusdam pariatur commodi deleniti reiciendis animi. Sequi consequatur voluptatum laborum itaque nisi non, dolor laboriosam consequuntur ratione."
    );
  });
});
