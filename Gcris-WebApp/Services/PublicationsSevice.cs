using Gcris_WebApp.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Gcris_WebApp.Services;

public class AuthorsService
{
    private readonly IMongoCollection<Author> _authorCollection;

    public AuthorsService(
        IOptions<GcrisDatabaseSettings> gcrisDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            gcrisDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            gcrisDatabaseSettings.Value.DatabaseName);

        _authorCollection = mongoDatabase.GetCollection<Author>(
            gcrisDatabaseSettings.Value.AuthorsCollectionName);
    }

    public async Task<List<Author>> GetAsync() =>
        await _authorCollection.Find(_ => true).ToListAsync();

    public async Task<Author?> GetAsync(string id) =>
        await _authorCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Author newPubllication) =>
        await _authorCollection.InsertOneAsync(newPubllication);

    public async Task UpdateAsync(string id, Author updatedPubllication) =>
        await _authorCollection.ReplaceOneAsync(x => x.Id == id, updatedPubllication);

    public async Task RemoveAsync(string id) =>
        await _authorCollection.DeleteOneAsync(x => x.Id == id);
}