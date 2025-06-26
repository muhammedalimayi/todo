// Redux Store Configuration
import { configureStore } from '@reduxjs/toolkit';

// Import slices here as you create them
// import authSlice from './slices/authSlice';
// import todoSlice from './slices/todoSlice';
// import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    // Add your slices here
    // auth: authSlice,
    // todos: todoSlice,
    // ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 