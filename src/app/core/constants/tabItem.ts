export interface TabItem {
  title: string;
  module: string;
  power: string;
  isSelect: boolean;
}

export const HomePage: TabItem = {
  title: 'ホーム',
  module: '/dashboard/home',
  power: '',
  isSelect: true
};
