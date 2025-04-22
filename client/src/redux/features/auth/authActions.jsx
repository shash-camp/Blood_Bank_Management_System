import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

// Login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });

      if (data.success) {
        toast.success(data.message); // 👈 Prefer toast for better UX
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }

      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Login failed!";
      toast.error(message); // 👈 Show error to user
      return rejectWithValue(message);
    }
  }
);

// Register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });

      if (data.success) {
        toast.success("User Registered Successfully");
        window.location.replace("/login");
      }

      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Registration failed!";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// Get Current User
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      return res.data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Something went wrong!";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);
