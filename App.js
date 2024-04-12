import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <div className='flex '>
      <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg" alt="Restaurant Logo" className="w-40 h-auto  mr-4" />
      <div className=' items-center text-blue-500'>
        <ul className="pt-16 pl-96  flex space-x-20 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<AppLayout />, root);
