package com.cgpr.penaleservice.entities;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class StatAge {

	@Id
	private Long COUNT;
	
	@Transient
	private String TAGE;
	
	@Transient
	private String TAGE1;
	@Transient
	private String TAGE2;
	
	public String getTAGE1() {
		return TAGE1;
	}


	public void setTAGE1(String tAGE1) {
		TAGE1 = tAGE1;
	}


	public String getTAGE2() {
		return TAGE2;
	}


	public void setTAGE2(String tAGE2) {
		TAGE2 = tAGE2;
	}


	private String TCODSEX;


	public Long getCOUNT() {
		return COUNT;
	}


	public void setCOUNT(Long cOUNT) {
		COUNT = cOUNT;
	}


	public String getTAGE() {
		return TAGE;
	}


	public void setTAGE(String tAGE) {
		TAGE = tAGE;
	}





	public String getTCODSEX() {
		return TCODSEX;
	}


	public void setTCODSEX(String tCODSEX) {
		TCODSEX = tCODSEX;
	}


	@Override
	public String toString() {
		return "";
	}
	
}