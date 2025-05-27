import Routes from './routes/routes';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <div><Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style:{
            background: '#263238',
            color: '#fff',
            fontFamily: 'Poppins',
          }
        }}
      /></div>
      <Routes/>
    </>
    
  );
}

export default App;
