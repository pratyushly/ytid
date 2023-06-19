export function ytid(){
  const characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789-_';
  const length = 11;
  let id = '';

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
  
  return id;
}
