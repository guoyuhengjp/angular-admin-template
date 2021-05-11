export interface TabItem {
  title: string;
  module: string;
  power: string;
  isSelect: boolean;
}

export const HomePage: TabItem = {
  title: 'dashboard',
  module: '/dashboard/home',
  power: '',
  isSelect: true
};
