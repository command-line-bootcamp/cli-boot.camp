## 21: Viewing files with less

So far we have covered listing the contents of directories and moving/copying/deleting either files and/or directories. Now we will quickly cover how you can look at files. The [less][less command] command lets you view (but not edit) text files. We will use the [echo][echo command] command to put some text in a file and then view it:

```bash
ubuntu@:~/Learning_unix$ echo "Call me Ishmael."
Call me Ishmael.
ubuntu@:~/Learning_unix$ echo "Call me Ishmael." > opening_lines.txt
ubuntu@:~/Learning_unix$ ls
opening_lines.txt
ubuntu@:~/Learning_unix$ less opening_lines.txt
```

On its own, `echo` isn't a very exciting Unix command. It just echoes text back to the screen. But we can redirect that text into an output file by using the `>` symbol. This allows for something called file [redirection][].

>***Careful when using file redirection (>), it will overwrite any existing file of the same name***

When you are using less, you can bring up a page of help commands by pressing `h`, scroll forward a page by pressing `space`, or go forward or backwards one line at a time by pressing `j` or `k`. To exit less, press `q` (for quit). The `less` program also does about a million other useful things (including text searching).

[less command]: http://en.wikipedia.org/wiki/Less_(Unix)
[echo command]: http://en.wikipedia.org/wiki/Echo_(command)
[redirection]: http://en.wikipedia.org/wiki/Redirection_(Unix)
