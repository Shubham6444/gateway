// src/services/utils/endpoint.js
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  USER_INFO: `${BASE_URL}/api/user/me`,
};
