package com.bryce.relationships.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bryce.relationships.models.License;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {
	// this method retrieves all the Licenses from the database
    List<License> findAll();
}
