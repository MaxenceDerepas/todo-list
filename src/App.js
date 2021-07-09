import "./App.css";
import Home from "./containers/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
