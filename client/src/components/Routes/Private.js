import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.token) {
      navigate("/login");
      return;
    }

    if (auth?.user?.role === 0) {
      setOk(true);
    } else {
      navigate("/");
    }
  }, [auth?.token, auth?.user?.role, navigate]);

  if (!auth?.token) {
    return <Spinner />;
  }

  return ok ? <Outlet /> : <Spinner />;
}