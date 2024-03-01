import React from "react";
import { Link } from "react-router-dom";
{/* Trade Token 1 */}
const Item = ({ title, content, imageSrcArray, borderRadius }) => (
  <div
  className="item text-black md:m-5 m-0 w-max md:mr-0 mr-4 justify-center items-center "
  style={{
    borderRadius: "15px",
    backgroundColor: "#e2e8f0", 
    padding: "20px",
    marginTop: "80px",
    fontFamily: "BinancePlex, Arial, sans-serif",
  }}
>
    {imageSrcArray && (
      <div style={{ display: "flex" }}>
        {imageSrcArray.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title}-image-${index}`}
            className="mb-5 md:ml-10 md:mr-7 md:h-15 md:w-15 ml-5 mr-6 items-center"
          />
        ))}
      </div>
    )}
    <h2 className="flex justify-center">{title}</h2>
    <Link to="/Token">
      <p className="flex justify-center text-purple-700 text-2xl">{content}</p>
    </Link>
  </div>
);
{/* Trade NFTs 1 */}
const Itemm = ({ title, content, imageSrcArray, borderRadius }) => (
 <div
    className="item text-black md:m-5 m-0 w-max md:mr-0 mr-2 "
    style={{
      borderRadius: "15px",
    backgroundColor: "#e2e8f0",
    padding: "20px",
    marginTop: "80px",
    fontFamily: "BinancePlex, Arial, sans-serif",
    }}
  >
    {imageSrcArray && (
      <div style={{ display: "flex" }}>
        {imageSrcArray.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title}-image-${index}`}
            className="mb-5 md:ml-10 md:mr-7 md:h-15 md:w-15 ml-5 mr-6"
          />
        ))}
      </div>
    )}
    <h3 className="flex justify-center">{title}</h3>
    <Link to="/NFTs">
      <p className="flex justify-center text-purple-700 text-2xl">{content}</p>
    </Link>
  </div>
);
{/* Trade Token 2 */}
const Items = () => (
  <div className="container flex md:flex-row flex-col justify-center">
    <div className="font-bold text-lg flex md:items-center md:justify-center ">
      <Item
        title="Buy, sell and explore tokens on BITWALLS"
        content="Trade Tokens"
        imageSrcArray={[
          process.env.PUBLIC_URL + "/images/secure.png",
          process.env.PUBLIC_URL + "/images/eth.png",
          process.env.PUBLIC_URL + "/images/bitcoin.png",
        ]}
        borderRadius="10px"
      />
    </div>
{/* Trade NFTs 2*/}
    <div className="container flex md:flex-row flex-col justify-center md:ml-0 ">
      <div className="font-bold text-lg flex md:items-center md:justify-center ">
        <Itemm
          title="Buy, sell NFTS across marketplaces"
          content="Trade NFTs"
          imageSrcArray={[
            process.env.PUBLIC_URL + "/images/card.png",
            process.env.PUBLIC_URL + "/images/trading.png",
            process.env.PUBLIC_URL + "/images/money.png",
          ]}
          borderRadius="10px"
        />
      </div>
    </div>
  </div>
);

export default Items;
