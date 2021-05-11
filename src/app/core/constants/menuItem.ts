export interface MenuItem {
  module: string;
  children?: Array<MenuItem>;
  label: string;
  isGroup?: boolean;
  icon: string;
  isOpen: boolean;
}


export const Menus: Array<MenuItem> = [
  {
    label: 'dashboard',
    module: '/dashboard/home',
    icon: 'home',
    isOpen: false
  }
];
