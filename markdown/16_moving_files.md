## 16: Renaming files

In the earlier example, the destination for the `mv` command was a directory name (Temp). So we moved a file from its source location to a target location, but note that the target could have also been a (different) file name, rather than a directory. E.g. let's make a new file and move it whilst renaming it at the same time:

```bash
ubuntu@:~/Learning_unix$ touch rags
ubuntu@:~/Learning_unix$ ls
rags  Temp
ubuntu@:~/Learning_unix$ mv rags Temp/riches
ubuntu@:~/Learning_unix$ ls Temp/
earth.txt  heaven.txt  riches
```

In this example we create a new file ('rags') and move it to a new location and in the process change the name (to 'riches'). So `mv` can rename a file as well as move it. The logical extension of this is using `mv` to rename a file without moving it (you have to use `mv` to do this as Unix does not have a separate 'rename' command):

```bash
ubuntu@:~/Learning_unix$ mv Temp/riches Temp/rags
```
