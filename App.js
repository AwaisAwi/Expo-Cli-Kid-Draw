import React, {Component} from 'react';
import {Provider} from "mobx-react";
import stores from "./app/src/mobx";
import App from "./app/App";

export default function AppProvider() {
  return (
    <Provider {...stores}>
      <App/>
    </Provider>
  );
}
