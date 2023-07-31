import { NavList as NavListType } from "@/types/navbarlist";

export const NavList: NavListType[] = [
  {
    lable: "Home",
    path: "/",
  },
  {
    lable: "Exhibitors",
    options: [
      {
        lable: "Exibitor request",
        path: "/",
      },
      {
        lable: "Exhibitors list",
        path: "/",
      },
      {
        lable: "Exhibitors Portal",
        path: "/",
      },
    ],
  },
  {
    lable: "Media & press",
    options: [
      {
        lable: "Media badge request",
        path: "/",
      },
      {
        lable: "Media list",
        path: "/",
      },
      {
        lable: "Press release",
        path: "/",
      },
    ],
  },
  {
    lable: "Visitors",
    options: [
      {
        lable: "Visitor badge request",
        path: "/",
      },
      {
        lable: "Schedule Meetings",
        path: "/",
      },
    ],
  },
];
