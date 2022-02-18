using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Shifts!.Any()) return;

            var shifts = new List<Shift>
            {
                new Shift
                {
                    User = "Mikey123",
				    UserId = 1,
				    ShiftDay = "1/22/22",
                    CreditCardTips = 12057,
                    CashTips =  3200,

                    ShiftLength = 5.0,
                },
                new Shift
                {
				    User = "Mikey123",
				    UserId = 1,
                    ShiftDay= "1/12/22",
                   	CreditCardTips = 13523,
                   	CashTips = 4500,
                   	ShiftLength = 5.5,
                },

                new Shift
                {
				    User = "Mikey123",
				    UserId = 1,
                    ShiftDay = "1/15/22",
                   	CreditCardTips = 12267,
                   	CashTips =  5400,
                    ShiftLength = 6.1
                },

                new Shift
                {
				    User = "Mikey123",
				    UserId = 1,
                    ShiftDay = "2/1/22",
                   	CreditCardTips = 11234,
                   	CashTips = 9000,
                   	ShiftLength = 4.9
                },

                new Shift
                {
				    User = "Mikey123",
				    UserId = 1,
                    ShiftDay= "2/3/22",
                    CreditCardTips = 16078,
                    CashTips = 1500,
                    ShiftLength = 4.5
                }
            };

            foreach (var shift in shifts)
            {
                context.Shifts!.Add(shift);
            }

            context.SaveChanges();
        }
    }

}