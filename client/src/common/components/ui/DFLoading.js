import PropTypes from "prop-types";
import React from "react";

const DFLoading = ({ open }) => {
  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "white",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* You can place your loading spinner or any loading animation here */}
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </>
  );
};

DFLoading.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default DFLoading;
