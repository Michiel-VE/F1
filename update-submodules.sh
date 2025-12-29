#!/bin/bash

set -e

echo "Updating all submodules to latest tracked branch..."

git submodule foreach 'git checkout main && git pull origin main'

git add .

commit_msg="Update all submodules to latest commits ($(date +'%Y-%m-%d %H:%M:%S'))"
git commit -m "$commit_msg" || echo "No changes to commit."

git push

echo "All submodules updated and pushed successfully!"
