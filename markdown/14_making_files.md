## 14: Creating empty files with the touch command

The following sections will deal with Unix commands that help us to work with files, i.e. copy files to/from places, move files, rename files, remove files, and most importantly, look at files. First, we need to have some files to play with. The Unix command [touch][] will let us create a new, empty file. The touch command does other things too, but for now we just want a couple of files to work with.

```bash
ubuntu@:~$ cd Learning_unix/
ubuntu@:~/Learning_unix$ touch heaven.txt
ubuntu@:~/Learning_unix$ touch earth.txt
ubuntu@:~/Learning_unix$ ls
earth.txt  heaven.txt
```

[touch]: http://en.wikipedia.org/wiki/Command_line_completion
