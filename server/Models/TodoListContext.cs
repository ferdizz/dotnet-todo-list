using Microsoft.EntityFrameworkCore;

namespace TodoList.Models
{
    class TodoListContext : DbContext
    {
        public TodoListContext(DbContextOptions<TodoListContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}