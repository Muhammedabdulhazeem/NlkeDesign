import './App.css';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Popular from './components/Popular';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App relative pb-[70px">
      <Modal />
      <Hero />
      <div className='relative top-[-40px] bg-white h-[100px] -skew-y-3'></div>
      <Featured />
      <Popular />
      <div className='relative pt-[22px] z-10 flex justify-end bg-whit  h-[60px] -skew-y-3'>
        <div className='absolute z-20 top-0 right-0 bg-white left-0 bottom-0  '>
        </div>
        <div className='relative z-10 bg-black  w-[55%]  h-[60px] skew-y-3 '></div>
      </div>
      <JoinUs />
      <div className='relative top-[-140px] bg-white h-[70px] -skew-y-2'></div>
      <Footer />
    </div>
  );
}

export default App;
