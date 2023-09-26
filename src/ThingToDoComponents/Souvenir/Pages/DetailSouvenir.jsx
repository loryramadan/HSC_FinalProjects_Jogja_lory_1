import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import axiosSouvenir from "../../../API/apiSouvenir";

// import SouvenirButton from "../Components/SouvenirButton";

import ReuseNav from "../../../Components/ReuseableNav/ReuseNav";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import Footer from "/src/Components/Footer/Footer";
import AddToCartButton from "../../../Components/Atoms/AddToCartButton";
import ShareButton from "../../../Components/Atoms/ShareButton";


import axiosInstance from "../../../API/apiCall";

const DetailSouvenir = () => {
  const navigateToSouvenirPage = useNavigate();
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const callApi = async () => {
    axiosInstance.detail(id).then((res) => {
      const data = res[0];
      setDetail(data);
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="min-h-screen">
      <ReuseNav />
      <div className="w-screen h[80px] flex justify-end items-center py-4 gap-3 sm:pr-5">
        <div
          className="flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
          onClick={() => navigateToSouvenirPage("/things-to-do/souvenir-jogja")}
        >
          <button
            id="botbutton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1]"
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Souvenir Page</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 m-auto ">
        <div className="object-cover grid-cols-4 shrink-0 lg:grid-cols-12 min-w-fit">
          <img className="w-full" src={detail.src} alt="Souvenir" />
        </div>
        <div className="flex-col justify-start md:items-start w-full py-8 ">
          <div className="flex px-4 sm:px-6 md:px-8 justify-between">
            <p>Souvenir</p>
            <ShareButton />
          </div>
          <div className="max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <h1 className="my-4 text-5xl font-bold text-start font-lora">
              {detail.name}
            </h1>
          </div>
          <div className="flex flex-col max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <p className="mt-4 max-w-3x1 space-y-6">{detail.description}</p>
            <h3 className="mt-4 text-2xl">Rp. {detail.price}</h3>
          </div>
          <div className="mt-4 max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <Link to={"/cart-page/"}>
              <AddToCartButton />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default DetailSouvenir;
