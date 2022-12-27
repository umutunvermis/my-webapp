using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Gcris_WebApp.Models;
[BsonIgnoreExtraElements]
public class Publication
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]
    public string? _Id { get; set; }
    
    [BsonElement("id")]
    public string? Id { get; set; }

    [BsonElement("title")]
    public string title { get; set; } = null!;

    public int year { get; set; } = 0!;

}