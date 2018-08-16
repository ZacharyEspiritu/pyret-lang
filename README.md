This branch features an experimental Jupyter kernel for the Pyret language.

If you've already installed Pyret locally, you can try out the kernel locally
with:

    $ git remote add https://github.com/ZacharyEspiritu/pyret-lang.git
    $ git checkout ZacharyEspiritu/notebook-v4
    $ make clean
    $ npm install -g # -g required to install kernel commands
    $ make
    $ pyret-install-kernel
    $ jupyter console --kernel=pyret

### Things That Can Probably Be Worked On In Near Future

- [] Move out of `pyret-lang` and into a separate repo. (Shriram's suggestions
for repo names: `aye-pyret`, `eye-pyret`). I'd like to have this setup like
[pyret-npm](https://github.com/brownplt/pyret-npm) for easier installation and
also to hopefully sync with the Image and Color libraries from code.pyret.org.
I think the current temp file setup is the reason why some of the Jupyter
frontends I've tried out haven't worked out well.
- [] Currently the Kernel writes to `.pyret-kernel.tmp` in the directory it is
run from. I'd prefer to not have temp files all over the place, and instead
read in from command-line args. Moving into separate repo helps with that,
though I think means that we'd have to compile the kernel as a separate Pyret
standalone before running it—is this ideal?

### Things That Could Be Worked On, But Probably Will Take Some Time

- [] Handle `complete_request`s for autocomplete
- [] Handle `inspect_request`s
- [] Implement STDIN socket (needs some sort of way to request input from user
on Pyret's end)
