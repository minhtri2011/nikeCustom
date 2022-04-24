import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import LoginReducer from 'pages/Login/module/LoginSlice';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware= createSagaMiddleware();
export const store = configureStore({
  reducer: {
    LoginReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
