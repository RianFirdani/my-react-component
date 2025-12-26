import { useState } from "react";
import "./App.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDot, GoDotFill } from "react-icons/go";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open,setOpen] = useState(false)

  const Image = [
    {
      index: 0,
      url: "https://images.unsplash.com/photo-1766555766657-ea8f81a67934?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      index: 1,
      url: "https://images.unsplash.com/photo-1765448642340-0503bbba1c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    },
    {
      index: 2,
      url: "https://images.unsplash.com/photo-1766068472854-3184eda0d376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      index: 3,
      url: "https://plus.unsplash.com/premium_photo-1765927690120-94a4484a90a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      index: 4,
      url: "https://images.unsplash.com/photo-1766145605687-fde866d32ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleNext = () => {
    if (currentImage === Image.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(Image.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-slate-400 h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <div className="w-150 h-100 relative">
          <img
          onClick={() => setOpen(true)}
            src={Image[currentImage].url}
            alt=""
            className="w-full h-full object-cover rounded-md cursor-pointer"
          />
          <div
            onClick={handlePrev}
            className="absolute cursor-pointer top-[50%] left-2 transform -translate-y-1/2 bg-white/90 rounded-full"
          >
            <IoIosArrowBack size={30} />
          </div>
          <div
            onClick={handleNext}
            className="absolute cursor-pointer top-[50%] right-2 transform -translate-y-1/2 bg-white/90 rounded-full"
          >
            <IoIosArrowForward size={30} />
          </div>
        </div>
        <div className="flex justify-center">
          {Image.map((item) => {
            return (
              <div className="cursor-pointer" onClick={()=>setCurrentImage(item.index)}>{item.index === currentImage ? <GoDotFill size={28} /> : <GoDot size={28} />}</div>
            )
          })}
        </div>
      </div>
      {open&&(
        <div className="h-screen absolute">
          <img
                    onClick={() => setOpen(false)}
            src={Image[currentImage].url}
            alt=""
            className="w-screen h-full object-cover cursor-pointer "
          />
        </div>
      )}
    </div>
  );
}

export default App;
