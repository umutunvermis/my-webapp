using Gcris_WebApp.Models;
using Gcris_WebApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Gcris_WebApp.Controllers
{
    public class SDGController : Controller
    {
        private readonly SdgPublicationsService _sdgPublicationsService;

        public SDGController(SdgPublicationsService sdgPublicationsService, AuthorsService authorsService)
        {
            _sdgPublicationsService = sdgPublicationsService;
        }

        [HttpPost]
        public async Task<FindSdgPublicationsResult> FindPublicationsAsync(int page)
        {
            List<SdgPublication> pubs = await _sdgPublicationsService.GetAsync();
            List<SdgPublication> publications = new List<SdgPublication>();
            int resultCount = pubs.Count;
            int pageCount = ((pubs.Count - 1) / 12) + 1;
            int pageNumber = page;
            for (int i = (page - 1) * 12; i < 12 * page; i++)
            {
                if (pubs.Count > i)
                    publications.Add(pubs[i]);
            }
            FindSdgPublicationsResult result = new FindSdgPublicationsResult(pageCount, pageNumber, resultCount, publications);
            
            return result;
        }


        public async Task<SdgPublication> FindPublicationByTitle(string title)
        {
            SdgPublication pub = await _sdgPublicationsService.GetByTitleAsync(title);
            return pub;
        }
        

    }
}
    