import App from "../App";
import { render } from "@testing-library/react";

describe('<App />', () => {
    test('App mounts properly', () => {
      const wrapper = render(<App />)
      expect(wrapper).toBeTruthy()
    })
});
