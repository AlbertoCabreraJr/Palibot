import LoginPage from "./components/LoginPage/LoginPage";
import PalibotMain from "./components/PalibotMain/PalibotMain";
import { auth, useAuthState } from "./firebase/config";

function App() {
  const [user] = useAuthState(auth);
  return <div className="App">{user ? <PalibotMain /> : <LoginPage />}</div>;
}

export default App;
