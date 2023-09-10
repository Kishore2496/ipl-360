package kishore.projects.ipl360.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kishore.projects.ipl360.model.Match;
import kishore.projects.ipl360.model.Team;
import kishore.projects.ipl360.repository.MatchRepository;
import kishore.projects.ipl360.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;
    private MatchRepository matchepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository)
    {
        this.teamRepository = teamRepository;
        this.matchepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName)
    {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(matchepository.findLatestMatchesbyTeam(teamName,4));
        return team;
    }

    @GetMapping("/team/{teamName}/match")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year)
    {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return this.matchepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    }



}
