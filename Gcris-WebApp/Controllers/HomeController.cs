using Gcris_WebApp.Models;
using Gcris_WebApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Gcris_WebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly PublicationsService _publicationsService;
        private readonly AuthorsService _authorsService;

        public HomeController(PublicationsService publicationsService, AuthorsService authorsService)
        {
            _publicationsService = publicationsService;
            _authorsService = authorsService;
        }

        [HttpPost]
        public async Task<FindPublicationsResult> FindPublicationsAsync(int page)
        {
            List<Publication> pubs = await _publicationsService.GetAsync();
            List<Publication> publications = new List<Publication>();
            int resultCount = pubs.Count;
            int pageCount = ((pubs.Count - 1) / 12) + 1;
            int pageNumber = page;
            for (int i = (page - 1) * 12; i < 12 * page; i++)
            {
                if (pubs.Count > i)
                    publications.Add(pubs[i]);
            }
            FindPublicationsResult result = new FindPublicationsResult(pageCount, pageNumber, resultCount, publications);
            
            return result;
        }

        [HttpGet]
        public async Task<List<Author>> LoadAuthors()
        {
            List<Author> authors = await _authorsService.GetAsync();
            return authors;
        }

        [HttpPost]
        public async Task<FindPublicationsResult> LoadTableForAuthor(List<string> ids, int page)
        {
            List<Publication> pubs = new List<Publication>();
            List<Publication> publications = new List<Publication>();
            foreach (string id in ids)
            {
                Publication pub = await _publicationsService.GetAsync(id);
                pubs.Add(pub);
            }
            int resultCount = pubs.Count;
            int pageCount = ((pubs.Count - 1) / 12) + 1;
            int pageNumber = page;
            for (int i = (page - 1) * 12; i < 12 * page; i++)
            {
                if (pubs.Count > i)
                    publications.Add(pubs[i]);
            }
            FindPublicationsResult result = new FindPublicationsResult(pageCount, pageNumber, resultCount, publications);

            return result;
        }

        public async Task<Publication> FindPublicationByTitle(string title)
        {
            Publication pub = await _publicationsService.GetByTitleAsync(title);
            return pub;
        }
        

    }
}
    