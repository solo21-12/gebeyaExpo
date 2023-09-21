"use client";
import { SocialLinks } from "@/types/exhibitor";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import {
  BsTelegram,
  BsTiktok,
  BsTv,
  BsWebcam,
  BsLinkedin,
} from "react-icons/bs";

type Props = {
  socila: SocialLinks;
};

type Data = {
  Icons: ReactNode;
  link: string;
};

const Socials = {
  youTubeLink: {
    link: "",
    Icons: <AiFillYoutube />,
  },
  tikTokLink: {
    link: "",
    Icons: <BsTiktok />,
  },
  telegramChannel: {
    link: "",
    Icons: <BsTelegram />,
  },
  websiteLink: {
    link: "",
    Icons: <BsWebcam />,
  },
  linkedinLink: { link: "", Icons: <BsLinkedin /> },
  tvChannelName: { link: "", Icons: <BsTv /> },
  faceBookLink: { link: "", Icons: <AiFillFacebook /> },
  instagram: { link: "", Icons: <AiFillInstagram /> },
};

const AppSocial: React.FC<Props> = ({ socila }) => {
  const [data, setData] = useState<Data[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const setSocial = useCallback(() => {
    let a = [];
    for (let item in socila) {
      // @ts-ignore
      if (socila[item]) {
        // @ts-ignore
        Socials[item].link = socila[item];
        // @ts-ignore
        a.push(Socials[item]);
      }
    }
    setData(a);
  }, []);

  useEffect(() => {
    setSocial();
  }, []);

  return (
    <div className=" flex text-[14px] sm:text-[16px] md:text-xl lg:text-2xl text-gray-500 items-center mt-2 lg:mt-5">
      {data.map((item, index) => (
        <a target="_blank" href={item.link} key={item.link}>
          <div
            className={`hover:text-BlueLight hover:scale-105 cursor-pointer ${
              index < 3 ? "block mr-3" : "hidden"
            }`}
          >
            {item.Icons}
          </div>
          <div
            className={`hover:text-BlueLight hover:scale-105 cursor-pointer ${
              index > 3 && show ? "block mr-3" : "hidden"
            }`}
          >
            {item.Icons}
          </div>
        </a>
      ))}
      <p
        className=" text-[16px] hover:text-BlueLight hover:scale-105 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {show ? "Less-" : "More+"}
      </p>
    </div>
  );
};

export default AppSocial;
