# regarding turning in assignments

# copying a class repository (fork)

![fork](fork.png)

- makes a copy on your profile (that has your repos)

![fork](fork-end.png)

- copy the url (aka the github remote) to your clipboard
- be sure it is marked as ssh

![fork](clone.png)

- clone the repository to your computer (puts the repo on your computer)

# all the commands below go in the terminal

```bash
git clone link-that-you-just-copied-to-your-clipboard.git
```

## add changes to a repository

```bash
git add .
```

## commit your changes

```bash
git commit -m "message"
```

## push your code to github
### if your terminal says master
```bash
git push origin master
```

### if your terminal says main
```bash
git push origin main
```