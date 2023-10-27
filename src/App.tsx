import BasePage from "./pages";

function App() {
  fetch("http://3.127.136.7:9980/anagrafica/1").then((res) => console.log(res));
  return <BasePage />;
}

export default App;
