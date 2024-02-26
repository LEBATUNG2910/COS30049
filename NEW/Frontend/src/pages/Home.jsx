import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Example from "../components/Button/Button";
import Frame from "../components/Frame/border";
import RegisterButton from "../components/Button/Regisbutton";
import Items from "../components/Frame/Item";
import Footer from "../components/Footer/Footer";

function Home() {
  // Set Plus 30 Views Automatically
  const [viewCount, setViewCount] = useState(178522322);
  useEffect(() => {
    const targetCount = viewCount + 30;
    const duration = 5000; // 5 seconds
    const interval = 2000; // Update every 100 milliseconds
    const updateViewCount = () => {
      setViewCount((prevCount) => {
        const diff = targetCount - prevCount;
        const step = Math.ceil((diff * interval) / duration);
        return prevCount + step;
      });
    };
    const intervalId = setInterval(updateViewCount, interval);
    return () => clearInterval(intervalId);
  }, [viewCount]);

  const [email, setEmail] = useState("");
  const [detailsOpen, setDetailsOpen] = useState({});

  const toggleDetails = (id) => {
    setDetailsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="overflow-hidden home-bg">
      <div className="flex md:flex-row flex-col justify-center">
        <div className="md:container mx-auto max-w-md text-justify md:ml-20 text-white">
          <h2 id="view" className="md:text-8xl text-4xl text-pink-600">
            <strong>{viewCount.toLocaleString()}</strong>
          </h2>
          <p className="md:mt-5 md:text-6xl text-3xl">
            <strong>USERS</strong>
          </p>
          <p className="md:mt-5 md:text-6xl text-3xl">
            <strong>ON SERVICES</strong>
          </p>
          <div className="md:mt-10 flex md:flex-row gap-4 text-2xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-4 p-2 rounded-lg w-full max-w-xs text-black"
              value={email}
              onChange={handleEmailChange}
            />
            <Link to={`/register?email=${encodeURIComponent(email)}`}>
              <button>
                <Example />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:mr-7">
          <Frame />
        </div>
      </div>
      <div className="md:mr-40 md:flex-col flex justify-center mr-10 text-white mt-20">
        <div className="md:flex :flex-row md:text-lg text-lg ml-20">
          <div className="flex items-center mt-10 ml-1">
            <img src="./images/ok.png" alt="ok" className="h-19 w-19 ml-10 " />
            <p className="max-w-xs flex-shrink-0 m-0 whitespace-pre-line ml-2">
              Deliver top customer experiences, lead trends, and stay updated
              globally.
            </p>
          </div>
          <div className=" flex items-center mt-10 md:ml-10 mr-20 ml-7">
            <img
              src="./images/secure.png"
              alt="protect"
              className="h-18 w-18 md:ml-20 ml-3"
            />
            <p className="md:max-w-xs md:flex-shrink-0 md:whitespace-pre-line ml-3">
              Secure digital transactions, thwart cybercriminals.
            </p>
          </div>
          <div className=" flex md:items-center mt-10 ml-10">
            <img
              src="./images/check.png"
              alt="protect"
              className="h-19 w-19 md:ml-3"
            />
            <p className="md:max-w-xs md:flex-shrink-0 whitespace-pre-line ml-3">
              Praised by customer partners, evidenced by a large user base.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:ml-40 ml-3">
        <Items />
      </div>
      <div className="text-white flex items-center justify-center flex-col text-6xl font-bold mt-20 ">
        Founders
      </div>
      <div className="flex flex-row md:text-3xl text-lg font-medium items-center justify-center text-white mt-20 md:ml-20">
        <img
          src="./images/hacker.png"
          alt="hacker"
          className="rounded-full md:h-40 md:w-40 h-20 w-20 bg-white"
        />
        <div className="flex flex-col ml-10 text-center h-1/3">
          <p className="mb-2">
            Nguyen Thuan Khang, creator of "Sign Up" and "Trade NFTs" sites.
          </p>
          <p className="mb-2">
            Made a major contribution to the development of the website's
            graphics.
          </p>
        </div>
      </div>
      <div className="flex flex-row md:text-3xl text-lg font-medium items-center justify-center text-white mt-20 md:ml-20">
        <img
          src="./images/chairman.png"
          alt="hacker"
          className="rounded-full md:h-40 md:w-40 h-20 w-20 bg-fuchsia-800   "
        />
        <div className="flex flex-col ml-10 text-center h-1/3">
          <p className="mb-2">Lau Ngoc Quyen, adept coding team leader.</p>
          <p className="mb-2">
            Significant contributions to Backend while also handling Frontend
            adjustments.
          </p>
        </div>
      </div>
      <div className="flex flex-row md:text-3xl text-lg font-medium items-center justify-center text-white mt-20 md:ml-20">
        <img
          src="./images/manager.png"
          alt="hacker"
          className="rounded-full md:h-40 md:w-40 h-20 w-20 bg-cyan-400   "
        />
        <div className="flex flex-col ml-10 text-center h-1/3">
          <p className="mb-2">
            Le Ba Tung, Creator of the "Home" and "Trade Tokens" pages
          </p>
          <p className="mb-2">
            Come up with many ideas to help improve the website better, good
            knowledge
          </p>
        </div>
      </div>
      {/* Frequently Asked Question  */}
      <h2 className="text-white text-5xl text-center pt-20">
        <strong>Frequently Asked Questions </strong>
      </h2>

      <div className="max-w-7xl mx-auto p-8">
        <details
          id="details1"
          className="text-white open:bg-[#181a20] open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onClick={() => toggleDetails("details1")}
        >
          <summary className="text-xl leading-6 font-semibold select-none cursor-pointer">
            What is a cryptocurrency exchange?
          </summary>
          <div className="mt-3 text-lg leading-6 text-white ">
            <p>
              - Cryptocurrency exchanges are digital marketplaces that enable
              users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and
              Tether. The Binance exchange is the largest crypto exchange by
              trade volume.
            </p>
          </div>
        </details>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <details
          id="details2"
          className="text-white open:bg-[#181a20] open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onClick={() => toggleDetails("details2")}
        >
          <summary className="text-xl leading-6 font-semibold select-none cursor-pointer">
            How to buy Bitcoin and other cryptocurrencies on Bitwalls?
          </summary>
          <div className="mt-3 text-lg leading-6 text-white ">
            <p>
              - There are multiple methods available for purchasing
              cryptocurrencies on Bitwals. Options include using a credit/debit
              card, cash balance, or Apple Pay/Google Pay. Prior to initiating
              any transactions, ensure that you have completed the Identity
              Verification process for your Binance account.
            </p>
          </div>
        </details>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <details
          id="details3"
          className="text-white open:bg-[#181a20] open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onClick={() => toggleDetails("details3")}
        >
          <summary className="text-xl leading-6 font-semibold select-none cursor-pointer">
            How to trade cryptocurrencies on Bitwalls?
          </summary>
          <div className="mt-3 text-lg leading-6 text-white ">
            <p>
              - On Bitwalls, users have the opportunity to trade numerous
              cryptocurrencies across various markets such as Spot, Margin,
              Futures, and Options. To initiate trading activities, individuals
              are required to sign up for an account, undergo identity
              verification, purchase or deposit cryptocurrencies, and commence
              trading.
            </p>
          </div>
        </details>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <details
          id="details4"
          className="text-white open:bg-[#181a20] open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onClick={() => toggleDetails("details4")}
        >
          <summary className="text-xl leading-6 font-semibold select-none cursor-pointer">
            How to earn from crypto on Bitwalls?
          </summary>
          <div className="mt-3 text-lg leading-6 text-white ">
            <p>
              - Users can earn rewards on more than 180+ cryptocurrencies by
              using one of the products offered on Binance Earn. Our platform
              offers dozens of digital assets like Bitcoin, Ethereum, and
              stablecoins.
            </p>
          </div>
        </details>
      </div>

      <div className="flex items-center justify-center flex-col mt-10">
        <div className="font-bold ml-28 md:mr-20 md:ml-20 mr-20 text-white text-2xl">
          <p className="ml-16 ">For Verified Users</p>
          <p>
            Get up to <strong className="text-yellow-500">100</strong> USDT in
            reward
          </p>
        </div>
        <button className="md:mr-16 mt-10 ml-20 pb-20 mr-20 ">
          <RegisterButton />
        </button>
      </div>
      <Footer />
    </div>
  );  
}

export default Home;
