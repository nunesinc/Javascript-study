let total = 0, count = 1;
while (count <= 10) {
total += count;
count += 1;
}
console.log(total);

/* 
Set “total” to 0.
Set “count” to 1.
[loop]
Set “compare” to “count”.
Subtract 11 from “compare”.
If “compare” is zero, continue at [end].
Add “count” to “total”.
Add 1 to “count”.
Continue at [loop].
[end]
Output “total”
/*