export interface PricingPack {
  id: string;
  name: string;
  jingleCount: number;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface DemoTrack {
  id: string;
  title: string;
  category: string;
  duration: string;
}

export interface ContactFormData {
  name: string;
  radio: string;
  email: string;
  phone: string;
  message: string;
}

export interface CallbackFormData {
  radioName: string;
  contactName: string;
  phoneNumber: string;
}