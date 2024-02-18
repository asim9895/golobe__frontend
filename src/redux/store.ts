import { combineReducers, applyMiddleware, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers: any = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "golobe-root",
  storage,
  whitelist: ["user"],
};

const persistedReducer: any = persistReducer(persistConfig, rootReducers);

export const store: any = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
