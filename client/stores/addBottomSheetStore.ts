import type {EntryData} from "~/types/entryData";

export interface AddBottomSheetStoreState {
    display: boolean,
    createdEntry?: EntryData
}

export const useAddBottomSheetStore = defineStore("addBottomSheet", {
    state: (): AddBottomSheetStoreState => {
        return ({
            display: false,
            createdEntry: undefined,
        })
    },
    actions: {
        show() {
            this.display = true;
        },
        hide() {
            this.display = false;
        }
    }
})