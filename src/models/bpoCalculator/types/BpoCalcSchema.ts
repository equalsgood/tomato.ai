export enum BpoAgentTypes {
    SUPPORT = 'Support',
    SALES = 'Sales',
}

export enum BpoScales {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
}

interface AgentTypeSelect {
    value: BpoAgentTypes | '';
    options: Array<BpoAgentTypes>;
}

interface ScaleSelect {
    value: BpoScales | '';
    options: Array<BpoScales>;
    percent: number;
}

export interface BpoCalcSchema {
    improvePercent: number,
    isCurrentTypeSupport: boolean | null,
    agentsType: AgentTypeSelect,
    inputs: {
        agentsNumber: string,
        agentCost: string,
        trainingCost: string,
        csatIncrease: string,
        fcrIncrease: string,
        salesIncrease: string,
    },
    scaleSelects: {
        accentLevel: ScaleSelect,
        noiseLevel: ScaleSelect,
        speechClarity: ScaleSelect
    },
    calculatedValues: {
        annualRoi: number,
        gross: number,
        savings: number,
        investment: number,
    }
}


export const bpoCalcInitialState: BpoCalcSchema = {
    improvePercent: 0,
    isCurrentTypeSupport: null,
    agentsType: {
        value: '',
        options: [BpoAgentTypes.SALES, BpoAgentTypes.SUPPORT]
    },
    inputs: {
        agentsNumber: '',
        agentCost: '',
        trainingCost: '',
        csatIncrease: '',
        fcrIncrease: '',
        salesIncrease: '',
    },
    scaleSelects: {
        accentLevel: {
            value: '',
            options: [BpoScales.LOW, BpoScales.MEDIUM, BpoScales.HIGH],
            percent: 0,
        },
        noiseLevel: {
            value: '',
            options: [BpoScales.LOW, BpoScales.MEDIUM, BpoScales.HIGH],
            percent: 0,
        },
        speechClarity: {
            value: '',
            options: [BpoScales.LOW, BpoScales.MEDIUM, BpoScales.HIGH],
            percent: 0,
        }
    },
    calculatedValues: {
        annualRoi: 0,
        gross: 0,
        savings: 0,
        investment: 0,
    }
};