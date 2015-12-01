## 17: Moving directories

It is important to understand that as long as you have specified a 'source' and a 'target' location when you are moving a file, then it doesn't matter what your *current* directory is. You can move or copy things within the same directory or between different directories regardless of whether you are in any of those directories. Moving directories is just like moving files:

```bash
ubuntu@:~/Learning_unix$ mv Temp/riches Temp/rags
ubuntu@:~/Learning_unix$ mkdir Temp2
ubuntu@:~/Learning_unix$ mv Temp2 Temp
ubuntu@:~/Learning_unix$ ls Temp/
earth.txt  heaven.txt  rags  Temp2
```

This step moves the Temp2 directory inside the Temp directory. Try creating a 'Temp3' directory inside 'Learning_unix' and then `cd` to `/tmp`. Can you move `Temp3` inside `Temp` without changing directory?
