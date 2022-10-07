package com.cgpr.penaleservice.entities;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class StatGeneralTetat {

	@Id
	private Long COUNT;
	private String TETAT;
	
	@Transient
	private Long MAXDETENU;

	@Transient
	private Long TOTAL;


	public Long getTOTAL() {
		return TOTAL;
	}


	public void setTOTAL(Long tOTAL) {
		TOTAL = tOTAL;
	}


	public Long getMAXDETENU() {
		return MAXDETENU;
	}


	public void setMAXDETENU(Long mAXDETENU) {
		MAXDETENU = mAXDETENU;
	}


	public Long getCOUNT() {
		return COUNT;
	}


	public void setCOUNT(Long cOUNT) {
		COUNT = cOUNT;
	}


	public String getTETAT() {
		return TETAT;
	}


	public void setTETAT(String tETAT) {
		TETAT = tETAT;
	}


	@Override
	public String toString() {
		return "";
	}
	
}