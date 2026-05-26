"use server";

const ADMIN_USER = "Raxxis";
const ADMIN_PASSWORD = "Lo721400762";

export async function verificarLogin(username: string, password: string) {
  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    return { success: true };
  }
  return { success: false, error: "Usuario o contraseña incorrectos" };
}
