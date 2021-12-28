import Buyer from "./Buyer";
import Carousel from "./Carosal";
import Profile from "./Profile";
import Seller from "./Seller";
import { useAuth0 } from "@auth0/auth0-react";
const Main = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Carousel />
      {!isAuthenticated && (
        <Buyer />
      )}
      {isAuthenticated && (
        <>
          <Profile />
          <Seller />
        </>
      )}
    </div>
  );
};

export default Main;
