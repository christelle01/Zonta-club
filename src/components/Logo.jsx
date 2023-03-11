import PropTypes from "prop-types";
import { Box } from "@mui/material";
import React from "react";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      alt="logo"
      src="https://www.zonta.org/images/Online/zontalogosm.png"
      height={110}
      {...sx}
    />
  );
}
