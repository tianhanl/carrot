// urgent and important
export const UAI: string = 'UAI';
// urgent and not important
export const UANI: string = 'UANI';
// not urgent and important
export const NUAI: string = 'NUAI';
// not urgent and not important
export const NUANI: string = 'NUANI';

export interface Item {
  id: string;
  content: string;
}

export interface ListState {
  NUAI: Item[];
  UAI: Item[];
  UANI: Item[];
  NUANI: Item[];
}

export default {
  UAI,
  UANI,
  NUAI,
  NUANI
};
