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
        public string? CashTips { get; set; }
         [Required]
         [Range(100, Double.PositiveInfinity)]
        public string? CreditCardTips { get; set; }
        public string? TotalTips => (string?)CreditCardTips + (string?)CashTips;
         [Required]
        public string? ShiftLength { get; set;}

        public DateTime DateCreated { get; set; } 
    }
}