import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { XSGrid, XSIcon } from ".."; // Replace ".." with correct path to XSGrid and XSIcon components
import Indexation from "../../../pages/indexation/Indexation";
import Keyword from "../../../pages/indexation/KeyWord";
import TagKeys from "../../../pages/indexation/TagKeys";

const DFPdfEditor = ({ pdf, content, pagesCount }) => {
  const [loadingError, setLoadingError] = React.useState(false);
  const [actionActive, setActionActive] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [iframe, setIframe] = React.useState(null);
  const [zoomLevel, setZoomLevel] = React.useState(100);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [rotateAngle, setRotateAngle] = React.useState(0);
  const [activeNaveLeftSide, setActiveNaveLeftSide] = React.useState(false);

  const pdfUrl = React.useMemo(() => {
    return `${pdf}#toolbar=0&scrollbar=0&zoom=${zoomLevel},0,0&page=${pageNumber}&rotate=${rotateAngle}`;
  }, [pdf, zoomLevel, pageNumber, rotateAngle]);

  useEffect(() => {
    if (!iframe || !iframe.contentDocument || !iframe?.contentWindow?.document)
      return;

    let _document = iframe.contentDocument || iframe?.contentWindow?.document;
    let header = _document.querySelector("header");
    header?.remove();
    let footer = _document.querySelector("footer");
    footer?.remove();
  }, [iframe, pdf]);

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(50, prevZoomLevel - 100));
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => Math.min(600, prevZoomLevel + 100));
  };

  const handleRotateLeft = () => {
    setRotateAngle((prevRotateAngle) => (prevRotateAngle - 90 + 360) % 360);
  };

  const handleRotateRight = () => {
    setRotateAngle((prevRotateAngle) => (prevRotateAngle + 90) % 360);
  };

  const DocumentIcon = (props) => {
    const { id, xs, icon } = props;
    return (
      <XSGrid item xs={xs || 1} sx={{ marginLeft: "5px" }}>
        <XSIcon
          {...props}
          sx={{
            padding: "5px",
            border: actionActive === id && "1px solid gray",
            borderRadius: actionActive === id && "50%",
            backgroundColor: actionActive === id && "gray",
            "&:hover": {
              backgroundColor: "transparent",
              transition: "background-color 0.3s ease",
              border: "1px solid gray",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: "gray",
            },
          }}
          onClick={() => {
            if (id === 5) handleZoomOut(); // Zoom out action
            else if (id === 6) handleZoomIn(); // Zoom in action
            else if (id === 7) handleRotateLeft(); // Rotate left action
            else if (id === 8) handleRotateRight(); // Rotate right action
            else {
              setActionActive(id);
            }
          }}
        />
      </XSGrid>
    );
  };

  const toggleLeftNav = () => {
    setActiveNaveLeftSide((prevState) => !prevState);
  };

  return (
    <XSGrid container spacing={1}>
      {activeNaveLeftSide && (
        <XSGrid item xs={3}>
          <NavLeftSide actionActive={actionActive} />
        </XSGrid>
      )}
      <XSGrid item xs={activeNaveLeftSide ? 9 : 12}>
        <XSGrid container spacing={1}>
          <XSGrid item xs={12}>
            <XSGrid container spacing={1}>
              <XSGrid item xs={4}>
                <XSGrid container spacing={1}>
                  <DocumentIcon id={0} icon="FormatSizeIcon" />
                  <DocumentIcon id={1} icon="KeyIcon" />
                  <DocumentIcon id={2} icon="LabelIcon" />
                  <DocumentIcon id={3} icon="FolderIcon" />
                  <DocumentIcon id={4} icon="FlipCameraAndroidIcon" />
                </XSGrid>
              </XSGrid>
              <XSGrid item xs={4}>
                <XSGrid container spacing={1}>
                  <DocumentIcon id={5} icon="RemoveIcon" />
                  <DocumentIcon id={6} icon="AddIcon" />
                  <DocumentIcon id={7} icon="RotateLeftIcon" />
                  <DocumentIcon id={8} icon="RotateRightIcon" />
                  <XSGrid item xs={1}>
                    <input
                      type="number"
                      value={pageNumber}
                      style={{ marginLeft: "4px", width: "30px" }}
                      onChange={(e) => setPageNumber(e.target.value)}
                    />
                  </XSGrid>
                  <XSGrid item xs={1}>
                    <input
                      type="number"
                      value={pagesCount}
                      disabled
                      style={{ marginLeft: "16px", width: "30px" }}
                    />
                  </XSGrid>
                </XSGrid>
              </XSGrid>
              <XSGrid item xs={4}>
                <XSGrid container spacing={1}>
                  <DocumentIcon id={10} icon="BrushIcon" />
                  <DocumentIcon id={11} icon="BrushIcon" />
                  <DocumentIcon id={12} icon="BrushIcon" />
                  <DocumentIcon id={13} icon="BrushIcon" />
                  <DocumentIcon id={14} icon="BrushIcon" />
                </XSGrid>
              </XSGrid>
            </XSGrid>
          </XSGrid>
          <XSGrid item xs={12}>
            <>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "calc(100vh - 130px)",
                }}
              >
                <XSIcon
                  icon={
                    activeNaveLeftSide
                      ? "KeyboardDoubleArrowLeftIcon"
                      : "KeyboardDoubleArrowRightIcon"
                  }
                  onClick={toggleLeftNav}
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 1,
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    padding: "5px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "transparent",
                      transition: "background-color 0.3s ease",
                      border: "1px solid gray",
                    },
                  }}
                />
                <PdfViewer
                  pdfUrl={pdfUrl}
                  content={content}
                  setLoadingError={setLoadingError}
                  setLoading={setLoading}
                  setIframe={setIframe}
                  loadingError={loadingError}
                />
              </div>
            </>
          </XSGrid>
        </XSGrid>
      </XSGrid>
    </XSGrid>
  );
};

const PdfViewer = (props) => {
  const {
    pdfUrl,
    content,
    loadingError,
    setLoadingError,
    setLoading,
    setIframe,
  } = props;
  return (
    <Box>
      {loadingError ? (
        <div>Error: Failed to load PDF</div>
      ) : (
        <iframe
          key={pdfUrl} // Ensure iframe reloads when pdfUrl changes
          src={pdfUrl}
          style={{
            width: "100%",
            height: "calc(100vh - 130px)",
            border: "none",
            display: "block",
          }}
          onLoad={() => {
            setLoading(false);
            let _iframe = document.querySelector("iframe");
            setIframe(_iframe);
          }}
          onError={() => setLoadingError(true)}
        >
          {content}
        </iframe>
      )}
    </Box>
  );
};

const NavLeftSide = (props) => {
  const { pdfUrl, setPdfUrl, actionActive } = props;
  //const [activeAction, setActiveAction] = React.useState(0);

  switch (actionActive) {
    case 0:
      return <Indexation />;
    case 1:
      return <Keyword />;
    case 2:
      return <TagKeys />;
    case 3:
      return <></>;
    case 4:
      return <></>;
    case 5:
      return <></>;
    case 6:
      return <></>;
    case 7:
      return <></>;
    case 8:
      return <></>;
    case 9:
      return <></>;
    case 10:
      return <></>;
    case 11:
      return <></>;
    case 12:
      return <></>;
    case 13:
      return <></>;
    case 14:
      return <></>;
  }
};

export default DFPdfEditor;
