import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import createHttpService from '../components/HttpService';
import { baseUrl } from '../shared/baseUrl';
 
  
// Login user 
const login = async (value: any) => { 
   const HttpService = createHttpService();
  const { data } = await HttpService.post( '/auth/login', value ) 
 
  if (data) { 
    try {    
      localStorage.setItem('userinvento', JSON.stringify(data?.data));  
  } catch (e) {  console.log(`isLoggedIn in error ${e}`)  }  }
  return data
}
   
//   // logout  
// const logout = async () => { 
//    const HttpService = createHttpService();
//   const { data } = await HttpService.get( '/api/v1/auth/signout')  
//    return data
// };
// Register user
const verifyOTP = async (values: any) => { 
  const {data} = await axios.post(baseUrl + '/auth/login/otp', values) 
  return data
}
const RegenerateOTP = async (value: any) => { 
  console.log('RegenerateOTP',value)
  const {data} = await axios.post(baseUrl + '/auth/activation/otp', value) 
  return data
}
 
const register = async (values: any) => { 
  const {data} = await axios.post(baseUrl + '/auth/register', values) 
  return data
}
 

  // View user by ID
const ViewUserByID = async (id: any) => {
  const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/users/user/${id}`)  
   return data
};


  // Forget Password
const forgetPassword = async (email: any) => { 
   const HttpService = createHttpService(); 
  const { data } = await HttpService.post( `/auth/password`,{  "email": email })  
   return data
};

  // Forget Password
const resetPassword = async (email: any) => { 
 const HttpService = createHttpService(); 
  const { data } = await HttpService.post( `/api/v1/auth/reset-password`,{  "email": email })  
   return data
};

  // Update Profile
const updateProfile = async (value: any) => { 
  const HttpService = createHttpService(); 
  const { data } = await HttpService.patch( `/api/v1/auth/user/update-profile`, value)  
   return data
};
const verifyPassword = async (value: any) => { 
  const HttpService = createHttpService(); 
  const { data } = await HttpService.patch( `/auth/password`, value)  
   return data
};

  // Current User
const currentUser = async () => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/current-user`)  
   return data
};
  // Supervisor User
const supervisorUser = async (id:any) => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/users/supervisor/${id}`)  
   return data
};
 
  
// Login user 
// const login = async ( ) => { 
//     const userInfo = await AsyncStorage.getItem('userfutti')  
//   return userInfo
// }
  

// Logout
export const logout = () => {
  AsyncStorage.removeItem('userfutti')
}
 
  

const authService = {
  register,
  logout,
  login,  
  ViewUserByID,
  forgetPassword,
  resetPassword,
  updateProfile,
  currentUser,
  supervisorUser,
  verifyOTP,
  RegenerateOTP,
  verifyPassword
}

export default authService
