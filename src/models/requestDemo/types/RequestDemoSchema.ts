export enum Plans {
    UNSET = 'unset',
    BRONZE = 'Bronze',
    SILVER = 'Silver',
    GOLD = 'Gold',
    PLATINUM = 'Platinum',
}

export interface RequestDemoSchema {
    selectedPlan: Plans;
}


export const requestDemoInitialState: RequestDemoSchema = {
    selectedPlan: Plans.UNSET
};