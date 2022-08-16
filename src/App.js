import "./App.css";
import FloatingPrice from "./components/FloatingPrice";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const walletAddress = "0x7c1b2f618569789941b88680966333f3e8fedc61";

function App() {
  return (
    <>
      <Navbar wallet={walletAddress} />
      {/* <h1>Home page</h1> */}
      <Home />
      <Sidebar />
      <FloatingPrice />
    </>
  );
}

export default App;
