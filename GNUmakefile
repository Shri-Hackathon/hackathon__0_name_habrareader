NODE_MODULES = ./node_modules/

BEM = $(NODE_MODULES).bin/bem
NPM = npm

ifneq (,$(findstring B,$(MAKEFLAGS)))
	BEM_FLAGS = --force
endif

all:: $(BEM) server

%:: $(BEM)
	$(info @ ->> $@)

.PHONY: server
server:: $(BEM)
	@$(BEM) server

$(BEM):: $(NODE_MODULES)

$(NODE_MODULES)::
	$(debug ---> Updating npm dependencies)
	@$(NPM) update

.PHONY: clean
clean::
	$(BEM) make -m clean
