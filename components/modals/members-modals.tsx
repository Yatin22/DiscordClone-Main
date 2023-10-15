"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store"
import { ServerWithMemberWithProfile } from "@/types";
import { ScrollArea } from "../ui/scroll-area";
import { UserAvatar } from "../user-avatar";




export const MembersModal = () => {
   const {isOpen,type,onCloseMain,data,onOpen}=useModal()
    const isModalOpen = isOpen && type ==="members"
    
    const {server}=data as {server:ServerWithMemberWithProfile}
    
    return (
        <>
            <Dialog open={isModalOpen} onOpenChange={onCloseMain} >
                <DialogContent className="bg-white text-black overflow-hidden">

                    <DialogHeader className="pt-8 px-6">
                        <DialogTitle className="text-center text-2xl font-bold">
Manage Members                        </DialogTitle>
                        
                    <DialogDescription className="text-center text-zinc-500">
                        {server?.members?.length} Members
                    </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="mt-8 max-h-[420px] pr-6 pl-6">
                        {server?.members?.map((member)=>{
                            return(
                                <div key={member.id} className="flex items-center gap-x-2 mb-6 hover:border-black hover:bg-zinc-400 p-3 rounded-xl">
                                    <UserAvatar src={member?.profile?.imageUrl}/>
                                    <div className="flex flex-col gap-y-1">
                                        <div className="text-xs font-semibold flex items-center">
                                            {member?.profile?.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </ScrollArea>


                </DialogContent>
            </Dialog>
        </>
    );
}
