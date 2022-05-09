using Microsoft.EntityFrameworkCore;
using TodoApplication.Data.Models;

namespace TodoApplication.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<TodoItem> TodoItems { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }
    }
}
