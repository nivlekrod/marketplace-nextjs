import api from "../api";

export default {
  async getCategorias() {
    const resultado = await api.get("/categories");
    return resultado.data;
  },
};
