import {create} from "zustand"
import { axiosInstance } from "../lib/axios";
//zustand is a state management library for React applications

export const useAuthStore = create((set)=>({
  user: null,
  isSignedUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
//to check if the user is authenticated and while it is checking, we will show a loading state
  checkAuth : async()=>{
    try {
        // to put a check request to the backend to check if the user is authenticated
        // axios instance is like a copy paste of the base url and the headers
        const res = await axiosInstance.get("/auth/check",);
        set({authUser :res.data});// changing the state of the authUser
    } catch (error) {
        console.error("Error checking authentication:", error);
        set({authUser : null});// if there is an error, then the user is not authenticated

    }finally {
        set({isCheckingAuth : false});// after checking the auth, we will set the isCheckingAuth to false
    }
  }
}));