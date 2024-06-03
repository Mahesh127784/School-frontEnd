import React, { useEffect, useState } from "react";
import AuthByRefreshToken from "../../../../utils/UserAuth";
import { useNavigate } from "react-router-dom";
import { UserAuthentication } from "../../../../apis/handleAuthorization/HandleAuth";
import { UsersLogout } from "../../../../apis/handle_Login_Logout/HandleLoginLogout";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/features/user/userSlice";
import { toast } from "react-toastify";

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
        toast.error("unautherized user!,Please login to continue");
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
            // setIsLoggedIn(true); doesnt required as the state chagedthe code rerender witj new valid accesstkn
          }
        } else {
          if (
            userRole === response.user ||
            (userRole === "Admin" && response.adminCode)
          ) {
            setIsLoggedIn(true);
            dispatch(updateUser(response));
          }
          //  else if (userRole === "Admin" && response.adminCode) {
          //   setIsLoggedIn(true);
          //   dispatch(updateUser(response));
          // }
          else {
            //if the user is loggedin and trying to access diffrent role give error
            toast.error("unatherized request,Please login to continue");
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
    UsersLogout();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return <Component logout={logout} />;
};

export default UsersRoutsSecurity;
