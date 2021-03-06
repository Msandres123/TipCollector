using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;


namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "Mikey123",
                    Email = "Msandres123@gmail.com"
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "Admin",
                    Email = "Admin@fakemail.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] {"Member", "Admin"});
            }

            if (context.Shifts!.Any()) return;

            var shifts = new List<Shift>
            {
                new Shift
                {
                    User = "Mikey123",
				    UserId = "e60ebe10-dcfd-49d5-8706-954b3535c0a9",
				    ShiftDay = "2022-01-22",
                    CreditCardTips = 12057,
                    CashTips =  3200,

                    ShiftLength = 5.0,
                },
                new Shift
                {
				    User = "Mikey123",
				    UserId = "e60ebe10-dcfd-49d5-8706-954b3535c0a9",
                    ShiftDay= "2022-01-12",
                   	CreditCardTips = 13523,
                   	CashTips = 4500,
                   	ShiftLength = 5.5,
                },

                new Shift
                {
				    User = "Mikey123",
				    UserId = "e60ebe10-dcfd-49d5-8706-954b3535c0a9",
                    ShiftDay = "2022-01-15",
                   	CreditCardTips = 12267,
                   	CashTips =  5400,
                    ShiftLength = 6.1
                },

                new Shift
                {
				    User = "Mikey123",
				    UserId = "e60ebe10-dcfd-49d5-8706-954b3535c0a9",
                    ShiftDay = "2022-02-01",
                   	CreditCardTips = 11234,
                   	CashTips = 9000,
                   	ShiftLength = 4.9
                },

                new Shift
                {
				    User = "Mikey123",
				    UserId = "e60ebe10-dcfd-49d5-8706-954b3535c0a9",
                    ShiftDay= "2022-02-02",
                    CreditCardTips = 16078,
                    CashTips = 1500,
                    ShiftLength = 4.5
                }
            };

            foreach (var shift in shifts)
            {
                context.Shifts?.Add(shift);
            }

            context.SaveChanges();
        }
    }

}