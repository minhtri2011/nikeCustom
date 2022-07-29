import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import CartReducer from "pages/Cart/module/cartSlice";
import OderReducer from "pages/Dashboard/Oder/module/OderSlice";
import ProductReducer from "pages/Dashboard/Product/module/ProductSlice";
import UserReducer from "pages/Dashboard/User/module/UserSlice";
import LoginReducer from "pages/Login/module/LoginSlice";
import OrderUserReducer from "pages/OrdersUser/module/OrderUserSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import ThemeReducer from "theme/module/themeSlice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["CartReducer", "LoginReducer"],
};
const rootReducer = combineReducers({
  ThemeReducer,
  LoginReducer,
  UserReducer,
  ProductReducer,
  OderReducer,
  CartReducer,
  OrderUserReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  devTools:false,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
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
