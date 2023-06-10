using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Gcris_WebApp.Models
{
    [BsonIgnoreExtraElements]
    public class SdgPublication
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("_id")]
        public string? Id { get; set; }

        [BsonElement("len")]
        public int Len { get; set; } = 0!;

        [BsonElement("abs")]
        public bool Abs { get; set; } = false!;

        [BsonElement("pdf")]
        public bool Pdf { get; set; } = false!;

        [BsonElement("title")]
        public string Title { get; set; } = null!;

        [BsonElement("1")]
        public int Goal1 { get; set; } = 0!;

        [BsonElement("2")]
        public int Goal2 { get; set; } = 0!;

        [BsonElement("3")]
        public int Goal3 { get; set; } = 0!;

        [BsonElement("4")]
        public int Goal4 { get; set; } = 0!;

        [BsonElement("5")]
        public int Goal5 { get; set; } = 0!;

        [BsonElement("6")]
        public int Goal6 { get; set; } = 0!;

        [BsonElement("7")]
        public int Goal7 { get; set; } = 0!;

        [BsonElement("8")]
        public int Goal8 { get; set; } = 0!;

        [BsonElement("9")]
        public int Goal9 { get; set; } = 0!;

        [BsonElement("10")]
        public int Goal10 { get; set; } = 0!;

        [BsonElement("11")]
        public int Goal11 { get; set; } = 0!;

        [BsonElement("12")]
        public int Goal12 { get; set; } = 0!;

        [BsonElement("13")]
        public int Goal13 { get; set; } = 0!;

        [BsonElement("14")]
        public int Goal14 { get; set; } = 0!;

        [BsonElement("15")]
        public int Goal15 { get; set; } = 0!;

        [BsonElement("16")]
        public int Goal16 { get; set; } = 0!;

        [BsonElement("17")]
        public int Goal17 { get; set; } = 0!;
    }
}