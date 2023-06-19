import profaneWords from "../datasets/profaneWords";

/**
 * Check if a given string contains a profane word
 * @param {string} id - String that needs to be checked
 * @returns {boolean} `true` if the string contains a profane word, otherwise `false`
 */
const containsProfaneWord = (id: string) => {
  for (let i = 0; i < profaneWords.length; i++)
    if(id.toLowerCase().includes(profaneWords[i] ?? ''))
      return true;
  return false;
}

export default containsProfaneWord;