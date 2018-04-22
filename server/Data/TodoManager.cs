
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TodoList.Models;

namespace TodoList.Data
{
    public class TodoManager : IManager<Todo>
    {
        private readonly ApplicationDBContext db;

        public TodoManager(ApplicationDBContext context)
        {
            db = context;
        }

        public IEnumerable<Todo> GetAll()
        {
            return db.Todos;
        }

        public Todo GetById(int id)
        {
            return db.Todos
                .FirstOrDefault(t => t.Id == id);
        }

        public void Add(Todo t)
        {
            db.Todos.Add(t);
            db.SaveChanges();
        }

        public void Delete(Todo t)
        {
            db.Todos.Remove(t);
            db.SaveChanges();
        }

        public void Update(Todo t)
        {
            db.Update(t);
            db.SaveChanges();
        }

        public void Toggle(Todo t)
        {
            t.IsDone = !t.IsDone;
            db.Update(t);
            db.SaveChanges();
        }
    }
}