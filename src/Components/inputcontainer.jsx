import { useContext } from "react";
import { Imagecontext } from '../ContextApi/imagecontext.jsx';
import '../Styles/inputcontainer.css';
function InputContainer() {
  const { prompt, setprompt } = useContext(Imagecontext);
    return (
    <>
        <div className="input-container">
            <div className="textarea-wrapper">
                <textarea
                    className="form-control prompt"
                    rows="4"
                    placeholder="Enter prompt..."
                    value = {prompt}
                    onChange={(e)=> setprompt(e.target.value)}
                ></textarea>
            </div>
        </div>
    </>) 
}
export default InputContainer