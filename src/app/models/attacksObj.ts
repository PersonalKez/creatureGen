export interface Attack  {
    isMelee: boolean,
    name: string,
    attack: number,
    reach: number,
    targetAmount: number,
    damage: [number, number],
    range: [number, number],
    damageType: string,
    special: string
}