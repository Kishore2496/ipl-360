package kishore.projects.ipl360.repository;

import org.springframework.data.repository.CrudRepository;

import kishore.projects.ipl360.model.*;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}