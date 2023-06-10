using Gcris_WebApp.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Gcris_WebApp.Services;

public class SdgPublicationsService
{
    private readonly IMongoCollection<SdgPublication> _sdgPublicationCollection;

    public SdgPublicationsService(
        IOptions<GcrisDatabaseSettings> gcrisDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            gcrisDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            gcrisDatabaseSettings.Value.DatabaseName);

        _sdgPublicationCollection = mongoDatabase.GetCollection<SdgPublication>(
            gcrisDatabaseSettings.Value.SdgPublicationsCollectionName);
    }

    public async Task<List<SdgPublication>> GetAsync() =>
        await _sdgPublicationCollection.Find(_ => true).ToListAsync();

    public async Task<SdgPublication?> GetAsync(string id) =>
        await _sdgPublicationCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task<SdgPublication?> GetByTitleAsync(string title) =>
        await _sdgPublicationCollection.Find(x => x.Title == title).FirstOrDefaultAsync();

    public async Task CreateAsync(SdgPublication newPubllication) =>
        await _sdgPublicationCollection.InsertOneAsync(newPubllication);

    public async Task UpdateAsync(string id, SdgPublication updatedPubllication) =>
        await _sdgPublicationCollection.ReplaceOneAsync(x => x.Id == id, updatedPubllication);

    public async Task RemoveAsync(string id) =>
        await _sdgPublicationCollection.DeleteOneAsync(x => x.Id == id);
}