import React, { useEffect, useState } from "react";
import AuthByRefreshToken from "../../../utils/UserAuth";
import { useNavigate } from "react-router-dom";
import { UserAuthentication } from "../../../apis/handleAuthorization/HandleAuth";
import { UsersLogout } from "../../../apis/handle_Login_Logout/HandleLoginLogout";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/features/user/userSlice";

const UsersRoutsSecurity = ({ userRole, setIsLoggedIn, Component }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tokens, setTokens] = useState(() => {
    const storedTokens = localStorage.getItem("tokens");
    return storedTokens ? JSON.parse(storedTokens) : {};
  });

  useEffect(() => {
    const authenticate = async () => {
      const { accessToken, refreshToken } = tokens;

      if (!accessToken && !refreshToken) {
        console.log("unautherized user");
        navigate("/login");
      } else {
        const response = await UserAuthentication(accessToken);

        if (!response) {
          const newResponse = await AuthByRefreshToken(refreshToken);
          if (!newResponse) {
            //unautherized user
            navigate("/login");
          } else {
            setTokens(newResponse);
            // setIsLoggedIn(true);
          }
        } else {
          if (userRole === response.user) {
            setIsLoggedIn(true);
            dispatch(updateUser(response));
          } else if (userRole === "Admin" && response.adminCode) {
            setIsLoggedIn(true);
            dispatch(updateUser(response));
          } else {
            console.log("unatherized");
            //unautherized user
            setIsLoggedIn(false);
            navigate("/login");
          }
        }
      }
    };

    authenticate();

    const interval = setInterval(authenticate, 60000);

    return () => clearInterval(interval);
  }, [tokens.accessToken, tokens.refreshToken]);

  const logout = () => {
    console.log("logout");
    UsersLogout();
    setIsLoggedIn(false);
    navigate("/");
  };

  return <Component logout={logout} />;
};

export default UsersRoutsSecurity;
