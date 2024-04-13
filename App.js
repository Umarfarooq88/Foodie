import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <div NAVBAR className='flex  h-32'>
      <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg" alt="Restaurant Logo" className="w-40 h-auto  mr-4" />
      <div NAV_ITEMS className=' h-28 items-center text-blue-500'>
        <ul className="pt-12 pl-96 flex space-x-20 items-center font-bold text-lg  ">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const Body=()=>{
  return (
    <div Body>
      <div  className='mb-5 border border-black w-56 h-12 ml-3'  > Search bar</div>
      <div Restarunt_Card >
        <RestaurantCard/>
      </div>
       </div>
  )
}

const RestaurantCard=()=>{
  return(
    <div className='hover:border border-black  w-72 h-72 ml-3 rounded-xl cursor-pointer ' >
      <img className="rounded-lg " src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be4h2xc9cqcugdjydotn'/>
    <div className='pl-2 font-serif'>
      <h3 className='font-bold'>New Shanti Sagar</h3>
      <h2>Rating: 4.2</h2>
      <h2>Delivery EST: 30-35 mins</h2>
      <h2>North India, Chinese</h2>
      <h2>Jaynagar</h2>
      </div>
    </div>
  )
}






const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body/>
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<AppLayout />, root);
