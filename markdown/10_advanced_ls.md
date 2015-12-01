## 10: Making the `ls` command more useful

The `..` operator that we saw earlier can also be used with the `ls` command, e.g. you can list directories that are 'above' you:

```bash
ubuntu@:~/Learning_unix$ cd ~/Learning_unix/Outer_directory/
ubuntu@:~/Learning_unix/Outer_directory$ ls ../../
command_line_course  Learning_unix  linux_bootcamp
```

Time to learn another useful command-line option. If you add the letter 'l' to the `ls` command it will give you a longer output compared to the default:

```bash
ubuntu@:~/Learning_unix$ ls -l /home
total 12
drwxr-xr-x 8 galaxy galaxy 4096 Apr  2 22:47 galaxy
drwxr-xr-x 3 root   root   4096 Mar 16 23:06 nate
drwxr-xr-x 9 ubuntu ubuntu 4096 Jun 15 02:07 ubuntu
```

For each file or directory we now see more information (including file ownership and modification times). The 'd' at the start of each line indicates that these are directories. There are many, many different options for the `ls` command. Try out the following (against any directory of your choice) to see how the output changes.

```bash
ls -l 
ls -R
ls -l -t -r
ls -lh
```

Note that the last example combine multiple options but only use one dash. This is a very common way of specifying multiple command-line options. You may be wondering what some of these options are doing. It's time to learn about Unix documentation....
