export interface MenuItem {
  module: string;
  children: Array<MenuItem>;
  label: string;
  isGroup?: boolean;
  icon: string;
  isOpen: boolean;
}


export const Menus: Array<MenuItem> = [
  // dashboard
  {
    label: 'ホーム',
    module: '/dashboard/home',
    icon: 'home',
    isOpen: false,
    children: []
  },
  {
    label: 'フォーム',
    module: undefined,
    icon: 'form',
    isOpen: false,
    isGroup: true,
    children: [
      {
        label: '基本フォーム',
        module: '/form/basic',
        icon: undefined,
        isOpen: false,
        children: []
      }
    ]
  }
];
