import "./App.css";
import "./global.css";
import ImagePreview from "./components/ImagePreview.";

function App() {
  return (
    <main>
      <button>Get Random Image</button>

      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1593362977357-4ed93b09bd1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        }
        alt={"Autum"}
        author={"Philipp"}
      />
    </main>
  );
}

export default App;
