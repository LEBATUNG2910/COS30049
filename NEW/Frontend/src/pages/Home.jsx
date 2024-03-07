import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Example from "../components/Button/Button";
import Frame from "../components/Frame/border";
import RegisterButton from "../components/Button/Regisbutton";
import Items from "../components/Frame/Item";
import Footer from "../components/Footer/Footer";
const svgData = [
  {
    path: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z",
    key: "1",
  },
  {
    path: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z",
    key: "2",
  },
  {
    path: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z",
    key: "3",
  },
  {
    path: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z",
    key: "4",
  },
];
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
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredState, setHoveredState] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
  });
  const handleMouseEnter = (field) => {
    setHoveredState((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleMouseLeave = (field) => {
    setHoveredState((prevState) => ({ ...prevState, [field]: false }));
  };
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
      <div className="flex xl:flex-row flex-col justify-center ">
        <div className=" mx-auto xl:max-w-md  xl:ml-20 text-white text-center xl:text-justify  ">
          <h2
            id="view"
            className="lg:text-8xl text-5xl sm:text-7xl text-pink-600 justify-center pt-3"
          >
            <strong>{viewCount.toLocaleString()}</strong>
          </h2>
          <p className="lg:mt-5 lg:text-6xl sm:text-5xl text-3xl justify-center mt-3 ">
            <strong>USERS</strong>
          </p>
          <p className="lg:mt-5 lg:text-6xl sm:text-5xl text-3xl justify-center mt-3 ">
            <strong>ON SERVICES</strong>
          </p>
          <div className="lg:mt-10 flex md:flex-row gap-4 text-2xl mt-3 ">
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
        <div className="flex   justify-center xl:mr-7">
          <Frame />
        </div>
      </div>
      {/*Three Guarantees*/}
      <div className="  flex   xl:mr-10 text-white xl:mt-20 justify-center ">
        <div className="flex  xl:text-xl text-lg  xl:w-screen xl:flex-row flex-col items-center justify-center text-center">
          <div className="flex items-center mt-10 lg:ml-10 ">
            <img
              src="./images/ok.png"
              alt="ok"
              className="md:h-19 md:w-19  h-16 w-16  md:ml-3 "
            />
            <p className="xl:max-w-xs md:flex-shrink-0 m-0 md:whitespace-pre-line ml-3 ">
              Deliver top customer experiences, lead trends, and stay updated
              globally.
            </p>
          </div>
          <div className=" flex items-center mt-10   xl:pl-20 pl-0 ">
            <img
              src="./images/secure.png"
              alt="protect"
              className="md:h-19 md:w-19  h-16 w-16  md:ml-3"
            />
            <p className="xl:max-w-xs md:flex-shrink-0 md:whitespace-pre-line ml-3">
              Secure digital transactions, thwart cybercriminals.
            </p>
          </div>
          <div className=" flex items-center mt-10    xl:pl-20">
            <img
              src="./images/correct.png"
              alt="protect"
              className="md:h-19 md:w-19  h-16 w-16  md:ml-3"
            />
            <p className="xl:max-w-xs md:flex-shrink-0 md:whitespace-pre-line ml-3">
              Praised by customer partners, evidenced by a large user base.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:ml-0 ml-3 items-center ">
        <Items />
      </div>
      {/*Founders*/}
      <div className="text-white flex items-center justify-center flex-col md:text-6xl text-5xl font-bold mt-20 ">
        Founders
      </div>
      <div className="flex flex-row lg:text-2xl text-lg font-medium items-center justify-center text-white md:ml-20 pt-8">
        <img
          src="./images/hacker.png"
          alt="hacker"
          className="rounded-full md:h-40 md:w-40 h-20 w-20 bg-white mr-8"
        />
        <div className="flex flex-col ml-10 text-center h-1/3 mr-10">
          <p className="mb-2">
            Nguyen Thuan Khang, creator of "Sign Up" and "Trade NFTs" sites.
          </p>
          <p className="mb-2">
            Made a major contribution to the development of the website's
            graphics.
          </p>
        </div>
      </div>
      <div className="flex flex-row lg:text-2xl text-lg font-medium items-center justify-center text-white mt-20 md:ml-20">
        <img
          src="./images/chairman.png"
          alt="hacker"
          className="rounded-full md:h-40 md:w-40 h-20 w-20 bg-fuchsia-800"
        />
        <div className="flex flex-col ml-10 text-center h-1/3">
          <p className="mb-2">Lau Ngoc Quyen, adept coding team leader.</p>
          <p className="mb-2">
            Significant contributions to Backend while also handling Frontend
            adjustments.
          </p>
        </div>
      </div>
      <div className="flex flex-row lg:text-2xl text-lg font-medium items-center justify-center text-white mt-20 md:ml-20">
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
      {/* Questions */}
      <h2 className="text-white text-4xl text-center pt-20">
        {" "}
        <strong>Frequently Asked Questions </strong>
      </h2>
      <br />
      <div
        class={`max-w-7xl mx-auto p-2 rounded-lg ${
          hoveredState.q1 ? "md:bg-[#181a20] bg-[#181a20]" : "border-slate-600"
        }`}
        onMouseEnter={() => handleMouseEnter("q1")}
        onMouseLeave={() => handleMouseLeave("q1")}
      >
        <details
          id="details1"
          class="text-white open:bg-[#181a20]  open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onclick="toggleDetails('details1')"
        >
          <summary class="text-xl leading-6 font-semibold select-none">
            What is a cryptocurrency exchange?
          </summary>
          <div class="mt-3 text-lg leading-6 text-white ">
            <p>
              Cryptocurrency exchanges are digital marketplaces that enable
              users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and
              Tether. The Binance exchange is the largest crypto exchange by
              trade volume.
            </p>
          </div>
        </details>
      </div>

      <div
        className={`max-w-7xl mx-auto p-2 rounded-lg ${
          hoveredState.q2 ? "md:bg-[#181a20] bg-[#181a20]" : "border-slate-600"
        }`}
        onMouseEnter={() => handleMouseEnter("q2")}
        onMouseLeave={() => handleMouseLeave("q2")}
      >
        <details
          id="details2"
          className="text-white open:bg-[#181a20]  open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onclick="toggleDetails('details2')"
        >
          <summary class="text-xl leading-6 font-semibold select-none">
            How to buy Bitcoin and other cryptocurrencies on Bitwalls?
          </summary>
          <div class="mt-3 text-lg leading-6 text-white ">
            <p>
              There are multiple methods available for purchasing
              cryptocurrencies on Bitwals. Options include using a credit/debit
              card, cash balance, or Apple Pay/Google Pay. Prior to initiating
              any transactions, ensure that you have completed the Identity
              Verification process for your Binance account..
            </p>
          </div>
        </details>
      </div>

      <div
        className={`max-w-7xl mx-auto p-2 rounded-lg ${
          hoveredState.q3 ? "md:bg-[#181a20] bg-[#181a20]" : "border-slate-600"
        }`}
        onMouseEnter={() => handleMouseEnter("q3")}
        onMouseLeave={() => handleMouseLeave("q3")}
      >
        <details
          id="details3"
          className="text-white open:bg-[#181a20]  open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onclick="toggleDetails('details3')"
        >
          <summary class="text-xl leading-6 font-semibold select-none">
            How to trade cryptocurrencies on Bitwalls?
          </summary>
          <div className="mt-3 text-lg leading-6 text-white ">
            <p>
              On Bitwalls, users have the opportunity to trade numerous
              cryptocurrencies across various markets such as Spot, Margin,
              Futures, and Options. To initiate trading activities, individuals
              are required to sign up for an account, undergo identity
              verification, purchase or deposit cryptocurrencies, and commence
              trading.
            </p>
          </div>
        </details>
      </div>

      <div
        className={`max-w-7xl mx-auto p-2 rounded-lg ${
          hoveredState.q4 ? "md:bg-[#181a20] bg-[#181a20]" : "border-slate-600"
        }`}
        onMouseEnter={() => handleMouseEnter("q4")}
        onMouseLeave={() => handleMouseLeave("q4")}
      >
        <details
          id="details4"
          class="text-white open:bg-[#181a20]  open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg details"
          onclick="toggleDetails('details4')"
        >
          <summary className="text-xl leading-6 font-semibold select-none">
            How to earn from crypto on Bitwalls?
          </summary>
          <div className="mt-3 text-lg leading-6 text-white ">
            <p>
              Users can earn rewards on more than 180+ cryptocurrencies by using
              one of the products offered on Bitwalls Earn. Our platform offers
              dozens of digital assets like Bitcoin, Ethereum, and stablecoins.
            </p>
          </div>
        </details>
      </div>
      {/* Rating part */}
      <div className="items-center py-5">
        <h3 className="text-white text-center text-4xl">
          <strong>Rating From Our Users</strong>
        </h3>
        <div className="flex justify-center ">
          <div className="lg:mx-auto w-full pt-8  items-center text-center">
            <div className="flex justify-center w-full">
              <div className="flex items-center mb-5">
                {svgData.map((item) => (
                  <svg
                    key={item.key}
                    className="w- h-6 ms-2 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d={item.path} />
                  </svg>
                ))}
                <svg
                  className="w- h-6 ms-2 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-400">
                  4.95
                </p>
                <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-400">
                  out of
                </p>
                <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-400">
                  5
                </p>
              </div>
            </div>

            <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
              1,745 global ratings
            </p>

            {/* Repeat the structure for other rating categories */}

            <div className="flex items-center justify-center mt-4">
              <p className="text-base font-medium text-white ">5 star</p>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <span className="text-base font-medium text-gray-400">90%</span>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="text-base font-medium text-white ">4 star</p>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                70%
              </span>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="text-base font-medium text-white">3 star</p>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: "8%" }}
                ></div>
              </div>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                12%
              </span>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="text-base font-medium text-white ">2 star</p>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: "4%" }}
                ></div>
              </div>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                11%
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 ml-1">
              <p className="text-base font-medium text-white ">1 star</p>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: "2%" }}
                ></div>
              </div>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                10%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* For Verified Users */}
      <div className="flex items-center justify-center flex-col mt-10 w-full">
        <div className="flex flex-col items-center text-white text-2xl font-bold">
          <p className="md:ml-0 ml-0 w-full text-center">For Verified Users</p>
          <p className="md:py-2 text-center  ">
            Get up to <strong classNameName="text-yellow-500">100</strong> USDT
            in reward
          </p>
        </div>

        <button className="items-center pb-6 pt-5 ">
          <RegisterButton />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
