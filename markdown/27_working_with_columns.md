## 27: Working with columns

Along your "command line adventures", you will encounter many files that are divided in columns, such as "csv" or "tsv" files.

Fortunately, unix has many tools to handle and manipulate this type of files.

First let's download ourselves a test file and look at it's contents:

```bash
cd
curl https://raw.githubusercontent.com/Blahah/command_line_bootcamp/master/testfiles/grades.txt > grades.txt
less testfile.vcf
```

`curl` will download the contents of any URL you provide it and print it to STDOUT. Since we want our test file on the filesystem, we redirect the output of `curl` to the file "grades.txt"

As you can see, this file containing hypothetical grades for hypothetical characters. First of all, one character stands out - "Spock", as he aces every class. Let's extract his information:

```bash
cut -f 5 grades.txt
```

This command provides us with all the rows for column "5" (-f 5), which contains the grades for "Spock" and prints it to STDOUT. Neat, hum?

What else stands out here? "Luke" has a value of 150 where the maximum is 100. He's probably "forcing" that grade, and that's cheating. Speaking of cheaters, Malcom is a known cheater, and his scores of 50 on everything raise suspicions. Let's remove both these students from our file.

```bash
cut -f -2,4-7,9 grades.txt > grades_no_cheaters.txt
```

Ok, there is a lot to sink in here. First, the syntax of what the "-f" argument takes: the "-" means "everything up to" when used as the first character, but also means "everything between" when used between two other values (it also can mean "everything after" if used as the last character). Note that we are separating values with ",". The `> grades_no_cheaters.txt` will redirect the output into a new file.

Ok, so now let's add back the cheaters as the last columns of our grades file.

```bash
cut -f 3,8 grades.txt | paste grades_no_cheaters.txt - > sorted_grades.txt
```

Easy, wasn't it? We just cut back the names of the cheaters and then "piped" them to paste which placed the columns in the end of the grades file. The "-" here means "read from STDIN", and we could use another file instead, to merge the contents of both files.

There you have it. Now all you have to do is read `sorted_grades.txt` and figure out what to do with the cheating students.
