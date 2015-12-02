## 28: Miscellaneous Unix power commands

The following examples introduce some other Unix commands, and show how they could be used to work on a fictional file called `file.txt`. Remember, you can always learn more about these Unix commands from their respective man pages with the `man` command. These are not all real world cases, but rather show the diversity of Unix command-line tools:

+ View the penultimate 10 lines of a file (using [head][] and [tail][] commands):

[head]: http://en.wikipedia.org/wiki/Head_(Unix)
[tail]: http://en.wikipedia.org/wiki/Tail_(Unix)

```bash
tail -n 20 file.txt | head
```

+ Show lines of a file that begin with a start codon (ATG) (the `^` matches patterns at the start of a line):

```bash
grep "^ATG" file.txt
```

+ Cut out the 3rd column of a tab-delimited text file and sort it to only show unique lines (i.e. remove duplicates):

```bash
cut -f 3 file.txt | sort -u
```

+ Count how many lines in a file contain the words 'cat' or 'bat' (`-c` option of `grep` counts lines):

```bash
grep -c '[bc]at' file.txt
```

+ Turn lower-case text into upper-case (using [tr][] command to 'transliterate'):

```bash
cat file.txt | tr 'a-z' 'A-Z'
```

[tr]: http://en.wikipedia.org/wiki/Tr_(Unix)

+ Change all occurences of 'Chr1' to 'Chromosome 1' and write changed output to a new file (using [sed][] command):

```bash
cat file.txt | sed 's/Chr1/Chromosome 1/g' > file2.txt
```

[sed]: http://en.wikipedia.org/wiki/Sed
