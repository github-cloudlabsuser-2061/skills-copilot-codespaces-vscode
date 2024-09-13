# Configure the Azure provider
provider "azurerm" {
  features {}
}

# Define variables for the storage account name and SKU
variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

variable "storage_account_sku" {
  description = "The SKU of the storage account"
  type        = string
  default     = "Standard_LRS"
}

# Create the storage account resource
resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = var.storage_account_sku
}

# Create a resource group (if not already existing)
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}