using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.RequestHelpers
{
    public class MappingProflies : Profile
    {
      public MappingProflies()
      {
          CreateMap<CreateShiftDto, Shift>();
          CreateMap<UpdateShiftDto, Shift>();
      }
    }
}