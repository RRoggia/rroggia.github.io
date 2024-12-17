# Normal Mode

Follows this structure `(number) Operator + (number) motion`

## Navigating with motions

Moving cursor:

- `k` : Up
- `h`: Down
- `l`: Right
- `j`: Left
- `0`: Begin of the line
- `$`: End of the line
- `b`: Previous word
- `w`: Next word
- `e`: Next end of word
- `%`: Matching `()`, `{}`or `[]` 
- `gg`: Begin of the file
- `G`: end of the file
- `ctrl + o`: Goes back to where you came
- `ctrl + i`: Goes forward from where you came
- Multi visual line
  - `gj`: Down
  - `gk`: Up
  - `g0`: Begin of the line
  - `g$`: End of the line

## Text Manipulation

### Deletion Operator

- `x`: Char on cursor
  - `xp`: Transpose character (delete + paste)
- `d`: Delete motion
  - `dd`: Deletes the whole line
  - `ddp`: Transpose line (delete line + paste below)
  - `dap`: Delete Text Object Paragraph
  - `daw`: Delete Text Object Word
  - Combined with common Motions:
    - `dw`: Next word of the cursor
    - `d$`: Deletes cursor to the end of line
    - `d0`: Deletes cursor to the begin of the line

### Undo/Redo

- `u` : undo last command
- `U`: undo all changes in line
- `r`: redo last command

### Copy/Paste

- `y`: Copy (Yank)
  - `yw`: Copy word (stores in the unnamed registry)
  - `yy`: Copy line
  - `"ayw` : Copy word to the registry named a
- `p`: Paste after cursor
- `P`: Paste before cursor

Common Registries:

- `"_`: Black Hole. Use when you don't want to store information in the unnamed registry.
- `"%` Name of the current file
- `"#` Name of the alternate file
- `".` Last inserted text

Use command `:reg` to see the values in each register.

## Search

- `/`: Followed by the word you want to search
- `?`: Searches backwards. Followed by the word you want to search
- `n`: Next item in search
- `N`: Previous item in search
- `*` Searches for the word in the cursor

It can be used with other operators:

- `d/renan` : Deletes  from the cursor up to the word renan
- `c/renan`: Changes from the cursor up to the word renan

### Search character in line

- `f`: Followed by the character you want to search. Cursor on the char.
- `t`: Followed by the character you want to search. Cursor before the char.
- `F` Followed by the character you want to search. Backwards. Cursor on the char.
- `T`: Followed by the character you want to search. Backwards. Cursor before the char.
- `;` goes to the next occurrence
- `,` goes back to the previous occurrence

It can be used with other operators.

## Changing modes

### To Insert Mode

From normal to insert mode:

- `i`: Cursor in the current position
- `a`: After the Cursor current position
- `A`: Cursor in the end of the line
- `o`: Opens a new line. Cursor in the line below
- `O`: Opens a new line. Cursor in the line above

### To Replace Mode

- `R`: Moves to replace mode

### To Visual Mode

- `v`: Moves to visual mode



# Insert Mode



# Command Mode

`:w FILENAME` saves to disk

`:r FILENAME` retrieves files from disk and paste
`:r !command` executes command and paste output

`:jumps` to see the jumps history in the file and other files 
- as a hack you can use `u + ctrl - r` to jump to latest change in the file
`:changes` use changes to see the list of modifications in the current file in the current file
- `g.` or `g;` to move the cursor to the changelist history
`:marks` to see the marks created

substitute command
`:s/old/new` or `:s/old/new/g` to replace one match or all matches inline

`:%s/old/new/g` replaces all matches in the file 
`:%s/old/new/gc` replaces all matches asking individually