import * as fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const lines = input.split("\n").map((line) => line.replace("\r", ""));

const calValues: string[] = [];
let sum = 0;

lines.forEach((line) => {
    line = line.replace(/[a-z]/g, "");
    const first = line[0];
    const last = line[line.length - 1];
    const calValue = `${first}${last}`;
    calValues.push(calValue);
});

calValues.forEach((value) => {
    sum += parseInt(value, 10);
});

console.log(sum);