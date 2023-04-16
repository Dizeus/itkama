import './App.css';
import { BrowserRouter} from "react-router-dom";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Content from "./Components/Content/Content";

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Content
          updateNewPostText={props.updateNewPostText}
          addPost={props.addPost}
          content={props.state.content}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
