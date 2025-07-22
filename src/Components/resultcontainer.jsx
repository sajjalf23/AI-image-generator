import '../Styles/resultcontainer.css';
import { useContext, useEffect } from 'react';
import { Imagecontext } from '../ContextApi/imagecontext.jsx';

function Resultcontainer() {
  const { img, loading, setprompt } = useContext(Imagecontext);

  useEffect(() => {
    if (img.length > 0) {
      setprompt("");  
    }
  }, [img, setprompt]);

  return (
    <div className="result-container">
      {loading ? (
        <p>Img is loading...</p>
      ) : img.length > 0 ? (
        img.map((src, index) => (
          <img src={src} alt={`img created ${index}`} key={index} className="imgs" />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Resultcontainer;
