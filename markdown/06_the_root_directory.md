## 06: The root directory

Let's change directory to the root directory, and then into our home directory

```bash
learner@:inner$ cd /
learner@:/$ cd home
learner@:home$ cd learner
learner@:~$
```

In this case, we may as well have just changed directory in one go:
```bash
cd /home/learner/
```

The leading `/` is incredibly important. The following two commands are very different:

```bash
cd /home/learner/
cd home/learner/
```

The first command says go the `learner` directory that is beneath the `home` directory that is at the top level (the root) of the file system. There can only be one `/home/learner` directory on any Unix system.

The second command says go to the `learner` directory that is beneath the `home` directory that is located wherever I am right now. There can potentially be many `home/learner` directories on a Unix system (though this is unlikely).

Learn and understand the difference between these two commands.
