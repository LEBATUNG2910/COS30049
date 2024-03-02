import React from "react";
import { Link } from "react-router-dom";
{/* Trade Token 1 */}
const Item = ({ title, content, imageSrcArray, borderRadius }) => (
  <div
  className="item text-black lg:m-5 m-0 w-max lg:mr-0 mr-4 justify-center items-center "
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
            className="mb-5 lg:ml-10 lg:mr-7 lg:h-15 lg:w-15 ml-5 mr-6 items-center"
          />
        ))}
      </div>
    )}
    <h2 className="flex text-center">{title}</h2>
    <Link to="/Token">
      <p className="flex justify-center text-purple-700 text-2xl">{content}</p>
    </Link>
  </div>
);
{/* Trade NFTs 1 */}
const Itemm = ({ title, content, imageSrcArray, borderRadius }) => (
 <div
    className="item text-black lg:m-5 m-0 w-max lg:mr-0 mr-2 "
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
            className="mb-5 lg:ml-10 lg:mr-7 lg:h-15 md:w-15 ml-5 mr-6"
          />
        ))}
      </div>
    )}
    <h3 className="flex text-center">{title}</h3>
    <Link to="/NFTs">
      <p className="flex justify-center text-purple-700 text-2xl">{content}</p> 
    </Link>
  </div>
);
{/* Trade  2 */}
const Items = () => (
  <div className="container flex xl:flex-row flex-col justify-center">
    {/* Trade Tokens */}
    <div className="font-bold text-base xl:text-xl flex items-center justify-center xl:pr-20">
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
  
    {/* Trade NFTs */}
    <div className="font-bold text-lg flex items-center justify-center">
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
);

export default Items;

