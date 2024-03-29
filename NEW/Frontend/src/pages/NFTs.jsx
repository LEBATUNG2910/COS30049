import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data"; // Import data from data.js
import { nft as nftData } from "./nft"; // Rename imported variable to avoid conflict
import Arrow from "../components/Arrow/Arrow";
import Buynow from "../components/Button/Buynow";
function NFTs() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState("");
  const [nftState, setNFTState] = useState(nftData); // Rename state variable to avoid conflict
  const [searchNFT, setSearchNFT] = useState(""); // Rename state variable to avoid conflict
  const [showTransactionHistory, setShowTransactionHistory] = useState(true); // Add state for transaction history

  // Filter function for NFTs
  const filteredNFTs = nftState.filter((nft) =>
    `${nft.name} ${nft.id} ${nft.number}`
      .toLowerCase()
      .includes(searchNFT.toLowerCase())
  );

  // Filter function for history
  const filteredHistory = contacts.filter((contact) =>
    `${contact.buyID} ${contact.date} ${contact.from} ${contact.to}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Function to handle button click for transaction history lookup
  const handleTransactionHistoryLookup = () => {
    // Toggle the state to show/hide transaction history
    setShowTransactionHistory(!showTransactionHistory);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-6xl text-white mt-20">
          <h1>
            <strong>
              Better prices. <br /> More listings.
            </strong>
          </h1>
        </div>
        <div className="mt-20 md:mx-auto ">
          <Arrow />
        </div>
      </div>
      <div className="text-white mt-20 flex items-center justify-center flex-col mx-auto ">
        <strong>
          <h2 className=" text-5xl mb-10 md:mx-auto ml-16  ">
            Trending NFT collections
          </h2>
        </strong>
        <input
          className="border-2 p-1.5 rounded-xl w-2/5  bg-black text-white   block"
          placeholder="Search tokens and NFT collections"
          onChange={(e) => setSearchNFT(e.target.value)}
        />
      </div>
      NFTs
      <div className="NFTs">
        {filteredNFTs.length === 0 ? (
          <div className="text-white text-center">No information found</div>
        ) : (
          <div className="grid md:grid-cols-4 grid-rows-3 grid-cols-2 gap-y-10 pt-7 items-center">
            {filteredNFTs.map((nft, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg ml-2"
              >
                <img
                  src={nft.image || ""}
                  alt={nft.name || ""}
                  className="w-1/2 h-auto flex-shrink-0 border-2 rounded p-1"
                />
                <div className="bg-slate-500 w-1/2 border-2 p-1">
                  <h3 className=" text-white font-bold">{nft.name}</h3>
                  <h3 className="text-white ">{nft.id}</h3>
                  <div className="flex items-center">
                    <img
                      src="./images/ethereum.png"
                      alt="Ethereum Icon"
                      className="mr-1 w-5 h-5 flex-shrink-0"
                    />
                    <h3 className="text-white font-bold">{nft.number}</h3>
                  </div>
                  <div>
                    <Buynow />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NFTs;
