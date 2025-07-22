import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Imageprovider } from './ContextApi/imagecontext.jsx';

createRoot(document.getElementById('root')).render(
   <Imageprovider> <App /> </Imageprovider>
)
