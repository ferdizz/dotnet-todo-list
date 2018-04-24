
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace TodoList.Models
{
    public enum TodoType
    {
        Work, School, Home
    }

    public class Todo
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public TodoType? Type { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public int UserId { get; set; }
    }
}