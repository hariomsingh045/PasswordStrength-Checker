// Backend base URL. Falls back to localhost for local development.
// In production this is set via REACT_APP_API_URL at build time.
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
