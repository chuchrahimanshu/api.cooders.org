export interface DifficultyLevelSchemaInterface {
  title: string;
}

export interface ProblemSchemaInterface {
  title: string;
  description: string;
  difficultyLevel: ObjectId;
  tags: string[];
  owner: ObjectId;
  examples: JSON;
  constraints: string;
  hints: string;
  editorial: string;
  testcases: JSON;
  snippets: JSON;
  solutions: JSON;
}
