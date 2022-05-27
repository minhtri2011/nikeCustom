import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import OderReducer from "pages/Dashboard/Oder/module/OderSlice";
import ProductReducer from "pages/Dashboard/Product/module/ProductSlice";
import UserReducer from "pages/Dashboard/User/module/UserSlice";
import LoginReducer from "pages/Login/module/LoginSlice";
import createSagaMiddleware from "redux-saga";
import ThemeReducer from "theme/module/themeSlice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    ThemeReducer,
    LoginReducer,
    UserReducer,
    ProductReducer,
    OderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
