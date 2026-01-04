default: lint

define FOREACH
	for DIR in plugins/*; do \
		($(MAKE) -C $$DIR $(1)) || exit $$?; \
	done
endef

.PHONY: lint
build:
	@echo "build:"
	$(call FOREACH, '')

.PHONY: lint
lint:
	@echo "lint:"
	$(call FOREACH, lint)

.PHONY: view
view:
	@echo "view:"
	$(call FOREACH, view)

.PHONY: push
push:
	@echo "push:"
	$(call FOREACH, push)
