using Gcris_WebApp.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Gcris_WebApp.Services;

public class PublicationsService
{
    private readonly IMongoCollection<Publication> _publicationCollection;

    public PublicationsService(
        IOptions<GcrisDatabaseSettings> gcrisDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            gcrisDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            gcrisDatabaseSettings.Value.DatabaseName);

        _publicationCollection = mongoDatabase.GetCollection<Publication>(
            gcrisDatabaseSettings.Value.PublicationsCollectionName);
    }

    public async Task<List<Publication>> GetAsync() =>
        await _publicationCollection.Find(_ => true).ToListAsync();

    public async Task<Publication?> GetAsync(string id) =>
        await _publicationCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Publication newPubllication) =>
        await _publicationCollection.InsertOneAsync(newPubllication);

    public async Task UpdateAsync(string id, Publication updatedPubllication) =>
        await _publicationCollection.ReplaceOneAsync(x => x.Id == id, updatedPubllication);

    public async Task RemoveAsync(string id) =>
        await _publicationCollection.DeleteOneAsync(x => x.Id == id);
}