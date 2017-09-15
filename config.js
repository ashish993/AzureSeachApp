var config = {};

config.apiKey = "04F5338965A8029CD2D3D65A7016609B";

// can technically use api key here as well
// since this is shipped to the browser using a read only query key is safer
config.queryKey = "550B55581975D2434692AE9509DAD68D";

config.serviceURL = "http://azureseachdemo.azurewebsites.net";

config.dataSourceName = "usgs-datasource";

config.indexerName ="usgs-indexer";

config.indexName = "features";

config.apiVersion = "2015-02-28";

config.connectionString = "Server=tcp:azs-playground.database.windows.net,1433;Database=usgs;User ID=reader;Password=EdrERBt3j6mZDP;Trusted_Connection=False;Encrypt=True;Connection Timeout=30;";

config.tableName = "GeoNamesRI";

config.dataSourceType = "azuresql"; 

config.maxFailedItems = 10;

config.maxFailedItemsPerBatch = 5;

config.base64EncodeKeys = false;

module.exports = config;
