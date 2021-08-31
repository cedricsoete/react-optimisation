/**
 * @typedef {Object} Hero
 * @property {string} id
 * @property {string} name
 * @property {string} real_name
 * @property {string} thumb
 * @property {string} image
 * @property {string} description
 */

/**
 *
 * @returns {Promise<Hero[]>}
 */
export async function getHeroes() {
  const resquest = await fetch('http://localhost:8080/hero');
  const response = await resquest.json();
  return response;
}

/**
 *
 * @returns {Promise<Hero[]>}
 */
export async function getWicked() {
  const resquest = await fetch('http://localhost:8080/wicked');
  const response = await resquest.json();
  return response;
}
