import { useRecoilValue } from "recoil";
import { authenticated } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Guest = ({ children }) => {
  const redirect = useNavigate();
  const auth = useRecoilValue(authenticated);

  useEffect(() => {
    if (auth.check) {
      redirect("/");
    }
  }, [auth.check]);
  return children;
};

export default Guest;
