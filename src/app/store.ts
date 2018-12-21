import { GOTO_BIO_PAGE, GOTO_CONNECT_PAGE, GOTO_LANDING_PAGE, GOTO_MUN_PAGE } from './actions';

// TypeScript enum
export enum PAGE {
    BIO = 'BIO',
    CONNECT = 'CONNECT',
    LANDING = 'LANDING',
    MUN = 'MUN'
};


export interface IAppState {
    page: PAGE;
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case GOTO_BIO_PAGE:
            return { page: PAGE.BIO };
        case GOTO_CONNECT_PAGE:
            return { page: PAGE.CONNECT };
        case GOTO_LANDING_PAGE:
            return { page: PAGE.LANDING };
        case GOTO_MUN_PAGE:
            window.location.href="https://nicholashartunian.com/projects/MUNGen/";
            return { page: PAGE.MUN };
    }
    return state;
}

export const INITIAL_STATE: IAppState = {
    page: PAGE.CONNECT
};