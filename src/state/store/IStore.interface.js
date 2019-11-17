import type { IDataReducer } from '../../components/home/reducers/index';
import type { IApiReducer } from '../../middleware/middleware.interface';

export type IStore = {
    data: IDataReducer,
    api: IApiReducer
}