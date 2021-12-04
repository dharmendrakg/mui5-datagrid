import { configureStore } from '@reduxjs/toolkit';

import { faucetListSlice } from './slices/faucetListSlice';

export const store = configureStore({
  reducer: {
    faucetList: faucetListSlice.reducer,
  },
});