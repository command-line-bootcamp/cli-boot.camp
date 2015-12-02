## 06: The root directory

Let's change directory to the root directory, and then into our home directory

```bash
learner@:~/Learning_unix/Outer_directory/Inner_directory$ cd /
learner@:/$ cd home
learner@:/home$ cd ubuntu
learner@:~$
```

In this case, we may as well have just changed directory in one go:
```bash
cd /home/ubuntu/
```

The leading `/` is incredibly important. The following two commands are very different:

```bash
cd /home/ubuntu/
cd home/ubuntu/
```

The first command says go the `unbuntu` directory that is beneath the `home` directory that is at the top level (the root) of the file system. There can only be one `/home/ubuntu` directory on any Unix system.

The second command says go to the `unbuntu` directory that is beneath the `home` directory that is located wherever I am right now. There can potentially be many `home/ubuntu` directories on a Unix system (though this is unlikely).

Learn and understand the difference between these two commands.
