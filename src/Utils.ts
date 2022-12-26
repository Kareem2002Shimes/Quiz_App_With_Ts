// Array of Suffle Answers to to be shown in UI
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
