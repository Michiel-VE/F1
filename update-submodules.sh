#!/bin/bash
set -e

echo "Updating all submodules to latest tracked branch..."

changes=0

git submodule foreach '
  git checkout main
  git pull origin main
'

if ! git diff --quiet; then
  echo "Submodules updated. Committing changes..."
  git add .
  commit_msg="Update all submodules to latest commits ($(date +'%Y-%m-%d %H:%M:%S'))"
  git commit -m "$commit_msg"
  git push
  changes=1
else
  echo "No submodule changes. Nothing to commit."
fi

exit 0
