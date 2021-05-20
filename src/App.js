import FavoritesProvider from "contexts/FavoritesProvider";
import React from "react";
import AppRouter from "Routers/AppRouter";

function App() {
  return (
    <FavoritesProvider>
      <AppRouter />
    </FavoritesProvider>
  );
}

export default App;
