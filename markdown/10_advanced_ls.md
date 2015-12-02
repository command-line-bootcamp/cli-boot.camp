## 10: Making the `ls` command more useful

The `..` operator that we saw earlier can also be used with the `ls` command, e.g. you can list directories that are 'above' you:

```bash
learner@:learning_unix$ cd ~/learning_unix/outer/
learner@:outer$ ls ../../
a_directory another_directory learning_unix                                                                                                                  ```

Time to learn another useful command-line option. If you add the letter 'l' to the `ls` command it will give you a longer output compared to the default:

```bash
learner@:learning_unix$ ls -l /home
total 4
drwxr-xr-x 6 learner learner 4096 Dec  2 08:31 learner
```

For each file or directory we now see more information (including file ownership and modification times). The 'd' at the start of each line indicates that these are directories. There are many, many different options for the `ls` command. Try out the following (against any directory of your choice) to see how the output changes.

```bash
ls -l
ls -R
ls -l -t -r
ls -lh
```

Note that the last example combine multiple options but only use one dash. This is a very common way of specifying multiple command-line options. You may be wondering what some of these options are doing. It's time to learn about Unix documentation...
