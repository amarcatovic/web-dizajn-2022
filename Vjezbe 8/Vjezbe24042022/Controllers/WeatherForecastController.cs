using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vjezbe24042022.Models;

namespace Vjezbe24042022.Controllers
{
    [ApiController]
    [Route("api/weather")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly List<string> Summaries = new()
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public WeatherForecastController()
        {
        }

        [HttpGet("all")]
        public IActionResult Get()
        {
           return Ok(Summaries);
        }

        [HttpPost]
        public IActionResult AddSummary([FromBody] SummaryAddRequestPayload request)
        {
            Summaries.Add(request.Summary);
            return Ok(Summaries);
        }

        [HttpDelete]
        public IActionResult DeleteSummary([FromBody] SummaryDeleteRequestPayload request)
        {
            var deleted = Summaries.Remove(request.Summary);

            if(deleted)
            {
                return NoContent();
            }

            return BadRequest(request.Summary);
        }

        [HttpPut]
        public IActionResult UpdateSummary([FromBody] SummaryUpdateRequestPayload request)
        {
            var summaryIndex = Summaries.FindIndex(s => s == request.Summary);
            Summaries[summaryIndex] = request.UpdatedSummary;
            return NoContent();
        }
    }
}
