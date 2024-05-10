#!/bin/bash

# filename="git_acp.sh"
# chmod +x $filename
message="$1"
# local_branch="$2"

git add .
git commit -S -m "$message" # || "$1"
git push -u origin dev # || $local_branch || $2