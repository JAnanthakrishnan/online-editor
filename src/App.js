import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Header />
      <iframe
        src="https://vscode.dev/"
        style={{ display: "block", height: "92vh" }}
        allowFullScreen={true}
        width="100%"
      ></iframe>
    </div>
  );
}

export default App;
