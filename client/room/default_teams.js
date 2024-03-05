import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room';

export const RED_TEAM_NAME = "Red";
export const BLUE_TEAM_NAME = "Blue";
export const GREEN_TEAM_NAME = "Green";
export const RED_TEAM_DISPLAY_NAME = "Red";
export const BLUE_TEAM_DISPLAY_NAME = "Blue";
export const GREEN_TEAM_DISPLAY_NAME = "Green";
export const BLUE_TEAM_SPAWN_POINTS_GROUP = 1;
export const RED_TEAM_SPAWN_POINTS_GROUP = 2;
export const GREEN_TEAM_SPAWN_POINTS_GROUP = 1;
export const BLUE_TEAM_COLOR = new Color(0, 3, 7, 0);
export const RED_TEAM_COLOR = new Color(1, 8, 9, 0);
export const GREEN_TEAM_COLOR = new Color(4, 1, 2, 0);

export function create_team_blue() {
    Teams.Add(BLUE_TEAM_NAME, BLUE_TEAM_DISPLAY_NAME, BLUE_TEAM_COLOR);
    const team = Teams.Get(BLUE_TEAM_NAME);
    team.Spawns.SpawnPointsGroups.Add(BLUE_TEAM_SPAWN_POINTS_GROUP);
    return team;
}

export function create_team_red() {
    Teams.Add(RED_TEAM_NAME, RED_TEAM_DISPLAY_NAME, RED_TEAM_COLOR);
    const team = Teams.Get(RED_TEAM_NAME);
    team.Spawns.SpawnPointsGroups.Add(RED_TEAM_SPAWN_POINTS_GROUP);
    return team;
}

export function create_team_green() {
    Teams.Add(GREEN_TEAM_NAME, GREEN_TEAM_DISPLAY_NAME, GREEN_TEAM_COLOR);
    const team = Teams.Get(GREEN_TEAM_NAME);
    team.Spawns.SpawnPointsGroups.Add(GREEN_TEAM_SPAWN_POINTS_GROUP);
    return team;
