﻿
namespace Gcris_WebApp.Models
{
    public class FindSdgPublicationsResult
    {

        public FindSdgPublicationsResult(int PageCount, int PageNumber, int ResultCount, List<SdgPublication>? Publications)
        {
            this.PageNumber = PageNumber;
            this.PageCount = PageCount;
            this.Publications = Publications;
            this.ResultCount = ResultCount;
        }

        public List<SdgPublication>? Publications { get; set; }

        public int PageCount { get; set; } = 0;

        public int PageNumber { get; set; } = 1;

        public int ResultCount { get; set; } = 1;

    }
}
