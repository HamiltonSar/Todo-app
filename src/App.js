import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import CategoryDataContext from "./components/contextapis/categorydatacontext/categorydatacontext";
import PopUpContext from "./components/contextapis/popupcontext/popcontext";
import IndexComponent from "./components/indexcomponent/component/indexcomponent";



function App() {
  return (
    <PopUpContext>
      <CategoryDataContext>
        <IndexComponent />
      </CategoryDataContext>
    </PopUpContext>

  );
}

export default App;
