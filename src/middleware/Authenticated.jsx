import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getLoginUser } from "../store/Users";

const Authenticated = ({ children }) => {
  const redirect = useNavigate();
  const auth = useRecoilValue(getLoginUser);

  useEffect(() => {
    if (!auth.check) {
      redirect("/login");
    }
  }, [auth.check]);
  return children;
};

export default Authenticated;
