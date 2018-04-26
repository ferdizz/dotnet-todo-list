using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using TodoList.Data;
using TodoList.Models;
using static TodoList.Models.TodoDTO;

namespace TodoList.Controllers
{

    [Route("api/users")]
    public class UserController : Controller
    {

        private readonly UserManager _userManager;

        public UserController(UserManager userManager)
        {
            _userManager = userManager;
        }

        // GET api/users
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(from user in _userManager.GetAll()
                      select new
                      {
                          Id = user.Id,
                          Email = user.Email,
                          Name = user.Name,
                          Todos = GetTodoDTOs(user)
                      });
        }

        // GET api/users/5
        [HttpGet("{id:int}", Name = "GetUser")]
        public IActionResult GetById(int id)
        {
            var user = _userManager.GetById(id);
            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(new
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Todos = GetTodoDTOs(user)
            });
        }

        // POST api/users/login
        [HttpPost("login")]
        public IActionResult Login([FromBody]JToken body)
        {
            if (body == null || body["email"] == null)
            {
                return BadRequest();
            }

            var user = _userManager.GetByEmail((string)body["email"]);

            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(new
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Todos = GetTodoDTOs(user)
            });
        }

        // POST api/users
        [HttpPost]
        public IActionResult Create([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            bool isEmail = Regex.IsMatch(user.Email, @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z", RegexOptions.IgnoreCase);

            if (!isEmail)
            {
                return BadRequest("Invalid email");
            }

            if (_userManager.GetByEmail(user.Email) != null)
            {
                return BadRequest("Email taken");
            }

            _userManager.Add(user);
            return CreatedAtRoute("GetUser", new { id = user.Id }, new
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name
            });
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            if (_userManager.GetByEmail(user.Email) != null)
            {
                return BadRequest("Email taken");
            }

            var _user = _userManager.GetById(id);
            if (_user == null)
            {
                return NotFound("User not found");
            }

            if (user.Email != null)
            {
                _user.Email = user.Email;
            }

            if (user.Name != null)
            {
                _user.Name = user.Name;
            }

            _userManager.Update(_user);
            return Ok("User updated");
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = _userManager.GetById(id);
            if (user == null)
            {
                return NotFound("User not found");
            }

            _userManager.Delete(user);
            return Ok("User deleted");
        }

    }
}
