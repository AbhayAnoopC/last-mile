import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

// API URL - in production, use expo-constants with app.json for env vars
const API_URL = 'https://kura-aw41.onrender.com';

export default function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  // Track loading state

  useEffect(() => {
    console.log("Making API request...");  // Debug log
    axios.get(`${API_URL}/`)
      .then(response => {
        console.log("Response from backend:", response.data);  // Debug log for response
        setMessage(response.data.message);
        setLoading(false);  // Set loading to false after receiving the response
      })
      .catch(error => {
        console.error("Error fetching from backend:", error);
        setLoading(false);  // Set loading to false even on error
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{loading ? "Loading..." : message}</Text>
      <Button title="Refresh" onPress={() => setMessage(null)} />
    </View>
  );
}
