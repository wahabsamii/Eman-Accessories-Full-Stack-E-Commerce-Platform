import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

export default function AdminPrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.token) {
        navigate('/');
        return;
    }

    if(auth?.user?.role === 1){
        setOk(true);
    }else{
        navigate("/");
    }
  }, [auth?.token, auth?.user?.role, navigate]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
