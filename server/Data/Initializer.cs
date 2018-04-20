using System.Collections.Generic;
using System.Linq;
using TodoList.Models;

namespace TodoList.Data
{
    static class Initializer
    {
        public static void Seed(this ApplicationDBContext context)
        {

            context.Database.EnsureCreated();

            if (!context.Users.Any() && !context.Todos.Any())
            {
                User ola = new User { Name = "Ola Nordmann", Email = "ola.nordmann@mail.no" };
                User kari = new User { Name = "Kari Nordmann", Email = "kari.nordmann@mail.no" };
                User per = new User { Name = "Per Persen", Email = "per.persen@mail.no" };

                context.Users.AddRange(new User[] { ola, kari, per });
                context.Todos.AddRange(new Todo[]
                {
                    new Todo { Title="Vaske klær", Description="", Type=TodoType.HOME, User=ola },
                    new Todo { Title="Gjør oblig 2", Description="NB! Frist 1. mai", Type=TodoType.SCHOOL, User=ola },
                    new Todo { Title="Sjekk værmelding", Description="Sjekk værmelding og evt bestill tur", User=kari} ,
                    new Todo { Title="Skriv ny CV", Description="", Type=TodoType.HOME, User=per },
                    new Todo { Title="Skriv frontend-tester", Description="", Type=TodoType.WORK, User=per },
                    new Todo { Title="Skriv backend-tester", Description="", Type=TodoType.WORK, User=per },
                });

                context.SaveChanges();
            }

        }
    }
}