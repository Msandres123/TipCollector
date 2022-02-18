using System;

namespace API.Entities
{
    public class Shift
    {
        public int Id { get; set; }
        public string? User { get; set; }
        public int UserId { get; set; }
        public string? ShiftDay { get; set; }
        public long CashTips { get; set; }
        public long CreditCardTips { get; set; }
        public long TotalTips => (int)CreditCardTips + (int)CashTips;
        public double ShiftLength { get; set;}

        public DateTime DateCreated { get; set; }   

    }
}