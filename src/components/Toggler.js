import { func, string } from "prop-types";

import { Switch } from "@material-ui/core";
import React from "react";

const Toggle = ({ theme, toggleTheme }) => {
  return <Switch className="toggleBtn" onClick={toggleTheme} color="primary" />;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
