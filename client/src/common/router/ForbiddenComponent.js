import React from "react";
import forbiddenImage from "../../asset/images/forbidden.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function ForbiddenComponent() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        width="50%"
        height="fit-content"
        style={{ selfAlign: "center" }}
        src={forbiddenImage}
      />
    </div>
  );
}
export default withRouter(ForbiddenComponent);
