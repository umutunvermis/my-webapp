using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Gcris_WebApp.Models
{
    [BsonIgnoreExtraElements]
    public class PublicationAuthor
    {
        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("ids")]
        public List<string> Ids { get; set; } = null!;

        [BsonElement("structuredName")]
        public string StructuredName { get; set; } = null!;

    }
}