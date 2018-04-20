
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TodoList.Models
{
    public class User
    {
        public int UserId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public List<Todo> Todos { get; set; }
    }
}