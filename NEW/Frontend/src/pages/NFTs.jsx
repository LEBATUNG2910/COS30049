import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data"; // Import data from data.js
import { nft as nftData } from "./nft"; // Rename imported variable to avoid conflict

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
    <div className="bg-black">
      <div className="overflow-hidden md:h-fit">
        <div className="md:overflow-hidden flex md:items-start bg-[#000000] md:h-screen text-white md:flex-row flex-col">
          <div className="md:flex md:w-1/2 md:items-start md:p-2 md:ml-40 md:justify-center md:max-w-lg md:text-justify md:mt-40 items-center">
            <h1 className="md:mt-4 md:text-6xl text-4xl mt-6">
              <strong className="">
                Better prices. <br /> More listings.{" "}
              </strong>
            </h1>
          </div>

          <div className="md:flex md:w-1/2 md:flex-col flex-col md:items-center md:justify-center md:mt-0 mt-18">
            <Slider {...settings} className="w-11/12  ">
              {/* Image 1*/}
              <div className="ml-40">
                <img
                  src="./images/m3.jpg"
                  alt="user"
                  className="mt-28 w-7/12 h-auto flex-shrink-0 rounded-t-lg z-0 opacity-60"
                />

                <div className="md:text-center md:text-base text-base font-sans md:w-7/12 text-center  z-10  rounded-b-lg bg-white text-slate-500  ">
                  <div className="grid md:grid-cols-3 grid-rows-2 grid-cols-3 pt-2 pb-2 items-center text">
                    <div>Bitwalls</div>
                    <div>2,8 ETH Floor</div>
                    <div>198 Listings</div>
                    <div>OpenSea</div>
                    <div>2,8 ETH</div>
                    <div>135</div>
                    <div>X2Y2</div>
                    <div>-</div>
                    <div>None</div>
                    <div>LooksRare</div>
                    <div>-</div>
                    <div>None</div>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="ml-40">
                <img
                  src="./images/m6.png"
                  alt="user"
                  className="mt-28 w-7/12 h-auto flex-shrink-0 rounded-t-lg z-0 opacity-60"
                />

                <div className="md:text-center md:text-base text-base font-sans md:w-7/12 text-center  z-10  rounded-b-lg bg-white text-slate-500  ">
                  <div className="grid md:grid-cols-3 grid-rows-2 grid-cols-3 pt-2 pb-2 items-center text">
                    <div>Bitwalls</div>
                    <div>2,8 ETH Floor</div>
                    <div>198 Listings</div>
                    <div>OpenSea</div>
                    <div>2,8 ETH</div>
                    <div>135</div>
                    <div>X2Y2</div>
                    <div>-</div>
                    <div>None</div>
                    <div>LooksRare</div>
                    <div>-</div>
                    <div>None</div>
                  </div>
                </div>
              </div>

              {/* Image 3 */}
              <div className="ml-40">
                <img
                  src="./images/m7.png"
                  alt="user"
                  className="mt-28 w-7/12 h-auto flex-shrink-0 rounded-t-lg z-0 opacity-60"
                />

                <div className="md:text-center md:text-base text-base font-sans md:w-7/12 text-center  z-10  rounded-b-lg bg-white text-slate-500  ">
                  <div className="grid md:grid-cols-3 grid-rows-2 grid-cols-3 pt-2 pb-2 items-center text">
                    <div>Bitwalls</div>
                    <div>2,8 ETH Floor</div>
                    <div>198 Listings</div>
                    <div>OpenSea</div>
                    <div>2,8 ETH</div>
                    <div>135</div>
                    <div>X2Y2</div>
                    <div>-</div>
                    <div>None</div>
                    <div>LooksRare</div>
                    <div>-</div>
                    <div>None</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="md:flex md:w-full md:flex-row md:items-center md:ml-0 md:mt-0 mt-18 bg-black md:pl-56 md:pb-6">
          <strong>
            <h2 className="text-white text-5xl pt-2">
              Trending NFT collections
            </h2>
          </strong>
        </div>
        <div className="bg-black h-auto pb-4">
          <input
            className="border-2 p-1.5 rounded-xl md:w-2/5 w-1/2 bg-black text-white transition mx-auto block"
            placeholder="Search tokens and NFT collections"
            onChange={(e) => setSearchNFT(e.target.value)}
          />
        </div>
      </div>

      {/* NFTs */}
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
            <h3 className="nfts name">{nft.name}</h3>
            <h3 className="nfts id">{nft.id}</h3>

            <div className="flex items-center">
              <img
                src="./images/ethereum.png"
                alt="Ethereum Icon"
                className="mr-1 w-5 h-5 flex-shrink-0"
              />
              <h3 className="etherium number">{nft.number}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div> 

 

      {/* Transaction History Section */}
      {showTransactionHistory && (
        <div>
          {/* History Search */}
          <div className="md:flex md:w-full md:flex-row md:items-center md:ml-0 md:mt-0 mt-18 bg-black md:pl-56 md:pb-6">
            <strong>
              <h2 className="text-white text-5xl pt-10">Transaction History</h2>
            </strong>
          </div>
          <div className="bg-black h-auto pb-4">
            <input
              className="border-2 p-1.5 rounded-xl md:w-2/5 w-1/2 bg-black text-white transition mx-auto block"
              placeholder="Search transaction history"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
 
          {/* Display Buying History */}
          <div className="bg-black text-white items-center flex flex-col justify-center">
            <strong className="text-center text-2xl bg-black pt-6">
              Buying History
            </strong>
            {filteredHistory.length > 0 ? (
              <div className="flex justify-center">
                <table striped bordered hover className="text-red-600 text-xl">
                  <thead>
                    <tr>
                      <th className=" text-pink-500">Nfts ID</th>
                      <th className=" text-pink-500">Date</th>
                      <th className=" text-pink-500">From</th>
                      <th className=" text-pink-500">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHistory.map((contact, index) => (
                      <tr key={index}>
                        <td className="px-4">{contact.buyID}</td>
                        <td className="px-4">{contact.date}</td>
                        <td className="px-4">{contact.from}</td>
                        <td className="px-4">{contact.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>No information found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NFTs;
