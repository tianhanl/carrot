export const UAI: string = 'urgent_and_important';
export const UANI: string = 'urgent_and_not_important';
export const NUAI: string = 'not_urgent_and_important';
export const NUANI: string = 'not_urgent_and_not_important';

export interface Item {
  id: string;
  content: string;
}

export interface ListState {
  NUAI: [Item];
  UAI: [Item];
  UANI: [Item];
  NUANI: [Item];
}

export default {
  UAI,
  UANI,
  NUAI,
  NUANI
};
