import "./global.css";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import "./App.css";
import { getRandomImage } from "./api/getRandomImage";
// import FavoriteImage from "./components/FavoriteImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
      {/* <FavoriteImage
        src="https://images.unsplash.com/photo-1601673753619-ded84e9c1a9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Nzk3MH0"
        alt="Test Description"
      /> */}
    </main>
  );
}
export default App;
