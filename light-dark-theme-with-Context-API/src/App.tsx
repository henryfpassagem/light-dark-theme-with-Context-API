import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";
import './style.css'

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}` }>
      <Header />
      <Image />
      <Footer />
    </div>
  )
}

export default App;
