import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import { authenticated } from "./store";

export default function App() {
  const [auth, setAuth] = useRecoilState(authenticated);
  const [mounted, setMounted] = useState(false);

  const getUser = async () => {
    try {
      let response = await axios.get("me");
      setAuth({
        check: true,
        user: response.data.data,
      });
    } catch (e) {
      console.log(e);
    }
    setMounted(true);
  };

  useEffect(() => {
    getUser();
  }, [auth.check, mounted]);

  return !mounted ? (
    <Loading />
  ) : (
    <div>
      <ToastContainer />
      <Router />
    </div>
  );
}
