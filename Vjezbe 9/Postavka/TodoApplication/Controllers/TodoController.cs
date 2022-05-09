using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using TodoApplication.Data;
using TodoApplication.Data.Models;
using TodoApplication.Models.Request;

namespace TodoApplication.Controllers
{
    [Route("api/todos")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public TodoController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost("new")]
        public IActionResult AddTodo([FromBody] TodoCreationRequestPayload request)
        {
            var todo = new TodoItem
            {
                Name = request.Name,
                IsCompleted = false
            };

            _appDbContext
                .TodoItems
                .Add(todo);

            _appDbContext.SaveChanges();

            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpGet]
        public IActionResult GetTodos()
        {
            var todos = _appDbContext
                .TodoItems
                .ToList();

            return Ok(todos);
        }

        [HttpPut("{id}/complete")]
        public IActionResult CompleteTodo(int id)
        {
            var todo = _appDbContext
                .TodoItems
                .FirstOrDefault(t => t.Id == id);

            if(todo is null)
            {
                return BadRequest();
            }

            todo.IsCompleted = true;

            _appDbContext.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTodo(int id)
        {
            var todo = _appDbContext
                .TodoItems
                .FirstOrDefault(t => t.Id == id);

            if (todo is null)
            {
                return BadRequest();
            }

            _appDbContext.Remove(todo);

            _appDbContext.SaveChanges();

            return NoContent();
        }
    }
}
