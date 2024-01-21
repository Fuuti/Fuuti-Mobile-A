import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
 import AsyncStorage from '@react-native-async-storage/async-storage';
   
const initialState = { 

  user:   null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  userToken:null,
  message: '',
  error: '',

  data:   [],
  isErrorinput: false,
  isSuccessinput: false,
  isLoadinginput: false,
  userTokeninput:null,
  messageinput: '',
  errorinput: '', 

  dataID:   [],
  isErrorID: false,
  isSuccessID: false,
  isLoadingID: false,
  userTokenID:null,
  messageID: '',
  errorID: '', 
  
  isErrorlogout: false,
  isSuccesslogout: false,
  isLoadinglogout: false,
  userTokenlogout:null,
  messagelogout: '',
  errorlogout: '',

  forgetisError: false,
  forgetisSuccess: false,
  forgetisLoading: false,
  forgetuserToken:null,
  forgetmessage: '',
  forgeterror: '',

  resetisError: false,
  resetisSuccess: false,
  resetisLoading: false,
  resetuserToken:null,
  resetmessage: '',
  reseterror: '',

  profileisError: false,
  profileisSuccess: false,
  profileisLoading: false,
  profileuserToken:null,
  profilemessage: '',
  profileerror: '',

  currentisError: false,
  currentisSuccess: false,
  currentisLoading: false,
  currentuserToken:null,
  currentmessage: '',
  currenterror: '',

  supervisorUserisError: false,
  supervisorUserisSuccess: false,
  supervisorUserisLoading: false,
  supervisorUseruserToken:null,
  supervisorUsermessage: '',
  supervisorUsererror: '',

   dataR:null,
  isErrorR: false,
  isSuccessR: false,
  isLoadingR: false,
  messageR: '',
  errorR: '',


   verifyOTPdata:null,
  verifyOTPisError: false,
  verifyOTPisSuccess: false,
  verifyOTPisLoading: false,
  verifyOTPmessage: '',
  verifyOTPerror: '',

   RegenerateOTPdata:null,
  RegenerateOTPisError: false,
  RegenerateOTPisSuccess: false,
  RegenerateOTPisLoading: false,
  RegenerateOTPmessage: '',
  RegenerateOTPerror: '',
  
   verifyPassworddata:null,
  verifyPasswordisError: false,
  verifyPasswordisSuccess: false,
  verifyPasswordisLoading: false,
  verifyPasswordmessage: '',
  verifyPassworderror: '',
 
}
 

// Login user
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    return await authService.login(data)

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})

// Register user
export const register = createAsyncThunk('auth/register',async (value, thunkAPI) => {
    try {
      return await authService.register(value)
    } catch (error:any) {
      const messageR =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(messageR)
    }
  }
)
 
// verify OTP
export const verifyOTP = createAsyncThunk('auth/verifyOTP',async (value, thunkAPI) => {
    try {
      return await authService.verifyOTP(value)
    } catch (error:any) {
      const messageR =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(messageR)
    }
  }
)
 
// Regenerate OTP
export const RegenerateOTP = createAsyncThunk('auth/RegenerateOTP',async (value, thunkAPI) => {
    try {
      return await authService.RegenerateOTP(value)
    } catch (error:any) {
      const messageR =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(messageR)
    }
  }
)
 
// ViewUserByID
export const ViewUserByID = createAsyncThunk('auth/ViewUserByID', async (  data,thunkAPI) => {
  try {
    return await authService.ViewUserByID(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})
// ViewUserByID
export const verifyPassword = createAsyncThunk('auth/verifyPassword', async (  data,thunkAPI) => {
  try {
    return await authService.verifyPassword(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})


// logout
// export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => { 
//     try {
//     return await authService.logout()
//   } catch (error:any) {
//     const message =
//       (error.response && 
//         error.response.data && 
//         error.response.data.message) ||
//       error.message ||
//       error.toString() 
//      return thunkAPI.rejectWithValue(message)
//   }
// })

// Forget Password
export const forgetPassword = createAsyncThunk('auth/forgetPassword', async (data, thunkAPI) => { 
    try {
    return await authService.forgetPassword(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})


// Reset Password
export const resetPassword = createAsyncThunk('auth/resetPassword', async (data, thunkAPI) => { 
    try {
    return await authService.resetPassword(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// Update Profile
export const updateProfile = createAsyncThunk('auth/updateProfile', async (data, thunkAPI) => { 
    try {
    return await authService.updateProfile(data)
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// Current User
export const currentUser = createAsyncThunk('auth/currentUser', async (data, thunkAPI) => { 
    try {
    return await authService.currentUser( )
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// Supervisor User
export const supervisorUser = createAsyncThunk('auth/supervisorUser', async (data, thunkAPI) => { 
    try {
    return await authService.supervisorUser(data )
  } catch (error:any) {
    const message =
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString() 
     return thunkAPI.rejectWithValue(message)
  }
})

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {   
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = '' 

      state.isLoadinginput = false
      state.isSuccessinput = false
      state.isErrorinput = false
      state.messageinput = '' 

      state.isLoadingID = false
      state.isSuccessID = false
      state.isErrorID = false
      state.messageID = '' 

      state.isLoadinglogout = false
      state.isSuccesslogout = false
      state.isErrorlogout = false
      state.messagelogout = ''  

      state.forgetisLoading = false
      state.forgetisSuccess = false
      state.forgetisError = false
      state.forgetmessage = ''  

      state.resetisLoading = false
      state.resetisSuccess = false
      state.resetisError = false
      state.resetmessage = ''  

      state.profileisLoading = false
      state.profileisSuccess = false
      state.profileisError = false
      state.profilemessage = ''  

      state.currentisLoading = false
      state.currentisSuccess = false
      state.currentisError = false
      state.currentmessage = ''  

      state.supervisorUserisLoading = false
      state.supervisorUserisSuccess = false
      state.supervisorUserisError = false
      state.supervisorUsermessage = ''   

      state.isErrorR= false
      state.isSuccessR =false
      state.isLoadingR =false
      state.messageR = ''
      
      state.verifyOTPisError= false
      state.verifyOTPisSuccess =false
      state.verifyOTPisLoading =false
      state.verifyOTPmessage = ''
      

      state.RegenerateOTPisError= false
      state.RegenerateOTPisSuccess =false
      state.RegenerateOTPisLoading =false
      state.RegenerateOTPmessage = ''
      
      state.verifyPasswordisError= false
      state.verifyPasswordisSuccess =false
      state.verifyPasswordisLoading =false
      state.verifyPasswordmessage= ''
  
    },

      setUserInfo: (state, action) => {
      state.user = action.payload
    },

    logoutUser: state => {
      AsyncStorage.removeItem('user')
      state.user = null
    }
  },

  extraReducers: (builder) => {
    builder 
      //  Login
      .addCase(login.pending, (state) => {
        state.isLoading = true 
      }) 
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        state.userToken = action.payload.token
      }) 
      .addCase(login.rejected, (state:any, action) => {
        state.isLoading  = false
        state.isError  = true
        state.message  = action.payload
        state.data  = [] 
      })

        .addCase(logout.fulfilled, (state) => {
        state.user = null 
        state.userToken = null 
      })
      
// View User By ID
      .addCase(ViewUserByID.pending, (state:any, action) => {
        state.isLoadingID = true
        state.isErrorID = false  
      }) 
      .addCase(ViewUserByID.fulfilled, (state ,action) => {
             state.isLoadingID = false
        state.isSuccessID = true
        state.dataID = action.payload 
      }) 
     .addCase(ViewUserByID.rejected, (state:any, action) => {
        state.isLoadingID  = false
        state.isErrorID  = true
        state.messageID  = action.payload
        state.dataID  = [] 
     })
      
 
      // Forget Password
      .addCase(forgetPassword.pending, (state) => {
        state.forgetisLoading = true 
      })
      .addCase(forgetPassword.fulfilled, (state:any, action) => {
        state.forgetisLoading = false
        state.forgetisSuccess = true
        state.forgetdata = action.payload 
      })
      .addCase(forgetPassword.rejected, (state:any, action) => {
        state.forgetisLoading = false
        state.forgetisError = true
        state.forgetmessage = action.payload
        state.forgetdata = [] 
      })  

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.resetisLoading = true 
      })
      .addCase(resetPassword.fulfilled, (state:any, action) => {
        state.resetisLoading = false
        state.resetisSuccess = true
        state.resetdata = action.payload 
      })
      .addCase(resetPassword.rejected, (state:any, action) => {
        state.resetisLoading = false
        state.resetisError = true
        state.resetmessage = action.payload
        state.resetdata = [] 
      })  

      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.profileisLoading = true 
      })
      .addCase(updateProfile.fulfilled, (state:any, action) => {
        state.profileisLoading = false
        state.profileisSuccess = true
        state.profiledata = action.payload 
      })
      .addCase(updateProfile.rejected, (state:any, action) => {
        state.profileisLoading = false
        state.profileisError = true
        state.profilemessage = action.payload
        state.profiledata = [] 
      })  

      
      // Current User
      .addCase(currentUser.pending, (state) => {
        state.currentisLoading = true 
      })
      .addCase(currentUser.fulfilled, (state:any, action) => {
        state.currentisLoading = false
        state.currentisSuccess = true
        state.currentdata = action.payload 
      })
      .addCase(currentUser.rejected, (state:any, action) => {
        state.currentisLoading = false
        state.currentisError = true
        state.currentmessage = action.payload
        state.currentdata = [] 
      })  

      // Supervisor User
      .addCase(supervisorUser.pending, (state) => {
        state.supervisorUserisLoading = true 
      })
      .addCase(supervisorUser.fulfilled, (state:any, action) => {
        state.supervisorUserisLoading = false
        state.supervisorUserisSuccess = true
        state.supervisorUserdata = action.payload 
      })
      .addCase(supervisorUser.rejected, (state:any, action) => {
        state.supervisorUserisLoading = false
        state.supervisorUserisError = true
        state.supervisorUsermessage = action.payload
        state.supervisorUserdata = [] 
      })  
    
     .addCase(register.pending, (state) => {
        state.isLoadingR = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingR = false
        state.isSuccessR = true
        state.dataR = action.payload
      })
      .addCase(register.rejected, (state:any, action) => {
        state.isLoadingR = false
        state.isErrorR = true
        state.messageR = action.payload
        state.dataR = null
      })
    
     .addCase(verifyOTP.pending, (state) => {
        state.verifyOTPisLoading = true
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.verifyOTPisLoading = false
        state.verifyOTPisSuccess = true
        state.verifyOTPdata = action.payload
      })
      .addCase(verifyOTP.rejected, (state:any, action) => {
        state.verifyOTPisLoading = false
        state.verifyOTPisError = true
        state.verifyOTPmessage = action.payload
        state.verifyOTPdata = null
      })
      
     .addCase(RegenerateOTP.pending, (state) => {
        state.RegenerateOTPisLoading = true
      })
      .addCase(RegenerateOTP.fulfilled, (state, action) => {
        state.RegenerateOTPisLoading = false
        state.RegenerateOTPisSuccess = true
        state.RegenerateOTPdata = action.payload
      })
      .addCase(RegenerateOTP.rejected, (state:any, action) => {
        state.RegenerateOTPisLoading = false
        state.RegenerateOTPisError = true
        state.RegenerateOTPmessage = action.payload
        state.RegenerateOTPdata = null
      })

     .addCase(verifyPassword.pending, (state) => {
        state.verifyPasswordisLoading = true
      })
      .addCase(verifyPassword.fulfilled, (state, action) => {
        state.verifyPasswordisLoading = false
        state.verifyPasswordisSuccess = true
        state.verifyPassworddata = action.payload
      })
      .addCase(verifyPassword.rejected, (state:any, action) => {
        state.verifyPasswordisLoading = false
        state.verifyPasswordisError = true
        state.verifyPasswordmessage = action.payload
        state.verifyPassworddata = null
      })
      
  },
})

export const { reset ,setUserInfo ,logoutUser} = authSlice.actions
export default authSlice.reducer






// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authService from './authService' 
// import AsyncStorage from '@react-native-async-storage/async-storage';


 

// const initialState = { 
//   user:   null,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   userToken:null,
//   message: '',
//   error: '',
// }
 

// // Login user
// export const login = createAsyncThunk('auth/login', async ( thunkAPI) => {
//   try {
//     return await authService.login()
//   } catch (error:any) {
//     const message =
//       (error.response || 
//         error.response.data ||
//         error.response.data.message) ||
//       error.message ||
//       error.toString() 
//         // @ts-ignore
//      return thunkAPI.rejectWithValue(message)
//   }
// })

// // logout
// export const logout = createAsyncThunk('auth/logout', async () => {
//   authService.logout()
// })

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     reset: (state) => {  

//       state.isLoading = false
//       state.isSuccess = false
//       state.isError = false
//       state.message = '' 
//     },
//     setUserInfo: (state, action) => {
//       state.user = action.payload
//     },

//     logoutUser: state => {
//       AsyncStorage.removeItem('userfutti')
//       state.user = null
//     }
//   },
  
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true
        
//       })
//       .addCase(login.fulfilled, (state:any, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.user = action.payload
//         state.userToken = action.payload
//       })
//       .addCase(login.rejected, (state:any, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//         state.user = null
//         state.userToken = null
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null 
//         state.userToken = null 
//       })
//   },
// })

// export const { reset, setUserInfo, logoutUser } = authSlice.actions
// export default authSlice.reducer