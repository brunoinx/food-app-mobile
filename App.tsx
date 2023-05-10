import React from "react";
import { StatusBar } from "expo-status-bar";

import { Welcome } from "./src/screens/Welcome";
import { Routes } from "@/routes";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
