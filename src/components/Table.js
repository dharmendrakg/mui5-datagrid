import { useState, useEffect } from "react";
import {
  DataGrid,
  GridOverlay,
  useGridApiContext,
  useGridState,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from '@mui/material/LinearProgress';
import { IconButton, useMediaQuery, Pagination, Box, Stack, Chip, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import Link from "@/src/Link";
import { darken, lighten } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  getFaucetList,
  updateFavoriteSites,
  updateVisited,
  clearFavorite,
  liveEdit
} from "@/redux/slices/faucetListSlice";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ClearConfirmation from "./ClearConfirmation";
import EditableConfirmation from "./EditableConfirmation";

const useStyles = makeStyles((theme) => {
  const getBackgroundColor = (color) =>
    theme.palette.mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

  const getHoverBackgroundColor = (color) =>
    theme.palette.mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);
  return {
    root: {
      "& .super-app-theme--header": {
        backgroundColor: "rgb(193 191 191 / 55%)",
        "&:hover": {
          backgroundColor: "rgb(181 180 180 / 55%)",
        }
      },
      "& .super-app-theme--favorite": {
        backgroundColor: getBackgroundColor(theme.palette.info.main),
        "&:hover": {
          backgroundColor: getHoverBackgroundColor(theme.palette.info.main),
        },
      },
    },
  };
});

function renderIntakeType({ row }) {
  return <p>{row.type}</p>;
}

function renderDamage({ row }) {
  return <p>{row.cumulativeDamage || "-"}</p>;
}

function CustomPagination() {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);

  return (
    <Pagination
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

function CustomToolbar() {
  const dispatch = useDispatch();
  const {
    editable
  } = useSelector((state) => state.faucetList);
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <ClearConfirmation onConfirm={() => dispatch(clearFavorite())} />
      <EditableConfirmation onConfirm={() => dispatch(liveEdit(editable ? false : true))} />
    </GridToolbarContainer>
  );
}

export default function Table() {
  const [rows, setRows] = useState([]);
  const isDownSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const {
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    sites,
    selectedCoinSites,
    favoriteSites,
    visited,
    editable
  } = useSelector((state) => state.faucetList);
  const dispatch = useDispatch();
  const classes = useStyles();

  const buttonClickHandler = (e, row) => {
    dispatch(updateVisited(row));
  };

  const renderFavorite = ({ row }) => {
    const getFav = () => {
      if (favoriteSites.includes(row.id)) {
        return 1;
      } else {
        return 0;
      }
    };
    return (
      <Rating
        max={1}
        key={row.id}
        value={getFav()}
        onChange={(event, newValue) => {
          dispatch(updateFavoriteSites({ element: row.id, value: newValue }));
        }}
      />
    );
  };

  const renderVisit = ({ row }) => {
    return (
      <IconButton
        color={row.visited ? "error" : "success"}
        aria-label="Visit"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => buttonClickHandler(e, row)}
        href={row.link + "?r=EC-UserId-6449"}
      >
        <AirplanemodeActiveIcon />
      </IconButton>
    );
  };

  const renderPriority = ({ row }) => {
    let color = "primary";
    if(row.priority === "HIGH") {
      color = "error";
    } else if(row.priority === "MEDIUM") {
      color = "primary";
    } else if(row.priority === "LOW") {
      color = "success";
    } else {
      color = "secondary";
    }
    return (
      <Chip variant="outlined" color={color} label={row.priority || "NA"} size="small" />
    );
  };

  const renderCreationDate = ({ row }) => {
    const date = new Date(row.createdDate);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return (
      <p>{`${dt}/${month}/${year}`}</p>
    );
  };

  const renderIntakeID = ({ row }) => {
    return (
      <Chip color="secondary" variant="outlined" size="small" avatar={<Avatar>In</Avatar>} label={row.canonicalId} />
    );
  };

  const columns = [
    {
      field: "favorite",
      headerName: "*",
      renderCell: renderFavorite,
      flex: 0.01,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "siteName",
      type: "string",
      headerName: "Intake ID",
      renderCell: renderIntakeID,
      flex: 0.5,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "type",
      headerName: "Intake Type",
      renderCell: renderIntakeType,
      flex: 1,
      editable: editable ? true : false,
      hide: isDownSmall ? true : false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "fullAddress",
      type: "string",
      headerName: "Address",
      editable: editable ? true : false,
      hide: true,
      flex: 2,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "nodeName",
      type: "string",
      headerName: "Node",
      editable: editable ? true : false,
      hide: isDownSmall ? true : false,
      flex: 0.5,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "cumulativeDamage",
      type: "string",
      headerName: "Damage",
      editable: editable ? true : false,
      renderCell: renderDamage,
      hide: isDownSmall ? true : false,
      flex: 0.3,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "priority",
      type: "string",
      headerName: "Priority",
      renderCell: renderPriority,
      hide: false,
      flex: 0.3,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "requester",
      type: "string",
      headerName: "Requester",
      hide: isDownSmall ? true : false,
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      hide: true,
      editable: editable ? true : false,
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      renderCell: renderCreationDate,
      editable: editable ? true : false,
      type: "date",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
  ];

  useEffect(() => {
    if (sites.length === 0) {
      dispatch(getFaucetList());
    }
  }, [dispatch, sites.length]);

  useEffect(() => {
    const temp = sites.map(
      ({
        fullAddress,
        jobStatus,
        lastModifiedBy,
        typeName,
        statusName,
        cause,
        jobOwner,
        system,
        createdBy,
        supervisorEmail,
        division,
        externalTicketId,
        supervisorId,
        requesterEmail,
        type,
        submittedDate,
        lastModifiedDate,
        agent,
        replacementReason,
        region,
        jobOwnerId,
        supervisor,
        canonicalId,
        mapNumber,
        emergency,
        reason,
        office,
        requester,
        priority,
        status,
        zip,
        id,
        jobCanonicalId,
        nodeName,
        discrepancyType,
        replacementType,
        createdDate,
        jobId,
        principle,
        priorityName,
        cumulativeDamage,
      }) => {
        return {
          fullAddress,
          jobStatus,
          lastModifiedBy,
          typeName,
          statusName,
          cause,
          jobOwner,
          system,
          createdBy,
          supervisorEmail,
          division,
          externalTicketId,
          supervisorId,
          requesterEmail,
          type,
          submittedDate,
          lastModifiedDate,
          agent,
          replacementReason,
          region,
          jobOwnerId,
          supervisor,
          canonicalId,
          mapNumber,
          emergency,
          reason,
          office,
          requester,
          priority,
          status,
          zip,
          id,
          jobCanonicalId,
          nodeName,
          discrepancyType,
          replacementType,
          createdDate,
          jobId,
          principle,
          priorityName,
          cumulativeDamage,
        };
      }
    );
    setRows(temp);
  }, [sites]);

  return (
    <Box sx={{ width: "100%" }} className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        autoHeight={true}
        autoPageSize={true}
        // getRowClassName={(params) =>
        //   params.getValue(params.id, 'favorite') ? "super-app-theme--favorite" : "super-app-theme--non-favorite"
        // }
        loading = {isFetching}
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Pagination: CustomPagination,
          Toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}
