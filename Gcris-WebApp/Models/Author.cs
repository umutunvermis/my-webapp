using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Gcris_WebApp.Models
{
    [BsonIgnoreExtraElements]
    public class Author
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("id")]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("ids")]
        public List<int> Ids { get; set; } = null!;

        [BsonElement("publications")]
        public List<string> Publications { get; set; } = null!;

    }
}