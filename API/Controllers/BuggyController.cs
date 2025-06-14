using System;
using API.Data;
using API.Entities;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;




namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }


        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetAuth(){
                return "seceret-text";

        }

         [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound(){
                
                var thing = _context.Users.Find(-1);
                if (thing == null) return NotFound();
                return thing;
        }

         [HttpGet("server-error")]
        public ActionResult<AppUser> GetServerError(){
                //var thing = _context.Users.Find(-1).ToString();
                var thing = _context.Users.Find(-1) ?? throw new Exception("\b Null reference error.\n");
                return thing;

        }

         [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest(){
                return BadRequest("bad request.");

        }



    }
}
