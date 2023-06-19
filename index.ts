import containsProfaneWord from "./functions/containsProfaneWord";

/**
 * Generate URL friendly short IDs just like YouTube
 * @returns {string} Randomly generated string of characters just like YouTube IDs
 */
export function ytid(){
  const characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789-_';
  const length = 11;
  let id;

  do {
    id = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const selectedCharacter = characters[randomIndex];

      // Preventing identical three or more consecutive characters
      if (i >= 2 && id[i - 1] === selectedCharacter && id[i - 2] === selectedCharacter) {
        i--;
        continue;
      }

      // Preventing two consecutive underscores and hyphens
      if ((selectedCharacter === '_' && id[i - 1] === '_') || (selectedCharacter === '-' && id[i - 1] === '-')) {
        i--;
        continue;
      }

      id += selectedCharacter;
    }
  } while (containsProfaneWord(id));

  return id;
}
