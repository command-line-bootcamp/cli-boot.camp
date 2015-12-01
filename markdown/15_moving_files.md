## 15: Moving files

Now, let's assume that we want to move these files to a new directory ('Temp'). We will do this using the Unix [mv][] (move) command. Remember to use tab completion:

```bash
ubuntu@:~/Learning_unix$ mkdir Temp
ubuntu@:~/Learning_unix$ mv heaven.txt Temp/
ubuntu@:~/Learning_unix$ mv earth.txt Temp/
ubuntu@:~/Learning_unix$ ls
Temp
ubuntu@:~/Learning_unix$ ls Temp/
earth.txt  heaven.txt
```

For the `mv` command, we always have to specify a source file (or directory) that we want to move, and then specify a target location. If we had wanted to we could have moved both files in one go by typing any of the following commands:

```bash
mv *.txt Temp/
mv *t Temp/
mv *ea* Temp/
```

The asterisk `*` acts as a [wild-card character][], essentially meaning 'match anything'. The second example works because there are no other files or directories in the directory that end with the letters 't' (if there was, then they would be moved too). Likewise, the third example works because only those two files contain the letters 'ea' in their names. Using wild-card characters can save you a lot of typing.

The '?' character is also a wild-card but with a slightly different meaning. See if you can work out what it does.

[mv]: http://en.wikipedia.org/wiki/Mv
[wild-card character]: http://en.wikipedia.org/wiki/Wildcard_character
