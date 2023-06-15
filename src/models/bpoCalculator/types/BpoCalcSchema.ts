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
}

export interface BpoCalcSchema {
    inputs: {
        agentsNumber: string,
        agentCost: string,
        trainingCost: string,
        csatIncrease: string,
        fcrIncrease: string,
        salesIncrease: string,
    },
    selects: {
        agentsType: AgentTypeSelect,
        accentLevel: ScaleSelect,
        noiseLevel: ScaleSelect,
        speechClarity: ScaleSelect
    }
}


export const bpoCalcInitialState: BpoCalcSchema = {
    inputs: {
        agentsNumber: '',
        agentCost: '',
        trainingCost: '',
        csatIncrease: '',
        fcrIncrease: '',
        salesIncrease: '',
    },
    selects: {
        agentsType: {
            value: '',
            options: [BpoAgentTypes.SALES, BpoAgentTypes.SUPPORT]
        },
        accentLevel: {
            value: '',
            options: [BpoScales.LOW, BpoScales.MEDIUM, BpoScales.HIGH]
        },
        noiseLevel: {
            value: '',
            options: [BpoScales.LOW, BpoScales.MEDIUM, BpoScales.HIGH]
        },
        speechClarity: {
            value: '',
            options: [BpoScales.LOW, BpoScales.MEDIUM, BpoScales.HIGH]
        }
    }
};