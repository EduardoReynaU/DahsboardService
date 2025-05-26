import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecreto_dashboard'; // ¡Cambia esto en producción!
const EXPIRES_IN = '1h'; // Duración del token

/**
 * Genera un JWT para un usuario.
 * @param {Object} user - Objeto del usuario.
 * @returns {string} - Token JWT.
 */
export function generateJWT(user) {
  const payload = {
    id: user.id,
    correoInstitucional: user.correoInstitucional
    // Puedes agregar más claims si es necesario.
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
}

/**
 * Verifica y decodifica un JWT.
 * @param {string} token - Token JWT a verificar.
 * @returns {Object} - Payload decodificado (usuario).
 * @throws {Error} - Si el token es inválido o expiró.
 */
export function verifyJWT(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}
