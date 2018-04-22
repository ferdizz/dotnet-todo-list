using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TodoList.Models;

namespace TodoList.Data
{
    public class UserManager : IManager<User>
    {
        private readonly ApplicationDBContext db;

        public UserManager(ApplicationDBContext context)
        {
            db = context;
        }

        public IEnumerable<User> GetAll()
        {
            return db.Users;
        }

        public User GetById(int id)
        {
            return db.Users
                .Include(u => u.Todos)
                .FirstOrDefault(u => u.Id == id);
        }

        public User GetByEmail(string email)
        {
            return db.Users
                .FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
        }

        public void Add(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
        }

        public void Delete(User u)
        {
            db.Users.Remove(u);
            db.SaveChanges();
        }

        public void Update(User user)
        {
            db.Update(user);
            db.SaveChanges();
        }

    }
}