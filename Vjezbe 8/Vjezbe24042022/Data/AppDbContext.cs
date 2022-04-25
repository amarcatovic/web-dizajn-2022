using Microsoft.EntityFrameworkCore;
using Vjezbe24042022.Data.Entities;

namespace Vjezbe24042022.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<WeatherSummary> WeatherSummaries { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    }
}
