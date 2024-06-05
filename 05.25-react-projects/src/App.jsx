import "./App.css";
import Accordian from "./components/accordian/Index";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data/Index";
import RandomColor from "./components/random-color/Index";
import StarRating from "./components/star-rating/Index";

function App() {
  return (
    <>
      {/* Accordian component */}
      <Accordian />
      {/* Random color component */}
      <RandomColor />
      {/* Star-rating component */}
      <StarRating noOfStars={15} />
      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      {/* Load more products component*/}
      <LoadMoreData />
    </>
  );
}

export default App;
