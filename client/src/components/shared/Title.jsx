import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Shiv chat",
  description = "this Chat App name is Shiv",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
