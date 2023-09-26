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
        path: "/exhibitor-register",
      },
      {
        lable: "Exhibitors list",
        path: "/exhibitor-public",
      },
      {
        lable: "Exhibitors Portal",
        path: "/exhibitor-portal/profile",
      },
    ],
  },
  {
    lable: "Media & press",
    options: [
      {
        lable: "Media badge request",
        path: "/media-badge-request",
      },
      {
        lable: "Media list",
        path: "/media-list",
      },
    ],
  },
  {
    lable: "Visitors",
    options: [
      {
        lable: "Visitor badge request",
        path: "/visitor-register",
      },
      {
        lable: "Schedule Meetings",
        path: "/book-meeting",
      },
    ],
  },
];
