import { Server } from '@prisma/client';
import {create} from 'zustand'

export type ModalType ="createServer" | "editServer" | "createChannel" | "invite"
interface ModalData{
    server?:Server
}
interface ModalStore {
    type:ModalType | null;
    isOpen:boolean;
    data:ModalData
    onOpen: (type:ModalType,data?:ModalData)=>void;
    onCloseMain:()=>void;
}

export const useModal = create<ModalStore>((set)=>({
    type:null,
    isOpen:false,
    data:{},
    onOpen:(type,data={})=>set({isOpen:true,type,data}),
    onCloseMain: () => set({isOpen : false,type:null}),
}))