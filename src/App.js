import "./App.css";
import Navbar from "./components/Navbar";

const walletAddress = "0x7c1b2f618569789941b88680966333f3e8fedc61";

function App() {
  return (
    <>
      <Navbar wallet={walletAddress} />
      <header className="App-header">
        <h1>Home page</h1>
      </header>
    </>
  );
}

export default App;
