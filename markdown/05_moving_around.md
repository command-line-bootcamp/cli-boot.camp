## 05: Getting from 'A' to 'B'

We are in the home directory on the computer but we want to to work in the new `Learning_unix` directory. To change directories in Unix, we use the [cd][] command:

```bash
cd Learning_unix
learner@:~/Learning_unix$
```

Notice that on this system the command prompt has expanded to include our current directory. This doesn't happen by default on all Unix systems, but you should know that you can configure what information appears as part of the command prompt.

Let's make two new subdirectories and navigate into them:

```bash
learner@:~/Learning_unix$ mkdir Outer_directory
learner@:~/Learning_unix$ cd Outer_directory
learner@:~/Learning_unix/Outer_directory$

learner@:~/Learning_unix/Outer_directory$ mkdir Inner_directory
learner@:~/Learning_unix/Outer_directory$ cd Inner_directory/
learner@:~/Learning_unix/Outer_directory/Inner_directory$
```

Now our command prompt is getting quite long, but it reveals that we are three levels beneath the home directory. We created the two directories in separate steps, but it is possible to use the `mkdir` command in way to do this all in one step.

Like most Unix commands, `mkdir` supports *command-line options* which let you alter its behavior and functionality. Command-like options are â€”Â as the name suggests â€”Â optional arguments that are placed after the command name. They often take the form of single letters (following a dash). If we had used the `-p` option of the `mkdir` command we could have done this in one step. E.g.

```bash
mkdir -p Outer_directory/Inner_directory
```

***Note the spaces either side the `-p`!***

[cd]: http://en.wikipedia.org/wiki/Cd_(command)
