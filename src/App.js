import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <div className="w-full h-screen bg-gray-300">
      <Header title="Pothole App" />

      <div className="h-full w-full flex bg-red-500">
        <div className="w-1/6 bg-white">
          <p>Sidebar</p>
        </div>
        <div className="w-5/6 bg-white">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
