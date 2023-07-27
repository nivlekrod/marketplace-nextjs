import api from "../api";

export default {
  async login(data) {
    const resultado = await api.post("/auth", data);
    localStorage.setItem("token", resultado.data.token);
    api.defaults.headers.common["Authorization"] 
        = resultado.data.token;
    return resultado.data
  },
  logout() {
    localStorage.removeItem("token");
  },
};
