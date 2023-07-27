import api from "../api";

export default {
  async getProdutos() {
    const resultado = await api.get("/products");
    return resultado.data;
  },
  async getProduto(id) {
    const resultado = await api.get(`/products/${id}`);
    return resultado.data;
  },
  async createProduto(data) {
    const resultado = await api.post("/products", {
      image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      createdAt: new Date().toLocaleString(),
    });
    return resultado.data;
  },
  async updateProduto(data, id) {
    const resultado = await api.put(`/products/${id}`, {
      image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      createdAt: new Date().toLocaleString(),
    });
    return resultado.data;
  },
};
