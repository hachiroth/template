import dotenv from "dotenv-flow";
dotenv.config();

export function sum(x: number, y: number) {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  return x + y;
}

console.log(sum(1, 2));
