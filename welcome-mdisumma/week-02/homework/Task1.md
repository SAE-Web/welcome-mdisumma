In this task you will build on what you have done last week, so please ensure you have completed that task before starting this one.

1. Create an html document as you did last trimester. Between the closing `body` and `html` tags insert the following tags `<script src=""></script>` Replace `src=""` with the location of the js file you created last week.
2. Open your HTML document in the browser. Open up dev tools and within the console tab, type the name of one of the variables in your script. What output do you get?
3. Keeping the page open, head back to the HTML document. In between the script tags, type `console.log("Hello, my name is "+ <name variable> " and I am"+ <age variable>" years of age") `. Save and refresh the page, looking at the console tab. What do you see?
4. Add another line, in between the script tags, but instead write "`console.log(``Hello, my name is ${nameVariable}``)`.Again, save and reload the page. This uses what's called `interpolation`. The variable printed within the "${}" tells JS to go and get the actual value, not just the label. The process you used in step 3 is called `concatenation` or "combining things together."
5. Using whichever way you prefer, write out the following:
   1. The length of your name ( You can do this by typing `<nameVariable>.length`)
   2. `I was born in ` followed by the calculation of this year minus your age.
   3. The result of comparing your current age to a number you created last week.
   4. If a variable you *haven't* created is equal to `null`
   5. If the variable `fullName` is equal to the total of `firstName` and `lastName`. If it is, print out the message `They are the same.`
   6. If `fullName` is **the same as** `firstName+lastName`

## Challenge 1 (You should attempt this)
You will now create a simple timer. Create a variable with the value of 60. *While* the variable is not equal to 0, display the current value and subtract one from it. When it reaches 0 the message should say "Time's up!"

## Challenge 2 (You should attempt this)
Recreate the shopping till example we covered in class, but this time, make it based on the number of people in the queue.



 [x ] I have read and attempted these exercises.