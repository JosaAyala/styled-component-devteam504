import "./App.css";
import ButtonComponent from "./CommonComponents/ButtonComponent/ButtonComponent";
import TitleComponent from "./CommonComponents/TitleComponent/TitleComponent";
import HandIcon from "./HandIcon";

function App() {
  return (
    <div className="App">
      <div className="ContainerButtons">
        <ButtonComponent typeButton="default" label="I am a default Button" />
        <ButtonComponent typeButton="primary" label="I am a primary Button" />
        <ButtonComponent typeButton="success" label="I am a success Button" />
        <ButtonComponent typeButton="warning" label="I am a warning Button" />
        <ButtonComponent typeButton="error" label="I am an error Button" />
      </div>
      <br />
      <div className="ContainersTitles">
        <TitleComponent
          label="I am a large Title"
          color="#00ad56"
          size="large"
        />
        <TitleComponent label="I am a default Title" />
        <TitleComponent
          label="I am a medium Title"
          color="#da3b01"
          size="medium"
        />
        <TitleComponent
          label="I am a small Title"
          color="#038387"
          size="small"
        />
        <TitleComponent
          label="I am a small underlined Title"
          color="#038387"
          size="small"
          underline={true}
        />
      </div>
      <br />
      <HandIcon />
    </div>
  );
}

export default App;
