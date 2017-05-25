import React from "react";
import Header from "../features/header";
import insertGlobalStyles from "../global/style/globalStyles";

insertGlobalStyles();

export const Main = props => <Header {...props} />;
