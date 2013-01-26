NODE_MODULES = ./node_modules/

BEM = $(NODE_MODULES).bin/bem
NPM = npm

ifneq (,$(findstring B,$(MAKEFLAGS)))
	BEM_FLAGS = --force
endif

all:: $(BEM) server

%:: $(BEM)
	$(info @ ->> $@)

.PHONY: start
start:: make
	node boot.js

.PHONY: make
make:: $(BEM)
	@$(BEM) make

.PHONY: server
server:: make
	@$(BEM) server

$(BEM):: $(NODE_MODULES)

$(NODE_MODULES)::
	$(debug ---> Updating npm dependencies)
	@$(NPM) install

.PHONY: clean
clean::
	$(BEM) make -m clean
