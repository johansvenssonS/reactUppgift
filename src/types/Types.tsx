export interface AboutCardDetails {
  title: string;
  lineOne: string;
  lineTwo: string;
  lineThree: string;
}

export interface Users {
  users: Array<UserData>;
}

export interface UserData {
  id: number;
  profile: UserProfile;
  roles: Array<string>;
  settings: UserSettings;
  username: string;
}

interface UserSettings {
  notifications: UserNotifications;
  theme: string;
}

interface UserProfile {
  address: UserAddress;
  email: string;
  name: string;
}

export interface UserAddress {
  city: string;
  street: string;
  zipCode: string;
  lat: number;
  lng: number;
}

interface UserNotifications {
  email: boolean;
  push: boolean;
}

export interface SearchBarProp {
  searchUser: Function;
}
