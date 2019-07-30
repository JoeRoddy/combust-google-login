import React from "react";

import SocialLoginBtn from "./SocialLoginBtn";

const GoogleLoginBtn = ({ onLogin }) => (
  <SocialLoginBtn backgroundColor="#d62d20" type="Google" onLogin={onLogin} />
);

export default GoogleLoginBtn;
