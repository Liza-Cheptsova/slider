import { Slider } from "./slider/Slider";
import { SliderData } from "./sliderData/SliderData";

const App = () => {
  return (
    <div className='App'>
      <Slider slides={SliderData} />
    </div>
  );
};

export default App;
