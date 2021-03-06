using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoList.Data;
using TodoList.Models;
using static TodoList.Models.TodoDTO;

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
        public IActionResult GetAll()
        {
            return Ok(from todo in _todoManager.GetAll()
                      select GetTodoDTO(todo));
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

            return Ok(GetTodoDTO(todo));
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
            return CreatedAtRoute("GetTodo", new { id = todo.Id }, GetTodoDTO(todo));
        }

        // PUT api/todos/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Todo todo)
        {
            if (todo == null)
            {
                return BadRequest();
            }

            var _todo = _todoManager.GetById(id);
            if (_todo == null)
            {
                return NotFound("Todo not found");
            }

            if (todo.Title != null)
            {
                _todo.Title = todo.Title;
            }

            if (todo.Type != null)
            {
                _todo.Type = todo.Type;
            }

            if (todo.Description != null)
            {
                _todo.Description = todo.Description;
            }

            _todoManager.Update(_todo);
            return Ok("Todo updated");
        }

        // GET api/todos/5/toggle
        [HttpGet("{id}/toggle")]
        public IActionResult Toggle(int id)
        {
            var todo = _todoManager.GetById(id);
            if (todo == null)
            {
                return NotFound("Todo not found");
            }

            _todoManager.Toggle(todo);
            return Ok("Todo toggled");
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
