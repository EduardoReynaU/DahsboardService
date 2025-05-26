export const getPerfilUsuario = (perfilRepo) => async (id) => {
  try {
    const user = await perfilRepo.findById(id);
    if (!user) throw new Error("Usuario no encontrado.");
    return user;
  } catch (error) {
    console.error("[❌] Error al obtener perfil de usuario:", error);
    throw new Error("Error al obtener el perfil del usuario.");
  }
};
