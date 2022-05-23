using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
    public class ShiftsController : BaseApiController
    {
        private readonly StoreContext _context;
        private readonly IMapper _mapper;

        public ShiftsController(StoreContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<List<Shift>>> GetShifts()
        {
            return await _context.Shifts!.ToListAsync();


        }

        [HttpGet("{id}", Name = "GetShift")]
        public async Task<ActionResult<Shift?>> GetShift(int id)
        {
            
            var shift = await _context.Shifts!.FindAsync(id);

            if (shift == null) return NotFound();

            return shift;
        }
        [Authorize(Roles = "Member")]
        [HttpPost]
        public async Task<ActionResult<Shift>> CreateShift([FromForm]CreateShiftDto shiftDto)
        {
            var shift = _mapper.Map<Shift>(shiftDto);
            _context?.Shifts?.Add(shift);
            
            var result = await _context!.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetShift", new {Id = shift.Id}, shift);

            return BadRequest(new ProblemDetails {Title = "Problem creating new shift"}); 
        }

        [Authorize(Roles = "Member")]
        [HttpPut]
        public async Task<ActionResult> UpdateShift(UpdateShiftDto shiftDto)
        {
            var shift = await _context.Shifts!.FindAsync(shiftDto.Id);

            if (shift == null) return NotFound();

            _mapper.Map(shiftDto, shift);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return NoContent();

            return BadRequest(new ProblemDetails{Title = "Problem updating shift"});
        }
        
        [Authorize(Roles = "Member")]
        [HttpDelete]
        public async Task<ActionResult> DeleteShift(int id)
        {
            var shift = await _context.Shifts!.FindAsync(id);

            if (shift == null) return NotFound();

            _context.Shifts.Remove(shift);

            var result = await _context.SaveChangesAsync() > 0;
            
            if (result) return Ok();

            return BadRequest(new ProblemDetails{Title = "Problem deleting shift"});
        }
    }
}