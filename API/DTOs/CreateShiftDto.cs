using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class CreateShiftDto
    {

         [Required]
        public string? User { get; set; }

        public string? UserId { get; set; }
         [Required]
        public string? ShiftDay { get; set; }
         [Required]
         [Range(100, Double.PositiveInfinity)]
        public long? CashTips { get; set; }
         [Required]
         [Range(100, Double.PositiveInfinity)]
        public long? CreditCardTips { get; set; }
        public long? TotalTips => (int?)CreditCardTips + (int?)CashTips;
         [Required]
        public double? ShiftLength { get; set;}

        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    }
}