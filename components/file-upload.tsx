"use client"
import {X} from "lucide-react"
import { UploadDropzone } from "@/lib/uploadthing"
import "@uploadthing/react/styles.css"
import Image from "next/image"
import { Button } from "@/components/ui/button"
interface FileUploadProps{
    onChange:(url?:string)=>void,
    value:string,
    endpoint:"messageFile"|"serverImage"

}
export const FileUpload=({
    onChange,
    value,
    endpoint
}:FileUploadProps )=>{
    const filetype=value?.split(".").pop();

    if(value && filetype!="pdf"){
        return(
            <div className="relative h-20 w-20">
                <Image fill src={value} alt="upload" className="rounded-full"/>
                <Button onClick={()=>onChange("")} className=" bg-rose-500 text-white p-1 absolute top-0 right-0 shadow-sw rounded-full hover:bg-rose-400 h-6 w-6" type="button">
                    <X className=""/>
                </Button>
            </div>
        )
    }
    return(
        <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res)=>{
            onChange(res?.[0].url)
        }}
        onUploadError={(error:Error)=>{
            console.log("OnUploadError",error);
            
        }}
        className="border-0"
        />
    )
}