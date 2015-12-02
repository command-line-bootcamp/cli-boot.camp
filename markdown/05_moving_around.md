## 05: Getting from 'A' to 'B'

We are in the home directory on the computer but we want to to work in the new `learning_unix` directory. To change directories in Unix, we use the [cd][] command:

```bash
cd learning_unix
learner@:~/learning_unix$
```

Notice that on this system the command prompt has expanded to include our current directory. This doesn't happen by default on all Unix systems, and you can configure what information appears as part of the command prompt (though we won't cover that here).

Let's make two new subdirectories and navigate into them:

```bash
learner@:learning_unix$ mkdir outer
learner@:learning_unix$ cd outer
learner@:outer$

learner@:outer$ mkdir inner
learner@:outer$ cd inner/
learner@:inner$
```

Remember that you can always find out where you are using `pwd`:

```bash
learner@:inner$ pwd
/home/learner/learning_unix/outer/inner
```

We created the two directories in separate steps, but it is possible to use the `mkdir` command in way to do this all in one step.

Like most Unix commands, `mkdir` supports *command-line options* which let you alter its behavior and functionality. Command-like options are - as the name suggests - optional arguments that are placed after the command name. They often take the form of single letters (following a dash). If we had used the `-p` option of the `mkdir` command we could have done this in one step. E.g.

```bash
mkdir -p outer/inner
```

***Note the spaces either side the `-p`!***

[cd]: http://en.wikipedia.org/wiki/Cd_(command)
