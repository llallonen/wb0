import { AppProvider } from "./AppContext";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <Header />
      <Cart />
    </AppProvider>
  );
}

export default App;
