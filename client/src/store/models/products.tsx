import { createModel } from '@rematch/core'
import { Dispatch } from 'redux';
import api from '../../api';

import type { RootModel } from '../models';

export type Attribute = {
  [key: string]: string
}

export type Product = {
  description: string,
  name: string,
  image: string,
  attributes: Attribute[]
}

type State = {
  loadingProduct: boolean,
  product: Product | null
}

const initialState: State = {
  loadingProduct: false,
  product: null,
};

export const products = createModel<RootModel>()({
  state: initialState,
  reducers: {
    reset:    () => initialState,
    setProduct: (state: State, payload: Product) => ({
      ...state,
      product: payload,
    }),
    setLoadingProduct: (state: State, payload: boolean) => ({
      ...state,
      loadingProduct: payload,
    }),
  },
  effects: (dispatch: Dispatch) => ({
    async getProduct(payload: string) {
      await dispatch.products.setLoadingProduct(true);
      const product: Product = await api.products.getProduct(payload);
      await dispatch.products.setProduct(product);
      await dispatch.products.setLoadingProduct(false);
    },
  }),
});
