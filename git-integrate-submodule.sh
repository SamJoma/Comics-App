#!/usr/bin/env bash
mv "$1" "${1}_"
git submodule deinit "$1"
git rm "$1"
mv "${1}_" "$1"
git add "$1/**"