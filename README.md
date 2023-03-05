# Description

This is a minimal template for integrating Docker as a way to deploy your production code.

## Instructions

To run normally:

- `npm install`
- `npm run dev`

To run with Docker:

- `docker build -t <IMAGE_NAME> .`
- `docker run -p 8080:8080 <IMAGE_NAME>`
- prod should now be served on localhost:8080

# For students

If you want to deploy to EBS, you can zip up this folder:

```
git archive -v -o myapp.zip --format=zip HEAD
```

This command zips only the files stored in your git commits, ie, it ignores everything in .gitignore.
Note that this means if you have environment variables in .env they will not be included (unless you are commiting your secrets to github which is bad). To get around this, you can set environment variables in AWS.
