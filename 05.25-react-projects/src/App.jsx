import "./App.css";
import Accordian from "./components/accordian/Index";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data/Index";
import QRCodeGenerator from "./components/qr-code-generator/Index";
import RandomColor from "./components/random-color/Index";
import StarRating from "./components/star-rating/Index";
import TreeView from "./components/tree-view/Index";
import menus from "./components/tree-view/data";

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
   {/*    <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* Load more products component*/}
     {/*  <LoadMoreData /> */}
      {/* Tree view component/menu UI component /recursive navigation menu */}
      {/* <TreeView menus={menus}/> */}
      <QRCodeGenerator />
    </>
  );
}

export default App;
