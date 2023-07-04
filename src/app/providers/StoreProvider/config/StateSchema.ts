import { BpoCalcSchema } from 'models/bpoCalculator';
import { EnterpriseCalcSchema } from 'models/entepriseCalculator';
import { RequestDemoSchema } from 'models/requestDemo';

export interface StateSchema {
    bpoCalc: BpoCalcSchema,
    enterpriseCalc: EnterpriseCalcSchema,
    requestDemo: RequestDemoSchema
}