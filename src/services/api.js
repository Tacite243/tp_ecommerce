
const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
};


// Fonction de login 
export const loginUser = async (Credentials) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Credentials),
  });
  if (!response.ok) {
    throw new Error("Identifiants incorrects");
  }
  return response.json();
}