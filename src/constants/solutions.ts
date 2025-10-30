// Solution data constants - Load from JSON
import solutionsJson from "../../data/solutions.json";

// Create a map from the array for easy access by ID
export const SOLUTIONS_DATA = solutionsJson.reduce((acc, solution) => {
  acc[solution.id] = solution;
  return acc;
}, {} as Record<string, typeof solutionsJson[0]>);
