compile:
	coffee --compile --output lib src

test: compile
	mocha

package: test
	npm pack

.PHONY: compile test package
