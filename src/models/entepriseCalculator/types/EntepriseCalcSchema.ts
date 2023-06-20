export enum EnterpriseAgentTypes {
    SUPPORT = 'Support',
    SALES = 'Sales',
}

export enum EnterpriseScales {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
}

interface AgentTypeSelect {
    value: EnterpriseAgentTypes | '';
    options: Array<EnterpriseAgentTypes>;
}

interface ScaleSelect {
    value: EnterpriseScales | '';
    options: Array<EnterpriseScales>;
    percent: number;
}

export interface EnterpriseCalcSchema {
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
        grossSavings: number,
        gross: number,
        savings: number,
        investment: number,
    }
}


export const enterpriseCalcInitialState: EnterpriseCalcSchema = {
    improvePercent: 0,
    isCurrentTypeSupport: null,
    agentsType: {
        value: '',
        options: [EnterpriseAgentTypes.SALES, EnterpriseAgentTypes.SUPPORT]
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
            options: [EnterpriseScales.LOW, EnterpriseScales.MEDIUM, EnterpriseScales.HIGH],
            percent: 0,
        },
        noiseLevel: {
            value: '',
            options: [EnterpriseScales.LOW, EnterpriseScales.MEDIUM, EnterpriseScales.HIGH],
            percent: 0,
        },
        speechClarity: {
            value: '',
            options: [EnterpriseScales.LOW, EnterpriseScales.MEDIUM, EnterpriseScales.HIGH],
            percent: 0,
        }
    },
    calculatedValues: {
        annualRoi: 0,
        grossSavings: 0,
        gross: 0,
        savings: 0,
        investment: 0,
    }
};