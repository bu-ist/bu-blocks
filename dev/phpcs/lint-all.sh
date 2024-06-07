#!/usr/bin/env bash

phpfiles=$(find . -name '*.php' -and -not -path './node_modules/*' -and -not -path './dev/*' -and -not -path './build/*')

if [ ! -z "$phpfiles" ]
then
	./dev/phpcs/vendor/bin/phpcbf --colors --extensions=php $phpfiles
	./dev/phpcs/vendor/bin/phpcs --colors --extensions=php $phpfiles
fi
