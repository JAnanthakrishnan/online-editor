import "./App.css";
import EmulatorScreen from "./components/EmulatorScreen";
import Header from "./components/Header";
import { Tabs } from "antd";
import EditorScreen from "./components/EditorScreen";
const { TabPane } = Tabs;
function App() {
  return (
    <div className="App">
      {/* <Tabs defaultActiveKey="1" centered style={{ margin: 0, padding: 0 }}>
        <TabPane tab="Editor" key="1">
          <EditorScreen />
        </TabPane>
        <TabPane tab="Emulator" key="2">
          <EmulatorScreen />
        </TabPane>
      </Tabs> */}
      <Header />
      <EditorScreen />
      {/* <EmulatorScreen /> */}
    </div>
  );
}

export default App;
