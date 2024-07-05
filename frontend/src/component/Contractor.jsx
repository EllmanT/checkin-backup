import { Delete, ModeEdit, RemoveRedEye } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContractorStats } from "redux/actions/contractorStats";

const Contractor = ({
  _id,
  companyName,
  address,
  city,
  deliveryTypes,
  vehiclesTypes,
  goodsTypes,
  lastOrder,
  prefix,
  handleView,
  handleEdit,
  handleDelete,
  handleContractorDash,
  totalRevenue,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleViewContr = (contrId) => {
    handleView(contrId);
    //console.log(contrId)
  };

  console.log(totalRevenue);

  const handleViewContractorDash = (contrId) => {
    handleContractorDash(contrId);
  };

  const handleEditContr = (contrId) => {
    handleEdit(contrId);
  };

  const handleDeleteDialogue = () => {
    setIsDelete(true);
  };

  const handleDeleteDialogueClose = () => {
    setIsDelete(false);
  };
  const { contractorStats, isContractorStatsLoading } = useSelector(
    (state) => state.contractorStats
  );
  useEffect(() => {
    dispatch(getContractorStats(_id));
  }, [dispatch, _id]);

  console.log(contractorStats);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <Dialog
        open={isDelete}
        onClose={handleDeleteDialogueClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" fontWeight={"bold"}>
          {`Delete Company Name : ${companyName}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove <b> {companyName} </b> from the
            system ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="info"
            onClick={() => handleDeleteDialogueClose()}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => handleDelete(_id)}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <CardContent>
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h5"
            color={theme.palette.secondary[300]}
            gutterBottom
            fontWeight="bold"
          >
            {companyName}
          </Typography>
          <Box display="flex">
            <IconButton
              variant="contained"
              sx={{ color: "lightblue" }}
              size="small"
              onClick={() => handleViewContr(_id)}
            >
              <RemoveRedEye />
            </IconButton>
            <IconButton
              variant="contained"
              sx={{ color: theme.palette.secondary[100] }}
              size="small"
              onClick={() => handleEditContr(_id)}
            >
              <ModeEdit />
            </IconButton>

            <IconButton
              variant="contained"
              sx={{ color: "red" }}
              size="small"
              onClick={() => handleDeleteDialogue()}
            >
              <Delete />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="h5" fontWeight="bold" component="div">
          {address}
        </Typography>
        <Typography sx={{ mb: "1rem" }} variant="h6">
          {city}
        </Typography>

        <Typography>
          Total Income: <b>${}</b>
        </Typography>

        <Typography>Total Jobs: {}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="inherit"
          size="small"
          sx={{ mr: 4 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? "See More" : "See Less"}
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ color: theme.palette.secondary[200] }}
          onClick={() => handleViewContractorDash(_id)}
        >
          View Jobs
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>delivery : {deliveryTypes}</Typography>
          <Typography>vehicles : {vehiclesTypes} </Typography>
          <Typography>
            {" "}
            prefix:{prefix} <br />
            Last Order : {lastOrder}
          </Typography>

          <Typography>Goods : {goodsTypes} </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Contractor;
