import React from "react";

class Frame extends React.Component {
  render() {

    return (
      <div className="rounded-lg bg-gray-500 p-5  xl:my-20  mt-14 font-sans  text-center">
        {/* Nội dung bên trong khung sẽ được đặt ở đây */}
        <div className="flex flex-row   lg:space-x-20 space-x-6  text-xl sm:text-2xl text-white  lg:mb-5 mb-1 font-bold">
          <img
            src="./images/bitcoin.png"
            alt="coin"
            className="h-10 w-10 mr-2"
          />
          <p style={{ margin: 0 }}>BTC</p>
          <p>$42,884.00</p>
          <p className=" text-green-400">+0,62%</p>
        </div>
        <div className="flex flex-row items-center lg:space-x-20 space-x-6  text-xl sm:text-2xl text-white  lg:mb-5 font-bold">
          <img src="./images/tron.png" alt="coins" className="h-10 w-10 mr-2" />
          <p style={{ margin: 0 }}>TRX</p>
          <p>$0.10815</p>
          <p className=" px-6 text-red-500">-4,72%</p>
        </div>
        <div className="flex flex-row items-center lg:space-x-20 space-x-6 text-xl sm:text-2xl text-white lg:mb-5 font-bold">
          <img src="./images/bnb.png" alt="coins" className="h-10 w-10 mr-1" />
          <p style={{ margin: 0 }}>BNB</p>
          <p>$371.60</p>
          <p className=" px-8 text-green-400">+5,62%</p>
        </div>
        <div className="flex flex-row items-center lg:space-x-20 space-x-6 text-xl sm:text-2xl text-white font-bold">
          <img
            src="./images/eth.png"
            alt="dongtien"
            className="h-10 w-10 mr-2"
          />
          <p style={{ margin: 0 }}>ETH</p>
          <p>$2.48259</p>
          <p className="px-6 text-red-500">-2.88%</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <div className="text-center">
          <Frame />
        </div>
      </>
    );
  }
}

export default App;
