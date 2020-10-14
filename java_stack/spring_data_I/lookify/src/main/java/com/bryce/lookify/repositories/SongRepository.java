package com.bryce.lookify.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bryce.lookify.models.Song;

@Repository
public interface SongRepository extends CrudRepository<Song, Long>{
    // this method finds all songs
	List<Song> findAll();
    
    // this method finds songs by artists containing the search string
    List<Song> findByArtist(String artist);
    
    // this method finds and orders songs
    List<Song> findTop10ByOrderByRatingDesc();
    
    // this method deletes a song that starts with a specific title
    Long deleteByTitleStartingWith(String search);
}
