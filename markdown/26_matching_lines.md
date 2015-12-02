## 26: Matching lines in files with grep

Use `nano` to add the following lines to `opening_lines.txt`:


    Now is the winter of our discontent.
    All children, except one, grow up.
    The Galactic Empire was dying.
    In a hole in the ground there lived a hobbit.
    It was a pleasure to burn.
    It was a bright, cold day in April, and the clocks were striking thirteen.
    It was love at first sight.
    I am an invisible man.
    It was the day my grandmother exploded.
    When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.
    Marley was dead, to begin with.


You will often want to search files to find lines that match a certain pattern. The Unix command [grep][] does this (and much more). The following examples show how you can use grep's command-line options to:

+ show lines that match a specified pattern
+ ignore case when matching (`-i`)
+ only match whole words (`-w`)
+ show lines that don't match a pattern (`-v`)
+ Use wildcard characters and other patterns to allow for alternatives (`*`, `.`, and `[]`)

```bash
learner@:learning_unix$ grep was opening_lines.txt
The Galactic Empire was dying.
It was a pleasure to burn.
It was a bright, cold day in April, and the clocks were striking thirteen.
It was love at first sight.
It was the day my grandmother exploded.
When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.
Marley was dead, to begin with.

learner@:learning_unix$ grep -v was opening_lines.txt
Call me Ishmael.
The primroses were over.
Now is the winter of our discontent.
All children, except one, grow up.
In a hole in the ground there lived a hobbit.
I am an invisible man.

learner@:learning_unix$ grep all opening_lines.txt
Call me Ishmael.

learner@:learning_unix$ grep -i all opening_lines.txt
Call me Ishmael.
All children, except one, grow up.

learner@:learning_unix$ grep in opening_lines.txt
Now is the winter of our discontent.
The Galactic Empire was dying.
In a hole in the ground there lived a hobbit.
It was a bright, cold day in April, and the clocks were striking thirteen.
I am an invisible man.
Marley was dead, to begin with.

learner@:learning_unix$ grep -w in opening_lines.txt
In a hole in the ground there lived a hobbit.
It was a bright, cold day in April, and the clocks were striking thirteen.

learner@:learning_unix$ grep -w o.. opening_lines.txt
Now is the winter of our discontent.
All children, except one, grow up.

learner@:learning_unix$ grep [aeiou]t opening_lines.txt
In a hole in the ground there lived a hobbit.
It was love at first sight.
It was the day my grandmother exploded.
When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.
Marley was dead, to begin with.

learner@:learning_unix$ grep -w -i [aeiou]t opening_lines.txt
It was a pleasure to burn.
It was a bright, cold day in April, and the clocks were striking thirteen.
It was love at first sight.
It was the day my grandmother exploded.
When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.
```

[grep]: http://en.wikipedia.org/wiki/Grep
