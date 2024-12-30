import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DOSSIER_IMPORTATION_DETAILS_ROUTE } from "../../constants/routerConstants";
import DFButton from "./DFButton";
import DFDataGrid from "./DFDataGrid";
import DFDynamicForm from "./DFForm";
import DFGrid from "./DFGrid";
import PaperCustomized from "./PaperCustomized";

const DFPageDefault = ({ children, ...props }) => {
  const {
    formik,
    formikProps,
    title,
    titleIcon,
    navActions,
    trace,
    //loaDFng,
    tableProps,
  } = props;

  const {
    innerRef,
    enableReinitialize,
    initialValues,
    //validationSchema,
    onSubmit,
  } = formikProps || {};

  const {
    rows,
    rowCount,
    columns,
    loading,
    setPagination,
    pagination,
    page,
    pageSize,
    paginationMode,
    isCheckedColumn,
    fetchDataApi,
    onPageChange,
    actions,
    checkboxSelection,
  } = tableProps || {};

  // Function to handle row click
  const [rowsWithAction, setRowsWithAction] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setRowsWithAction(rows);
  }, [rows]);
  const handleRowClick = (params) => {
    navigate(`${DOSSIER_IMPORTATION_DETAILS_ROUTE}?id=${params.row.id}`);
  };

  const currentTheme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <DFGrid container spacing={2}>
        <DFGrid item xs={12}>
          <PaperCustomized forActions={true}>{navActions}</PaperCustomized>
        </DFGrid>
        <DFGrid item xs={12}>
          <PaperCustomized title="Recherche" forActions={false}>
            <DFDynamicForm
              initialValues={initialValues}
              name={"form_search"}
              handleSubmit={onSubmit}
            >
              {children}
              <ButtonSearch />
            </DFDynamicForm>
          </PaperCustomized>
        </DFGrid>
        <DFGrid item xs={12}>
          <PaperCustomized
            title="Liste des dossiers d'importation"
            forActions={false}
          >
            <DFDataGrid
              columns={columns}
              rows={rowsWithAction}
              totalElements={rowCount}
              pageSizeOptions={[10, 25, 50, 100]}
              onDensityChange={() => {}}
              loading={loading}
              paginationMode="server"
              paginationModel={pagination}
              setPaginationModel={(newPage) => {
                if (newPage.page !== NaN) {
                  setPagination(newPage);
                }
              }}
              actions={actions}
              checkboxSelection={checkboxSelection}
              /*isSlots={false}
              isFooter={false}*/
              noDataHeight="400px"
              cursor="auto"
              onClickRow={(params, event) => {
                if (!event.ignore) {
                  handleRowClick(params);
                }
              }}
            />
          </PaperCustomized>
        </DFGrid>
      </DFGrid>
    </Box>
  );
};

const ButtonSearch = (props) => {
  return (
    <DFGrid item xs={12} sx={{ marginTop: "16px", textAlign: "right" }}>
      <DFButton
        type="submit"
        title="Rechercher"
        color="primary"
        variant="contained"
        {...props}
      />
    </DFGrid>
  );
};

export default DFPageDefault;
