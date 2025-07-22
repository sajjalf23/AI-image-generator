import '../Styles/generatecontainer.css';
import { useEffect, useContext } from "react";
import { Imagecontext } from '../ContextApi/imagecontext.jsx';

function GenerateContainer({ darkMode }) {
  const {
    height, width, sample,
    model, setmodel,
    setsample, setheight, setwidth,
    Generateimg, loading
  } = useContext(Imagecontext);

  const aspectRatios = {
    Square: [512, 512],
    Landscape: [768, 512],
    Portrait: [512, 768]
  };

  const modelOptions = {
    "stable-diffusion-xl-v1": "Stable Diffusion XL",
    "stable-diffusion-v1-5": "Stable Diffusion v1.5",
    "sdxl-lightning": "SDXL Lightning",
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="generate-container">

      
      <div className="btn-group m-2">
        <button
          type="button"
          className={`btn dropdown-toggle ${darkMode ? "btn-light" : "btn-secondary"}`}
          data-bs-toggle="dropdown"
        >
          {modelOptions[model] || "Select Model"}
        </button>
        <ul className="dropdown-menu">
          {Object.entries(modelOptions).map(([key, label]) => (
            <li key={key}>
              <button className="dropdown-item" onClick={() => setmodel(key)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="btn-group m-2">
        <button
          type="button"
          className={`btn dropdown-toggle ${darkMode ? "btn-light" : "btn-secondary"}`}
          data-bs-toggle="dropdown"
        >
          {sample || "Image Count"}
        </button>
        <ul className="dropdown-menu">
          {[1, 2, 3, 4].map((count) => (
            <li key={count}>
              <button className="dropdown-item" onClick={() => setsample(count)}>
                {count}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="btn-group m-2">
        <button
          type="button"
          className={`btn dropdown-toggle ${darkMode ? "btn-light" : "btn-secondary"}`}
          data-bs-toggle="dropdown"
        >
          {height && width ? `${width} x ${height}` : "Aspect Ratio"}
        </button>
        <ul className="dropdown-menu">
          {Object.entries(aspectRatios).map(([label, [w, h]]) => (
            <li key={label}>
              <button className="dropdown-item" onClick={() => {
                setwidth(w);
                setheight(h);
              }}>
                {label} ({w}x{h})
              </button>
            </li>
          ))}
        </ul>
      </div>

     
      <button
        type="button"
        className={`btn m-2 ${darkMode ? "btn-light" : "btn-secondary"}`}
        onClick={Generateimg}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}

export default GenerateContainer;






