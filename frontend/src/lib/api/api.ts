import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const authService = {
  async login(email: string, password: string) {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);
    const { data } = await api.post("/auth/token", formData);
    return data;
  },
  async register(email: string, password: string, fullName: string) {
    const { data } = await api.post("/auth/register", {
      email,
      password,
      full_name: fullName,
    });
    return data;
  },
  async getCurrentUser() {
    const { data } = await api.get("/auth/me");
    return data;
  },
};

export const resumeService = {
  async uploadResume(file: File, title: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    const { data } = await api.post("/resumes/upload", formData);
    return data;
  },
  async getResume(id: number) {
    const { data } = await api.get(`/resumes/${id}`);
    return data;
  },
  async listResumes() {
    const { data } = await api.get("/resumes");
    return data;
  },
};

export default api;
