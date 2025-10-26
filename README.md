# Github Pages Website
This is the main repository of a basic static website that is hosted by github servers available at the link [francescofattori.github.io](https://francescofattori.github.io).\
This service cannot run a proper server application but can host html client files. Specific servers has to be run separately.\
Since Github Pages uses https and prevents unsecure connections external servers must use https too.

## Rules
* With a personal account the repository must be public
* All the files of the repository can be read by entering their path (relative to root) in the url
* Any `/filename.html` or `/filename` will be displayed as a normal webpage
* Other files can be displayed as raw text, or images (as if opened by the browser normally)
* The file `/index.html` is displayed also at root url
* Any `/directory/index.html` can be accessed at `/directory/` (note the final `/`)

## Include other repositories
It's possible to access other repositories files if the repository is published as a page on their settings menu.\
The root folder for this files is the same and at this url `/repository_name/` the `index.html` file will be displayed.\
It's important to notice that if a file is hosted on the main repository and has the same name of another repository
it won't be accessible because the url `/filename` will be redirected to `/repository_name/` (`filename == repository_name`).\
Path to files can be relative `./index.css` (suggested), or static `/repository_name/index.css` (better avoid using this as repository could change name).
