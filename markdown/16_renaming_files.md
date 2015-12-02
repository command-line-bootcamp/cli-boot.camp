## 16: Renaming files

In the earlier example, the destination for the `mv` command was a directory name (temp). So we moved a file from its source location to a target location, but note that the target could have also been a (different) file name, rather than a directory. E.g. let's make a new file and move it whilst renaming it at the same time:

```bash
learner@:learning_unix$ touch rags
learner@:learning_unix$ ls
rags  temp
learner@:learning_unix$ mv rags temp/riches
learner@:learning_unix$ ls temp/
earth.txt  heaven.txt  riches
```

In this example we create a new file ('rags') and move it to a new location and in the process change the name (to 'riches'). So `mv` can rename a file as well as move it. The logical extension of this is using `mv` to rename a file without moving it (you have to use `mv` to do this as Unix does not have a separate 'rename' command):

```bash
learner@:learning_unix$ mv temp/riches temp/rags
```
