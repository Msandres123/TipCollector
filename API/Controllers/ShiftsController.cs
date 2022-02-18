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
    [ApiController]
    [Route("api/[controller]")]
    public class ShiftsController : ControllerBase
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

        [HttpGet("{id}")] // api/products/3
        public async Task<ActionResult<Shift?>> GetShift(int id)
        {
            return await _context.Shifts!.FindAsync(id);
        }
        
    }
}