import * as fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const lines = input.split("\n").map((line) => line.replace("\r", ""));

const calValues: string[] = [];
let sum = 0;

lines.forEach((line) => {
    line = line.replace(/one/g, "o1e").replace(/two/g, "t2o").replace(/three/g, "t3ree").replace(/four/g, "f4ur").replace(/five/g, "f5ve").replace(/six/g, "s6x").replace(/seven/g, "s7ven").replace(/eight/g, "e8ght").replace(/nine/g, "n9ne");
    let words = line.match(/(one|two|three|four|five|six|seven|eight|nine|\d)/g)

    line = words?.join('') as string;
    line = line.replace(/[a-z]/g, "")
    const first = line[0];
    const last = line[line.length - 1];
    const calValue = `${first}${last}`;
    calValues.push(calValue);
});

calValues.forEach((value) => {
    sum += parseInt(value, 10);
});

console.log(sum);