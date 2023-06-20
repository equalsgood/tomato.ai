import { BpoCalcSchema } from 'models/bpoCalculator';
import { EnterpriseCalcSchema } from 'models/entepriseCalculator';

export interface StateSchema {
    bpoCalc: BpoCalcSchema,
    enterpriseCalc: EnterpriseCalcSchema,
}