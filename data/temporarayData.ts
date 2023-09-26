import { ExhibitorsDataType, Notification } from "@/types/exhibitor";
export let notification: Notification[] = [
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
    title: "Welcome to GebeyXpo",
    source: 1,
    link: "",
    destionation: 1,
    seen: false,
    date: "1hr",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
    title: "Please complete your profile to procced to next step",
    source: 1,
    link: "",
    destionation: 1,
    seen: false,
    date: "2hr",
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
    title: "Pay your rent",
    source: 1,
    link: "",
    destionation: 1,
    seen: true,
    date: "1d",
  },
];
let ExhibitorsData: ExhibitorsDataType[] = [
  {
    id: 1,
    businessName: "Solo Inc",
    notificationCount: notification.filter(
      (item) => item.destionation == 1 && item.seen == false
    ).length,
    DescriptionOfBusiness:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
    email: "example@gmail.com",
    rentedBooth: "10A ",
    image: "/partner1.webp",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur",
    address: [
      {
        phone: "+25191234567",
        telephone: "+2519123654",
        city: "Addis Ababa",
        country: "Ethiopi",
        streetNumber: "123665",
        zipCode: "23231",
      },
    ],
    products: [
      {
        title: "Product one",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
        id: "product-one",
        image: "/d1.png",
        categorie: ["Auto", "Car", "Automobile"],
      },
      {
        title: "Product two",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
        id: "product-two",
        image: "/eth6.png",
        categorie: ["Auto"],
      },
      {
        title: "Product three",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
        id: "product-three",
        image: "/gabi10.png",
        categorie: ["Construction"],
      },
      {
        title: "Product four",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
        id: "product-four",
        image: "/p4.png",
        categorie: ["Construction"],
      },
      {
        title: "Product five",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
        id: "product-five",
        image: "/p18.png",
        categorie: ["Food"],
      },
      {
        title: "Product six",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
        id: "product-six",
        image: "/p14.png",
        categorie: ["Food"],
      },
      {
        title: "Product seven",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
        id: "product-seven",
        image: "/p12.png",
        categorie: ["Beauty"],
      },
    ],
    social: {
      youTubeLink: "www.youtube.com",
      tikTokLink: "www.tiktok.com",
      telegramChannel: "www.telegram.com",
      websiteLink: "www.solo.com",
      linkedinLink: "www.linkdin.com",
      tvChannelName: "www.solo.tv",
      faceBookLink: "www.fb.com",
      instagram: "www.instagram.com",
    },
    teams: [
      {
        id: 1,
        firstName: "Dawit Abraham",
        lastName: "Beyene",
        middleName: "",
        jobTitle: "React Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkedinLink: "https://www.linkdin.com",
        telegramLink: "https://www.linkdin.com",
        facebookLink: "https://www.linkdin.com",
        image: "/p10.png",
      },
      {
        id: 2,
        firstName: "Bruik Abraham",
        lastName: "Beyene",
        middleName: "",
        jobTitle: "CEO",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkedinLink: "https://www.linkdin.com",
        telegramLink: "https://www.linkdin.com",
      },
      {
        id: 3,
        firstName: "Jhon Dhoy",
        lastName: "Lojjo",
        middleName: "",
        jobTitle: "Manager",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkedinLink: "https://www.linkdin.com",
        facebookLink: "https://www.linkdin.com",
        image: "/p15.png",
      },
      {
        id: 4,
        firstName: "Dawit Abraham",
        lastName: "Beyene",
        middleName: "",
        jobTitle: "React Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkedinLink: "https://www.linkdin.com",
        telegramLink: "https://www.linkdin.com",

        image: "/p10.png",
      },
      {
        id: 5,
        firstName: "Bruik Abraham",
        lastName: "Beyene",
        middleName: "",
        jobTitle: "CEO",
        facebookLink: "https://www.linkdin.com",

        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkedinLink: "https://www.linkdin.com",
      },
      {
        id: 6,
        firstName: "Jhon Dhoy",
        lastName: "Lojjo",
        middleName: "",
        jobTitle: "Manager",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkedinLink: "https://www.linkdin.com",
        image: "/p15.png",
      },
      // {
      //   id: 7,
      //   firstName: "Dawit Abraham",
      //   lastName: "Beyene",
      //   middleName: "",
      //   jobTitle: "React Developer",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      //   image: "/p10.png",
      // },
      // {
      //   id: 8,
      //   firstName: "Bruik Abraham",
      //   lastName: "Beyene",
      //   middleName: "",
      //   jobTitle: "CEO",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      // },
      // {
      //   id: 9,
      //   firstName: "Jhon Dhoy",
      //   lastName: "Lojjo",
      //   middleName: "",
      //   jobTitle: "Manager",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      //   image: "/p15.png",
      // },
      // {
      //   id: 10,
      //   firstName: "Dawit Abraham",
      //   lastName: "Beyene",
      //   middleName: "",
      //   jobTitle: "React Developer",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      //   image: "/p10.png",
      // },
      // {
      //   id: 11,
      //   firstName: "Bruik Abraham",
      //   lastName: "Beyene",
      //   middleName: "",
      //   jobTitle: "CEO",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      // },
      // {
      //   id: 12,
      //   firstName: "Jhon Dhoy",
      //   lastName: "Lojjo",
      //   middleName: "",
      //   jobTitle: "Manager",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      //   image: "/p15.png",
      // },
      // {
      //   id: 13,
      //   firstName: "Dawit Abraham",
      //   lastName: "Beyene",
      //   middleName: "",
      //   jobTitle: "React Developer",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      //   image: "/p10.png",
      // },
      // {
      //   id: 14,
      //   firstName: "Bruik Abraham",
      //   lastName: "Beyene",
      //   middleName: "",
      //   jobTitle: "CEO",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      // },
      // {
      //   id: 15,
      //   firstName: "Jhon Dhoy",
      //   lastName: "Lojjo",
      //   middleName: "",
      //   jobTitle: "Manager",
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   linkedinLink: "www.linkdin.com",
      //   image: "/p15.png",
      // },
    ],
  },
  // {
  //   id: 2,
  //   businessName: "eTech Inc",
  //   notificationCount: 2,

  //   DescriptionOfBusiness:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //   email: "example@gmail.com",
  //   rentedBooth: "10A ",
  //   image: "/partner2.webp",
  //   shortDescription:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur",
  //   address: [
  //     {
  //       phone: "+25191234567",
  //       telephone: "+2519123654",
  //       city: "Addis Ababa",
  //       country: "Ethiopi",
  //       streetNumber: "123665",
  //       zipCode: "23231",
  //     },
  //   ],
  //   products:
  //   [
  //     {
  //       title: "Product one",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/d1.png",
  //       categorie: [
  //         {
  //           title: "category one",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product two",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/eth6.png",
  //       categorie: [
  //         {
  //           title: "category one",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product three",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/gabi10.png",
  //       categorie: [
  //         {
  //           title: "category two",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product four",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p4.png",
  //       categorie: [
  //         {
  //           title: "category two",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product five",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p18.png",
  //       categorie: [
  //         {
  //           title: "category three",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product six",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p14.png",
  //       categorie: [
  //         {
  //           title: "category three",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product seven",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p12.png",
  //       categorie: [
  //         {
  //           title: "category four",
  //         },
  //       ],
  //     },
  //   ],
  //   social: {
  //     youTubeLink: "www.youtube.com",
  //     tikTokLink: "www.tiktok.com",
  //     telegramChannel: "www.telegram.com",
  //     websiteLink: "www.solo.com",
  //     linkedinLink: "www.linkdin.com",
  //     tvChannelName: "www.solo.tv",
  //     faceBookLink: "www.fb.com",
  //     instagram: "www.instagram.com",
  //   },
  //   teams: [
  //     {
  //       firstName: "Dawit Abraham",
  //       lastName: "Beyene",
  //       middleName: "",
  //       jobTitle: "React Developer",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //       image: "/p10.pnj",
  //     },
  //     {
  //       firstName: "Bruik Abraham",
  //       lastName: "Beyene",
  //       middleName: "",
  //       jobTitle: "CEO",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //     },
  //     {
  //       firstName: "Jhon Dhoy",
  //       lastName: "Lojjo",
  //       middleName: "",
  //       jobTitle: "Manager",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //       image: "/p15.pnj",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   businessName: "B & B Construction",
  //   DescriptionOfBusiness:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //   email: "example@gmail.com",
  //   notificationCount: 2,

  //   rentedBooth: "10A ",
  //   image: "/partner3.png",
  //   shortDescription:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur",
  //   address: [
  //     {
  //       phone: "+25191234567",
  //       telephone: "+2519123654",
  //       city: "Addis Ababa",
  //       country: "Ethiopi",
  //       streetNumber: "123665",
  //       zipCode: "23231",
  //     },
  //   ],
  //   products: [
  //     {
  //       title: "Product one",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/d1.png",
  //       categorie: [
  //         {
  //           title: "category one",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product two",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/eth6.png",
  //       categorie: [
  //         {
  //           title: "category one",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product three",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/gabi10.png",
  //       categorie: [
  //         {
  //           title: "category two",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product four",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p4.png",
  //       categorie: [
  //         {
  //           title: "category two",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product five",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p18.png",
  //       categorie: [
  //         {
  //           title: "category three",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product six",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p14.png",
  //       categorie: [
  //         {
  //           title: "category three",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product seven",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p12.png",
  //       categorie: [
  //         {
  //           title: "category four",
  //         },
  //       ],
  //     },
  //   ],
  //   social: {
  //     youTubeLink: "www.youtube.com",
  //     tikTokLink: "www.tiktok.com",
  //     telegramChannel: "www.telegram.com",
  //     websiteLink: "www.solo.com",
  //     linkedinLink: "www.linkdin.com",
  //     tvChannelName: "www.solo.tv",
  //     faceBookLink: "www.fb.com",
  //     instagram: "www.instagram.com",
  //   },
  //   teams: [
  //     {
  //       firstName: "Dawit Abraham",
  //       lastName: "Beyene",
  //       middleName: "",
  //       jobTitle: "React Developer",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //       image: "/p10.pnj",
  //     },
  //     {
  //       firstName: "Bruik Abraham",
  //       lastName: "Beyene",
  //       middleName: "",
  //       jobTitle: "CEO",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //     },
  //     {
  //       firstName: "Jhon Dhoy",
  //       lastName: "Lojjo",
  //       middleName: "",
  //       jobTitle: "Manager",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //       image: "/p15.pnj",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   businessName: "Flexy Telecom",
  //   DescriptionOfBusiness:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //   email: "example@gmail.com",
  //   rentedBooth: "10A ",
  //   notificationCount: 2,

  //   shortDescription:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur",
  //   address: [
  //     {
  //       phone: "+25191234567",
  //       telephone: "+2519123654",
  //       city: "Addis Ababa",
  //       country: "Ethiopi",
  //       streetNumber: "123665",
  //       zipCode: "23231",
  //     },
  //   ],
  //   products: [
  //     {
  //       title: "Product one",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/d1.png",
  //       categorie: [
  //         {
  //           title: "category one",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product two",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/eth6.png",
  //       categorie: [
  //         {
  //           title: "category one",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product three",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/gabi10.png",
  //       categorie: [
  //         {
  //           title: "category two",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product four",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p4.png",
  //       categorie: [
  //         {
  //           title: "category two",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product five",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p18.png",
  //       categorie: [
  //         {
  //           title: "category three",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product six",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p14.png",
  //       categorie: [
  //         {
  //           title: "category three",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product seven",
  //       description:
  //         "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in corporis facere ex perspiciatis rem beatae doloribus consequuntur, corrupti, eligendi nihil. Ipsum fugit praesentium cum nihil! Saepe earum eaque dolorum!",
  //       id: "product-one",
  //       image: "/p12.png",
  //       categorie: [
  //         {
  //           title: "category four",
  //         },
  //       ],
  //     },
  //   ],
  //   social: {
  //     youTubeLink: "www.youtube.com",
  //     tikTokLink: "",
  //     telegramChannel: "www.telegram.com",
  //     websiteLink: "www.solo.com",
  //     linkedinLink: "www.linkdin.com",
  //     tvChannelName: "www.solo.tv",
  //     faceBookLink: "www.fb.com",
  //     instagram: "www.instagram.com",
  //   },
  //   teams: [
  //     {
  //       firstName: "Dawit Abraham",
  //       lastName: "Beyene",
  //       middleName: "",
  //       jobTitle: "React Developer",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //       image: "/p10.png",
  //     },
  //     {
  //       firstName: "Bruik Abraham",
  //       lastName: "Beyene",
  //       middleName: "",
  //       jobTitle: "CEO",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //       image: "/p11.png",
  //     },
  //     {
  //       firstName: "Jhon Dhoy",
  //       lastName: "Lojjo",
  //       middleName: "",
  //       jobTitle: "Manager",
  //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //       linkedinLink: "www.linkdin.com",
  //       image: "/p15.png",
  //     },
  //   ],
  // },
];

export default ExhibitorsData;
