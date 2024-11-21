import React, { ReactNode, SetStateAction } from "react";
interface GlobalState {
    [key: string]: any;
}
interface GlobalStateProviderProps {
    children: ReactNode;
}
export declare const GlobalStateProvider: React.FC<GlobalStateProviderProps>;
export declare const useGlobalState: () => GlobalState;
export declare const useSetGlobalState: () => ((updater: SetStateAction<GlobalState>) => void);
export declare const useGlobalStateSelector: <T>(selector: (state: GlobalState) => T) => T;
export {};
