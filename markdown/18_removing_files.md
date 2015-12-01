## 18: Removing files

You've seen how to remove a directory with the `rmdir` command, but `rmdir` won't remove directories if they contain any files. So how can we remove the files we have created (inside `Learning_Unix/Temp`)? In order to do this, we will have to use the [rm][] (remove) command.

>***Please read the next section VERY carefully. Misuse of the `rm` command can lead to needless death & destruction*** 

Potentially, `rm` is a very dangerous command; if you delete something with `rm`, you will not get it back! It is possible to delete everything in your home directory (all directories and subdirectories) with `rm`, that is why it is such a dangerous command.

Let me repeat that last part again. It is possible to delete EVERY file you have ever created with the `rm` command. Are you scared yet? You should be. Luckily there is a way of making `rm` a little bit safer. We can use it with the `-i` command-line option which will ask for confirmation before deleting anything (remember to use tab-completion):

```bash
ubuntu@:~/Learning_unix$ cd Temp
ubuntu@:~/Learning_unix/Temp$ ls
earth.txt  heaven.txt  rags  Temp2
ubuntu@:~/Learning_unix/Temp$ rm -i earth.txt heaven.txt rags
rm: remove regular empty file â€˜earth.txtâ€™? y
rm: remove regular empty file â€˜heaven.txtâ€™? y
rm: remove regular empty file â€˜ragsâ€™? y
ubuntu@:~/Learning_unix/Temp$ ls
Temp2
```

We could have simplified this step by using a wild-card (e.g. `rm -i *.txt`) or we could have made things more complex by removing each file with a separate `rm` command. Let's finish cleaning up:

```bash
rmdir Temp2/Temp3
rmdir Temp2
cd ..
rmdir Temp
```

[rm]: http://en.wikipedia.org/wiki/Rm_(Unix)
