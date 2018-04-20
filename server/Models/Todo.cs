
using System.ComponentModel.DataAnnotations;

namespace TodoList.Models
{
    public class Todo
    {
        public int TodoId { get; set; }

        [Required]
        public string Title { get; set; }
        public string Type { get; set; }

        public string Description { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}