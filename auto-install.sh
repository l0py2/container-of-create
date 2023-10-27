#!/bin/sh

rm -r mods

packwiz refresh

printf '' > modlist && cat README.md | while read -r line; do echo $line | \
	grep -o 'http[a-zA-Z0-9/:\.-]*' >> modlist; done

cat modlist | while read -r line; do packwiz cf add -y $line; done;
