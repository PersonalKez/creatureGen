import { Alignment_Type } from "./alignment";
import { Attack } from "./attacksObj";
import { Stats } from "./statsObj";

export interface monster {
    name: string;
    type: string;
    alignment: Alignment_Type;
    ac: number;
    speed: number;
    // STR, DEX, etc..
    stats: Stats;
    skills: string[];
    senses: string[];
    languages: string[];
    [challenge: number]: number; 
    proficiency: number;
    special: [string, string];
    attack: Attack
}