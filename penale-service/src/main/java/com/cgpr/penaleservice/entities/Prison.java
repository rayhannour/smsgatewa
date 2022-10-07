package com.cgpr.penaleservice.entities;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Prison {

	@Id
	private String LIBELLE_PRISON;
	private String CODE_GOUVERNORAT;
	private String CODE_PRISON;
	private Long MAXDETENU;

	public Long getMAXDETENU() {
		return MAXDETENU;
	}

	public void setMAXDETENU(Long mAXDETENU) {
		MAXDETENU = mAXDETENU;
	}

	public String getLIBELLE_PRISON() {
		return LIBELLE_PRISON;
	}




	public void setLIBELLE_PRISON(String lIBELLE_PRISON) {
		LIBELLE_PRISON = lIBELLE_PRISON;
	}




	public String getCODE_GOUVERNORAT() {
		return CODE_GOUVERNORAT;
	}




	public void setCODE_GOUVERNORAT(String cODE_GOUVERNORAT) {
		CODE_GOUVERNORAT = cODE_GOUVERNORAT;
	}




	public String getCODE_PRISON() {
		return CODE_PRISON;
	}




	public void setCODE_PRISON(String cODE_PRISON) {
		CODE_PRISON = cODE_PRISON;
	}




	@Override
	public String toString() {
		return "";
	}
	
}