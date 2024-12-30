import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  frFR,
} from "@mui/x-data-grid";
import * as React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CollapsibleRow({ row, columns, renderDetails }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns.map((column) => (
          <TableCell key={column.field} align={column.align}>
            {row[column.field]}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={columns.length + 1}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            {renderDetails(row)}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const CustomToolbar = ({ onFilterClick, setDialogPosition }) => {
  const filterBtnRef = React.useRef(null);

  React.useEffect(() => {
    const updatePosition = () => {
      if (filterBtnRef.current) {
        const rect = filterBtnRef.current.getBoundingClientRect();
        setDialogPosition({
          left: rect.left + rect.width / 2 + window.scrollX,
          top: rect.top,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <Button onClick={onFilterClick} color="primary" ref={filterBtnRef}>
        <FilterListIcon />
        FILTRES
      </Button>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#e3e3e3",
    color: "#232f66",
  },
  "& .highlight-row": {
    fontSize: "12px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#e8e8e8 !important",
  },
  "& .row-font": {
    fontSize: "12px",
    backgroundColor: "white",
    cursor: "pointer",
    border: "none",
    "&:hover": {
      backgroundColor: "#e8e8e8 !important",
    },
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "white",
  },
  "& .MuiCircularProgress-root": {
    padding: 5,
    marginBottom: 4,
  },
  ".rowAction": {
    backgroundColor: "#e8e8e8",
    fontSize: "12px",
  },
}));

export default function TableCustomized({
  rows,
  totalElements,
  disabledToolBar = true,
  columns,
  rowHeight,
  collapsible = false,
  renderDetails,
  pageSizeOptions,
  onClickRow,
  paginationMode = "server",
  paginationModel,
  setPaginationModel,
  customInitialState = null,
  initialState = {
    pagination: {
      paginationModel: {
        page: 0,
        pageSize: customInitialState ? customInitialState : 10,
      },
    },
  },
  loading = false,
  isSlots = true,
  isFooter = true,
  noDataHeight = "250px",
  cursor = "pointer",
  onRowEnter = null,
  onRowLeave = null,
  gridRef = null,
  highlightRowId,
  onColumnVisibilityChange,
  density = "standard",
  onDensityChange,
  checkboxSelection = false,
  onFilterModelChange,
  filterMode = "server",
  onRowsSelectionHandler,
  filterModel = [],
}) {
  const dataGridHeight = rows?.length === 0 ? noDataHeight : "auto";
  const [dialogPosition, setDialogPosition] = React.useState();
  const [filterDialogOpen, setFilterDialogOpen] = React.useState(false);

  const handleFilterClick = () => {
    setFilterDialogOpen(true);
  };

  const handleClose = () => {
    setFilterDialogOpen(false);
  };

  const renderRow = collapsible
    ? (row) => (
        <CollapsibleRow
          key={row.id}
          row={row}
          columns={columns}
          renderDetails={renderDetails}
        />
      )
    : (row) => (
        <TableRow key={row.id}>
          {columns.map((column) => (
            <TableCell key={column.field} align={column.align}>
              {row[column.field]}
            </TableCell>
          ))}
        </TableRow>
      );

  return (
    <Box
      sx={{
        minHeight: "30%",
        height: "50%",
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "#e3e3e3",
          color: "#232f66",
          fontWeight: "bold",
          fontSize: "14px",
        },
        ".MuiDataGrid-root .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "bold",
        },
      }}
      ref={gridRef}
    >
      <StyledDataGrid
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        sx={{
          height: dataGridHeight,
          ".MuiDataGrid-row": {
            border: "none",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .row-font": {
            cursor: cursor,
            "&:hover": {
              backgroundColor: cursor === "pointer" ? "" : "white",
            },
          },
        }}
        onColumnVisibilityModelChange={onColumnVisibilityChange}
        density={density}
        onStateChange={(v) => {
          density !== v.density.value && onDensityChange(v.density.value);
        }}
        getRowClassName={(params) => {
          return `row-font ${
            params.id === highlightRowId ? "highlight-row" : ""
          }`;
        }}
        checkboxSelection={checkboxSelection}
        disableColumnMenu={true}
        //localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        // disableColumnFilter={disabledToolBar}
        disableRowSelectionOnClick
        rows={rows}
        rowCount={totalElements}
        columns={columns}
        rowHeight={rowHeight}
        hideFooter={!isFooter}
        initialState={initialState}
        pageSizeOptions={pageSizeOptions}
        {...(isSlots && {
          slots: { toolbar: GridToolbar },
          slotProps: {
            toolbar: {
              printOptions: { disableToolbarButton: true },
              csvOptions: { disableToolbarButton: true },
            },
          },
        })}
        //getRowId={(row) => row.id}
        onRowClick={onClickRow}
        paginationMode={paginationMode}
        paginationModel={paginationModel}
        // onFilterModelChange={onFilterModelChange}
        filterMode={filterMode}
        onPaginationModelChange={setPaginationModel}
        loading={loading}
        slots={{
          toolbar: !disabledToolBar && CustomToolbar,
        }}
        slotProps={{
          toolbar: {
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
            onFilterClick: handleFilterClick,
            setDialogPosition: setDialogPosition,
          },
          loadingOverlay: {
            sx: {
              backdropFilter: "blur(3px)",
            },
          },
          row: {
            onMouseEnter: onRowEnter,
            onMouseLeave: onRowLeave,
          },
        }}
        onRowSelectionModelChange={onRowsSelectionHandler}
        // filterModel={filterModel}
      />
      {/*<FilterDialog
        open={filterDialogOpen}
        onClose={handleClose}
        filterModel={filterModel}
        onFilterModelChange={onFilterModelChange}
        dialogPosition={dialogPosition}
      />*/}
    </Box>
  );
}
