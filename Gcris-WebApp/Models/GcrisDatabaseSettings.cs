namespace Gcris_WebApp.Models;

public class GcrisDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string AuthorsCollectionName { get; set; } = null!;

    public string PublicationsCollectionName { get; set; } = null!;

    public string SdgPublicationsCollectionName { get; set; } = null!;
}