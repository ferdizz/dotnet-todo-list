using System.Collections.Generic;
using System.Linq;
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

        public static TodoDTO GetTodoDTO(Todo todo)
        {
            return new TodoDTO
            {
                Id = todo.Id,
                Title = todo.Title,
                Description = todo.Description,
                Type = GetType(todo.Type),
                IsDone = todo.IsDone,
                UserId = todo.UserId
            };
        }

        public static IEnumerable<TodoDTO> GetTodoDTOs(User user)
        {
            var todos = from todo in user.Todos
                        select GetTodoDTO(todo);

            return todos;
        }

        public static string GetType(TodoType? t)
        {
            return t == null ? "Uncategorized" : ((TodoType)t).ToString();
        }
    }
}