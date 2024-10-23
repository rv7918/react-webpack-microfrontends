import React, { Suspense } from "react";

const Header = React.lazy(() => import("header/Header"));

const App = () => {
  console.log("Rendering App, attempting to load Header...");

  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <main>
        <h1>This is the Container App</h1>
        <p>The Header component should appear above this text.</p>
      </main>
    </div>
  );
};

export default App;
