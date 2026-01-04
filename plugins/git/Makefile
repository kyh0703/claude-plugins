default: validate

CURRENT_DIR = .
PLUGIN_PATH = $(CURRENT_DIR)

.PHONY: validate
validate:
	@echo "📝 Validating Helm chart dependencies..."
	@claude plugin validate $(PLUGIN_PATH)
	@echo "✅ Validation complete."
