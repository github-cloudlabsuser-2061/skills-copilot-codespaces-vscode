# Define variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"
$storageAccountSku = "Standard_LRS"

# Authenticate to Azure
Connect-AzAccount

# Create the resource group if it doesn't exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                                       -Name $storageAccountName `
                                       -Location $location `
                                       -SkuName $storageAccountSku `
                                       -Kind StorageV2

# Output the storage account details
$storageAccount