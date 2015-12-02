## 12: Removing directories

We now have a few (empty) directories that we should remove. To do this use the [rmdir][] command, this will only remove empty directories so it is quite safe to use. If you want to know more about this command (or any Unix command), then remember that you can just look at its man page.

```bash
learner@:~$ cd ~/Learning_unix/Outer_directory/
learner@:~/Learning_unix/Outer_directory$ rmdir Inner_directory/
learner@:~/Learning_unix/Outer_directory$ cd ..
learner@:~/Learning_unix$ rmdir Outer_directory/
learner@:~/Learning_unix$ ls
learner@:~/Learning_unix$
```

*** Note, you have to be outside a directory before you can remove it with `rmdir` ***

[rmdir]: http://en.wikipedia.org/wiki/Rmdir
