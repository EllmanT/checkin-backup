import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const contractorReducer = createReducer(initialState, {
  loadCreateContractorRequest: (state) => {
    state.isLoading = true;
  },

  //load contractor success

  loadCreateContractorSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.contractor = action.payload;
  },

  //load contractor failed
  loadCreateContractorFailed: (state, action) => {
    state.isLoading = false;
    state.success = false;
    state.error = action.payload;
  },

  // get all Contractors deliverer request

  getAllContrDelReq: (state) => {
    state.isContrDelLoading = true;
  },

  //get all Contractors deliverer success
  getAllContrDelSuccess: (state, action) => {
    state.isContrDelLoading = false;
    state.delContractors = action.payload;
  },


  //get all Contractors deliverer failed
  getAllContrDelFailed: (state, action) => {
    state.isContrDelLoading = false;
    state.error = action.payload;
  },

    // get all Current clients request

    getAllCurrentClientsDelReq: (state) => {
      state.isCurrentClientsLoading = true;
    },
  
    //get all current clients success
    getAllCurrentClientsDelSuccess: (state, action) => {
      state.isCurrentClientsLoading = false;
      state.delCurrentClients = action.payload;
    },
  
  
    //get all current clients failed
    getAllCurrentClientsDelFailed: (state, action) => {
      state.isCurrentClientsLoading = false;
      state.error = action.payload;
    },
  

  // get all Contractors deliverer request

  getAllContrPageReq: (state) => {
    state.isContrDelLoading = true;
  },

  //get all Contractors deliverer success
  getAllContrPageSuccess: (state, action) => {
    state.isContrPageLoading = false;
    state.pageContractors = action.payload;
  },

  setTotalCount: (state, action) => { // Add this new reducer case
    state.totalCount = action.payload;
  },

  //get all Contractors deliverer failed
  getAllContrPageFailed: (state, action) => {
    state.isContrPageLoading = false;
    state.error = action.payload;
  },

  //update contractor

  updateContractorRequest: (state) => {
    state.isUpdateContrLoading = true;
  },
  updateContractorSuccess: (state, action) => {
    state.isUpdateContrLoading = false;
    state.contractor = action.payload;
  },
  updateContractorFailed: (state, action) => {
    state.isUpdateContrLoading = false;
    state.error = action.payload;
  },

    //update contact Person Info
    updateContactPersonRequest: (state) => {
      state.contactPersonloading = true;
    },
    updateContactPersonSuccess: (state, action) => {
      state.contactPersonloading = false;
   //   state.successMessage = action.payload.successMessage;
      state.contactPerson = action.payload;
    },
    updateContactPersonFailed: (state, action) => {
      state.contactPersonloading = false;
      state.error = action.payload;
    },
  

    // delete Contractor of a shop
    deleteContractorRequest: (state) => {
      state.isLoading = true;
    },
    deleteContractorSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    deleteContractorFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  //clear errors
  clearErrors: (state) => {
    state.error = null;
  },

  //clear success messages
  clearMessages: (state) => {
    state.success = null;
  },
});
