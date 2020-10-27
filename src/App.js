import "./global.css";
import ImagePreview from "./components/imagePreview";
import "./App.css";
function App() {
  return (
    <main>
      {" "}
      <button>Get Random Image</button>{" "}
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1603766945332-d4fd492d0dd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        }
        alt={"Autumn leaves"}
        author={"Philipp"}
      />{" "}
    </main>
  );
}
export default App;
