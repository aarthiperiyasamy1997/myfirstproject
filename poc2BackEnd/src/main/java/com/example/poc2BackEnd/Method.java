package com.example.poc2BackEnd;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Method {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cid;
	private String foodname;
	private String cdesert;
	private String[] cstarters;
	private int price;
	public Method() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Method [cid=" + cid + ", foodname=" + foodname + ", cdesert=" + cdesert + ", cstarters="
				+ Arrays.toString(cstarters) + ", price=" + price + "]";
	}
	public Method(String foodname, String cdesert, String[] cstarters, int price) {
		super();
		this.foodname = foodname;
		this.cdesert = cdesert;
		this.cstarters = cstarters;
		this.price = price;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public String getCdesert() {
		return cdesert;
	}
	public void setCdesert(String cdesert) {
		this.cdesert = cdesert;
	}
	public String[] getCstarters() {
		return cstarters;
	}
	public void setCstarters(String[] cstarters) {
		this.cstarters = cstarters;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	

}
