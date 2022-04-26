package com.example.poc2BackEnd;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MethodService 
{
	
	@Autowired
	MethodReppository math;
	
	public Method create(Method me)
	{
		return math.save(me);
		
	}
	
	public List<Method> list()
	{
		return(List<Method>)math.findAll();
	}
	
	public Optional<Method> read(int see)
	{
		return math.findById(see);
	}
	
	public String remove(int key)
	{
		String val=math.findById(key).orElse(new Method()).getFoodname()+ "has deleted";
		math.deleteById(key);
		return val;
	}

}
