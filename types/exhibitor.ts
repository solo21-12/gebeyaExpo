export interface Address {
  phone: string;
  telephone?: string;
  city?: string;
  country?: string;
  streetNumber?: string;
  zipCode?: string;
}

export interface Teams {
  id?: number | string;
  firstName: string;
  lastName: string;
  middleName?: string;
  jobTitle: string;
  description: string;
  linkedinLink?: string;
  telegramLink?: string;
  facebookLink?: string;
  image?: string;
}

export interface Categories {
  title: string;
}

export interface Product {
  title: string;
  description: string;
  image?: string;
  categorie: string[];
  id: number | string;
}

export interface SocialLinks {
  youTubeLink?: string;
  tikTokLink?: string;
  telegramChannel?: string;
  websiteLink?: string;
  linkedinLink?: string;
  tvChannelName?: string;
  faceBookLink?: string;
  instagram?: string;
}

export interface Notification {
  id: number | string;
  title: string;
  description: string;
  link?: string;
  source: number | string;
  destionation: number | string;
  seen: boolean;
  date?: string;
}

export interface ExhibitorsDataType {
  id: number;
  businessName: string;
  shortDescription?: string;
  DescriptionOfBusiness: string;
  email: string;
  rentedBooth: string;
  image?: string;
  backgroundImage?: string;
  address: Address[];
  teams: Teams[];
  products: Product[];
  social: SocialLinks;
  notificationCount: number;
}
