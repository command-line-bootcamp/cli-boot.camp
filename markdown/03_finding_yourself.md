## 03: Finding out where you are

There may be many hundreds of directories on any Unix machine, so how do you know which one you are in? The command [pwd][] will Print the [Working Directory][] and that's pretty much all this command does:

```bash
learner@:~$ pwd
/home/learner
```

When you log in to a Unix computer, you are typically placed into your _home_ directory. In this example, after we log in, we are placed in a directory called 'learner' which itself is a *subdirectory* of another directory called 'home'. Conversely, 'home' is the *parent* directory of 'learner'. The first forward slash that appears in a list of directory names always refers to the top level directory of the file system (known as the [root directory][]). The remaining forward slash (between 'home' and 'learner') delimits the various parts of the directory hierarchy. If you ever get 'lost' in Unix, remember the `pwd` command.

As you learn Unix you will frequently type commands that don't seem to work. Most of the time this will be because you are in the wrong directory, so it's a really good habit to get used to running the `pwd` command a lot.

[pwd]: http://en.wikipedia.org/wiki/Pwd
[Working Directory]: http://en.wikipedia.org/wiki/Working_directory
[root directory]: http://en.wikipedia.org/wiki/Root_directory
