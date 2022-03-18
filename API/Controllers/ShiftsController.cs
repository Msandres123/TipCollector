using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
    public class ShiftsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ShiftsController(StoreContext context)
        {
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<List<Shift>>> GetShifts()
        {
            return await _context.Shifts!.ToListAsync();


        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Shift?>> GetShift(int id)
        {
            
            var shift = await _context.Shifts!.FindAsync(id);

            if (shift == null) return NotFound();

            return shift;
        }

    }
}