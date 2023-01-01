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

    public string paperAbstract { get; set; } = null!;

    [BsonElement("authors")]
    public List<PublicationAuthor> Authors { get; set; } = null!;

    public List<string> inCitations { get; set; } = null!;

    public List<string> outCitations { get; set; } = null!;

    public int year { get; set; } = 0!;

    public string s2url { get; set; } = null!;

    public List<string> sources { get; set; } = null!;

    public List<string> pdfUrls { get; set; } = null!;

    public string venue { get; set; } = null!;

    public string journalName { get; set; } = null!;

    public string journalVolume { get; set; } = null!;

    public string journalPages { get; set; } = null!;

    public string doi { get; set; } = null!;

    public string doiUrl { get; set; } = null!;

    public string pmid { get; set; } = null!;

    public List<string> fieldsOfStudy { get; set; } = null!;

    public string magId { get; set; } = null!;

    public string s2PdfUrl { get; set; } = null!;

}