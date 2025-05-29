using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public IActionResult GetNotFound() => NotFound();

    [HttpGet("bad-request")]
    public IActionResult GetBadRequest() => BadRequest("This is not a good product");

    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorised() => Unauthorized();

    [HttpGet("validation-error")]
    public IActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "This is the first error");
        ModelState.AddModelError("Problem2", "This is the second error");
        return ValidationProblem();
    }

    [HttpGet("server-error")]
    public IActionResult GetServerError() => throw new Exception("This is a server error");
}
