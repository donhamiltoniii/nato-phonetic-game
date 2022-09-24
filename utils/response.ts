export const getCorrectResponse = (
  map: Map<string, string>,
  phrase: string
): string => {
  let response = "";
  const phraseArray = phrase.split("");

  phraseArray.forEach((letter: string) => {
    response += `${map.get(letter)} `;
  });

  return response.trim();
};
