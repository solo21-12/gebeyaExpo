import { Hero as HeroType } from "@/types/homePage";
import {
  BsFacebook,
  BsFillFlagFill,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdPrecisionManufacturing } from "react-icons/md";

export const HeroData: HeroType = {
  smallLable: "Ministry of Urban and Infrastructure Present you",
  ExpoName: "Gebeya",
  Expo: "Xpo",
  decription:
    "Where Innovation Meets Brilliance Find new business opportunities in Ethiopia’s USD 41 billion market.",
  imageUrl: "/herobanner.png",
  imageUrlMob: "/heromob.png",
  backGroundImage: "/logo-08.png",
};

export const VideoData = {
  videoId: "KKQb0YBF890",
};

export const WhyExibitData = {
  expoName: "GebeyaXpo",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate quia reiciendis quasi,",
  resones: [
    {
      id: "res-1",
      label: "EXPAND YOUR BUSINESS",
      imageUrl: "/market1.avif",
    },
    {
      id: "res-2",
      label: "SHOWCASE YOUR PRODUCTS",

      imageUrl: "/market2.avif",
    },
    {
      id: "res-3",
      label: "MEET SERIOUS BUYERS",
      imageUrl: "/market3.avif",
    },
    {
      id: "res-4",
      label: "GENERATE QUALITY LEADS",
      imageUrl: "/market4.avif",
    },
  ],
};

export const PhotoGalleryData = ["/image1.png", "/image2.png", "/image3.png"];

export const PartnersData = [
  {
    logo: "/partner1.webp",
    partnerLevel: "Golden",
  },
  {
    logo: "/partner2.webp",
    partnerLevel: "Golden",
  },
  {
    logo: "/partner3.png",
    partnerLevel: "Golden",
  },
  {
    logo: "/partner4.png",
    partnerLevel: "Golden",
  },
  {
    logo: "/partner5.jpg",
    partnerLevel: "Golden",
  },
  {
    logo: "/partner6.png",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2020/02/ufi-1.jpg",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2020/02/aeo-1.jpg",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2023/04/309397706_157258823656499_8651497195518588468_n.jpg",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2023/04/Ethiopian-Skylight-Logo-1.png",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2020/02/dmg-events-logo-colour-300x46-1.jpg",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2023/04/Logo.jpg",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2021/06/CIOB_DIGITAL_LOGO_BLUE_RGB.png",
    partnerLevel: "Golden",
  },
  {
    logo: "https://www.thebig5constructethiopia.com/wp-content/uploads/sites/5/2023/05/OSH-Association.png",
    partnerLevel: "Golden",
  },
];

export const OfficeData = {
  backGroundImage: "/logo-08.png",
  Data: [
    {
      location: "Bole Rwanda,Addis Ababa",
      phone: ["+2512345678", "+2512345678"],
    },
    {
      location: "Bole Rwanda,Addis Ababa",
      phone: ["+2512345678", "+2512345678"],
    },
  ],
};

export const MoreFactData = {
  backGroundImage: "/logo-08.png",
  Data: [
    {
      Icon: <MdPrecisionManufacturing />,
      number: 180,
      lable: "Exhibitors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores atque omnis cupiditate inventore quod unde sapiente",
    },
    {
      Icon: <BsFillFlagFill />,
      number: 30,
      lable: "Countries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores atque omnis cupiditate inventore quod unde sapiente",
    },
    {
      Icon: <FiUsers />,
      number: 5000,
      lable: "Visitors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores atque omnis cupiditate inventore quod unde sapiente",
    },
  ],
};

export const SocialLinks = [
  {
    Icon: <BsFacebook />,
    path: "/",
  },
  {
    Icon: <BsInstagram />,
    path: "/",
  },
  {
    Icon: <BsLinkedin />,
    path: "/",
  },
  {
    Icon: <BsTelegram />,
    path: "/",
  },
];

export const FooterLinks = {
  ExpoName: "GebeyaXpo",
  year: 2023,
  Data: [
    {
      title: "Useful Links",
      links: [
        {
          name: "Visitor",
          link: "/visitor/",
        },
        {
          name: "Exibitors",
          link: "/exibitors/",
        },
        {
          name: "Create",
          link: "/create/",
        },
        {
          name: "Media & Press",
          link: "/Media-press/",
        },
        {
          name: "Terms & Services",
          link: "/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "/help-center/",
        },
        {
          name: "Partners",
          link: "/partners/",
        },
        {
          name: "Blog",
          link: "/blog/",
        },
        {
          name: "Newsletters",
          link: "/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "/become-a-partner/",
        },
      ],
    },
  ],
};
