"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Make API request to the backend
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching from backend:", error);
      });
  }, []);

  return (
    <div>
      <h1>Last Mile Delivery Dashboard</h1>
      <p>{message ? message : "Loading..."}</p>
    </div>
  );
};

export default Home;
