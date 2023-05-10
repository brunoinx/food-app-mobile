import React from "react";
import { StatusBar } from "expo-status-bar";

import { Welcome } from "./src/screens/Welcome";

export default function App() {
  return (
    <>
      <Welcome />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
