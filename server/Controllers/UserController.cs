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
        public IEnumerable<User> GetAll()
        {
            return _userManager.GetAll();
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

            return Ok(user);
        }

        // POST api/users
        [HttpPost]
        public IActionResult Create([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            if (_userManager.GetByEmail(user.Email) != null)
            {
                return BadRequest("Email taken");
            }

            _userManager.Add(user);
            return CreatedAtRoute("GetUser", new { id = user.Id }, user);
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]User user)
        {
            if (user == null || user.Id != id)
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

            _user.Email = user.Email;
            _user.Name = user.Name;
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
