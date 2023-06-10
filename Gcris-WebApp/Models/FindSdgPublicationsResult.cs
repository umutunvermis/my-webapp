
namespace Gcris_WebApp.Models
{
    public class FindPublicationsResult 
    {

        public FindPublicationsResult(int PageCount, int PageNumber, int ResultCount, List<Publication>? Publications)
        {
            this.PageNumber = PageNumber;
            this.PageCount = PageCount;
            this.Publications = Publications;
            this.ResultCount = ResultCount;
        }

        public List<Publication>? Publications { get; set; }

        public int PageCount { get; set; } = 0;

        public int PageNumber { get; set; } = 1;

        public int ResultCount { get; set; } = 1;

    }
}
