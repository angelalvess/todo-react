import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello, world!");

  return (
    <>
      <div className=" w-full h-screen text-center">
        <h1>Todo list</h1>
      </div>
    </>
  );
}

export default App;
