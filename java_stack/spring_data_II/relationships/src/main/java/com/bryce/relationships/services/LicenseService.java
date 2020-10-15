package com.bryce.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bryce.relationships.models.License;
import com.bryce.relationships.models.Person;
import com.bryce.relationships.repositories.LicenseRepository;

@Service
public class LicenseService {
	
	// add the license repository as a dependency
    private final LicenseRepository licenseRepository;
    
    public LicenseService(LicenseRepository licenseRepository) {
        this.licenseRepository = licenseRepository;
    }
    
    // retrieve all licenses
    public List<License> allLicenses() {
        return licenseRepository.findAll();
    }
    
    // create a license
    public License createLicense(License b) {
    	System.out.println("Inside Create Lisence" + b.getExpirationDate());
    	Person person = b.getPerson();
    	b.setNumber(createLicenseNumber(person));
        return licenseRepository.save(b);
    }
    
    public String createLicenseNumber(Person person) {
    	String rawId = person.getId().toString();
    	int noOfZeros = (6 - rawId.length()); 
    	String licenseNumber = new String();
    	for (int i = 0; i <= noOfZeros; i++) {
    		licenseNumber += "0";
    	}
    	licenseNumber += rawId;
        return licenseNumber;
    }
    
    // retrieves a license
    public License findLicense(Long id) {
    	
        Optional<License> optionalLicense = licenseRepository.findById(id);
        if(optionalLicense.isPresent()) {
            return optionalLicense.get();
        } else {
            return null;
        }
    }
    
    // update a license
    public License updateLicense(License license) {
    	return licenseRepository.save(license);
    }
    
    public void deleteLicense(Long id) {
    	if (licenseRepository.existsById(id)) {
    		licenseRepository.deleteById(id);
    	}
	}
}