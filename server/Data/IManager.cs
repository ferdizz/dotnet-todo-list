using System.Collections.Generic;

namespace TodoList.Data
{
    public interface IManager<T>
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Add(T obj);
        void Update(T obj);
        void Delete(T obj);
    }
}