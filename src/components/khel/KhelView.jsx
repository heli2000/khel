"use client";
import { SuccessCode } from "@/constants/apiStatus";
import { fetchKhel} from "@/services/khelServices";
import { useEffect, useState } from "react";

const KhelView = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchKhel();
      if (response.status == SuccessCode) {
        setMessage(response.data);
      }
    };
    fetchData();
  }, []);

  return <h1>{message}</h1>;
};

export default KhelView;
