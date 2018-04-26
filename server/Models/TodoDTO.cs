using Newtonsoft.Json;

namespace TodoList.Models
{
    public class TodoDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public int UserId { get; set; }
    }
}