export const getIndex = (value: string) => parseInt(value, 2);

export const getWord = (wordList: readonly string[], value: string) => wordList[parseInt(value, 2)];
