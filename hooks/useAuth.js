import api from "../api";
import { useEffect } from "react";
import Router from "next/router";

export default function useAuth() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/login");
    } else {
      if (!api.defaults.headers.common["Authorization"]) {
        api.defaults.headers.common["Authorization"] = token;
      }
    }
  }, []);
}
