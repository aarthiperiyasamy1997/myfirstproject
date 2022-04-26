package com.example.poc2BackEnd;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller 
{
	@Autowired
	MethodService service;
	
	
	@PostMapping("/make")
	public String makeCreate(@RequestBody Method math)
	{
		return service.create(math).getFoodname()+ "has added";
	}
	
	@GetMapping("/view")
	public List<Method> makeList()
	{
		return service.list();
	}
	
	@GetMapping("/getting/{fun}")
	public Optional<Method> makeRead(@PathVariable("fun")int fun)
	{
		return service.read(fun);
	}
	
	@PutMapping("/update")
	public String makeUpdate(@RequestBody Method math)
	{
		return service.create(math).getFoodname()+ "updated";
	}
	
	@DeleteMapping("/pop/{var}")
	public String makeRemove(@PathVariable("var") int var)
	{
		return service.remove(var);
	}
	

}
