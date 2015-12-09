## 27: Working with columns

Along your "command line adventures", you will encounter many files that are divided in columns (csv and tsv files are **very** common in bioinformatics).

Fortunately, unix has many tools to handle and manipulate this type of files.

First let's download ourselves a test file and look at it's contents:

```bash
cd
curl https://raw.githubusercontent.com/Blahah/command_line_bootcamp/master/testfiles/test.vcf > testfile.vcf
less testfile.vcf
```

As you can see, the second column of this file is the position of a SNP in a chromosome. Let's extract only this information from the file:

```bash
cut -s -f 2 testfile.vcf
```

Neat, hum? The "-f 2" argument tells `cut` to provides us the second column of the file and the "-s" argument tells it to skip any lines that don't have a second column.

Now for the sake of the exercise (you won't probably ever do this in real work), let's append this column to the end of the file. We need to take several steps:

```bash
cut -s -f 2 testfile.vcf > col2.txt  # Place the column in a temporary file
grep "##" testfile.vcf > newfile.vcf  # Place the header on a new file
grep -v "##" testfile.vcf | paste - col2.txt >> newfile.vcf  # This is the tricky part
```

Woha, what was that?

The first 2 commands are simple enough, but let's take a closer look at that third one:

`grep -v "##" testfile.vcf` will print every line in the file that does **not** contain a "##", which pretty much means that we are skipping the file header. We are then "piping" the output of this command into the next one:

`paste - col2.txt >> newfile.vcf`. `paste` will place the contents of two files together, but unlike `cat`, which will do this sequentially by line number, `paste` will work with the files as columns, placing the contents of the first file on the "left" of the contents of the second file. The `-` means that instead of reading the contents of a file, `paste` will read from the `STDIN` (standard input)


