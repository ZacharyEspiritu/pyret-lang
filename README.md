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

At some point in the future, I'd like to have this setup like
[pyret-npm](https://github.com/brownplt/pyret-npm) for easier installation and
also to hopefully sync with the Image and Color libraries from code.pyret.org.
