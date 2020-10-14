package com.bryce.lookify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bryce.lookify.models.Song;
import com.bryce.lookify.repositories.SongRepository;
@Service
public class SongService {
    // adding the song repository as a dependency
    private final SongRepository songRepository;
    
    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }
    
    // returns all the songs
    public List<Song> allSongs() {
        return songRepository.findAll();
    }
    
    // retrieves a song by id
    public Song findSong(Long id) {
        Optional<Song> optionalSong = songRepository.findById(id);
        if(optionalSong.isPresent()) {
            return optionalSong.get();
        } else {
            return null;
        }
    }
    
    // finds a song by an artist
	public List<Song> getSearchSongs(String artist){
		return songRepository.findByArtist(artist);
	}
    
    // find top 10
	public List<Song> getTopTen(){
		return songRepository.findTop10ByOrderByRatingDesc();
	}
    
    // creates a song
    public Song createSong(Song s) {
        return songRepository.save(s);
    }
    
    // update a song
    public Song updateSong(Song s) {
    	return songRepository.save(s);
    }
    
    // update a song
    public Song updateSong(Long id, String title, String artist, Integer rating) {
    	Song s = this.findSong(id);
    	if (s != null) {
    		s.setTitle(title);
    		s.setArtist(artist);
    		s.setRating(rating);
    		return songRepository.save(s);
    	}
    	return null;
    }
    
    // delete a song
    public void deleteSong(Long id) {
    	songRepository.deleteById(id);
    }
}
