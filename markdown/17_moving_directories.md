## 17: Moving directories

It is important to understand that as long as you have specified a 'source' and a 'target' location when you are moving a file, then it doesn't matter what your *current* directory is. You can move or copy things within the same directory or between different directories regardless of whether you are in any of those directories. Moving directories is just like moving files:

```bash
learner@:learning_unix$ mkdir temp2
learner@:learning_unix$ mv temp2 temp
learner@:learning_unix$ ls temp/
earth.txt  heaven.txt  rags  temp2
```

This step moves the temp2 directory inside the temp directory. Try creating a 'temp3' directory inside 'learning_unix' and then `cd` to `/tmp`. Can you move `temp3` inside `temp2` without changing directory? When you are finished, `cd` back to 
'learning_unix'.
