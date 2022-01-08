import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const Mockfun = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("Async Testing", () => {
  it("testing the if the first elem exist in the DOM", async () => {
    render(<Mockfun />);
    const followerElem = await screen.findByTestId("follower0");

    expect(followerElem).toBeInTheDocument();
  });

  /*   it("testing length of the followers", async () => {
    render(<Mockfun />);
    const followersElems = await screen.findAllByTestId(/follower/i);

    expect(followersElems.length).toBe(5);
  }); */
});
