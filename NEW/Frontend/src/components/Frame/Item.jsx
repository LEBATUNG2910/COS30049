import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, content, imageSrcArray, borderRadius }) => (
  <div
    className="item text-black"
    style={{
      borderRadius: "15px",
      backgroundColor: "#e2e8f0",
      padding: "20px",
      width: "500px",
      margin: "20px",
      marginRight: "50px",
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
            className="h-15 w-15 mb-5 ml-16"
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

const Itemm = ({ title, content, imageSrcArray, borderRadius }) => (
  <div
    className="item text-black mt-10"
    style={{
      borderRadius: "15px",
      backgroundColor: "#e2e8f0",
      padding: "20px",
      width: "500px",
      margin: "20px",
      marginRight: "50px",
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
            className="mb-5 ml-16 h-15 w-15"
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

const Items = () => (
  <div className="container flex md:flex-row flex-col">
    <div className="font-bold text-xl flex items-center">
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

    <div className="container flex md:flex-row flex-col">
      <div className="font-bold text-lg flex items-center">
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
