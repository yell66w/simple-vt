/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Popup from "../components/Popup";
import { clearPopup } from "../features/popup/popupSlice";

const mockStore = configureStore([]);

describe("Popup", () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      popup: {
        value: "Test Message",
      },
    });

    component = render(
      <Provider store={store}>
        <Popup />
      </Provider>
    );
  });

  it("renders the Popup component with the correct message", () => {
    const messageElement = component.getByText("Test Message");
    expect(messageElement).toBeInTheDocument();
  });

  it("dispatches clearPopup action when the Okay button is clicked", () => {
    const closeButton = component.getByText("Okay");

    fireEvent.click(closeButton);

    expect(store.getActions()).toEqual([clearPopup()]);
  });

  it("does not render the Popup component when value is null", () => {
    const nullValueStore = mockStore({
      popup: {
        value: null,
      },
    });

    const nullValueComponent = render(
      <Provider store={nullValueStore}>
        <Popup />
      </Provider>
    );

    expect(nullValueComponent.container.firstChild).toBeNull();
  });
});
