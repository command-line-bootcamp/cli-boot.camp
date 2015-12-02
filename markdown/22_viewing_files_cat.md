## 22: Viewing files with cat

Let's add another line to the file:

```bash
learner@:~/Learning_unix$ echo "The primroses were over." >> opening_lines.txt
learner@:~/Learning_unix$ cat opening_lines.txt
Call me Ishmael.
The primroses were over.
```

Notice that we use `>>` and not just `>`. This operator will **append** to a file. If we only used `>`, we would end up overwriting the file. The [cat][cat command] command displays the contents of the file (or files) and then returns you to the command line. Unlike `less` you have no control on how you view that text (or what you do with it). It is a very simple, but sometimes useful, command. You can use `cat` to quickly combine multiple files or, if you wanted to, make a copy of an existing file:

```bash
cat opening_lines.txt > file_copy.txt
```

[cat command]: http://en.wikipedia.org/wiki/Cat_(Unix)
