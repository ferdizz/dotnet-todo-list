using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoList.Data;
using TodoList.Models;

namespace TodoList.Controllers
{

    [Route("api/todos")]
    public class TodoController : Controller
    {

        private readonly TodoManager _todoManager;

        public TodoController(TodoManager todoManager)
        {
            _todoManager = todoManager;
        }

        // GET api/todos
        [HttpGet]
        public IEnumerable<Todo> GetAll()
        {
            return _todoManager.GetAll();
        }

        // GET api/todos/5
        [HttpGet("{id:int}", Name = "GetTodo")]
        public IActionResult GetById(int id)
        {
            var todo = _todoManager.GetById(id);
            if (todo == null)
            {
                return NotFound("Todo not found");
            }

            return Ok(todo);
        }

        // POST api/todos
        [HttpPost]
        public IActionResult Create([FromBody]Todo todo)
        {
            if (todo == null)
            {
                return BadRequest();
            }

            _todoManager.Add(todo);
            return CreatedAtRoute("GetTodo", new { id = todo.Id }, todo);
        }

        // PUT api/todos/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Todo todo)
        {
            if (todo == null || todo.Id != id)
            {
                return BadRequest();
            }

            var _todo = _todoManager.GetById(id);
            if (_todo == null)
            {
                return NotFound("Todo not found");
            }

            _todo.Title = todo.Title;
            _todo.Type = todo.Type;
            _todo.Description = todo.Description;
            _todo.IsDone = todo.IsDone;
            _todoManager.Update(_todo);
            return Ok("Todo updated");
        }

        // DELETE api/todos/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _todoManager.GetById(id);
            if (todo == null)
            {
                return NotFound("Todo not found");
            }

            _todoManager.Delete(todo);
            return Ok("Todo deleted");
        }
    }
}
