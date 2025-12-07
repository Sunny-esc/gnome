import app from '../dock/dockicons/applications-system.svg'
import bash from '../dock/dockicons/bash.svg'
import firfox from '../dock/dockicons/firefox-3.5.svg'
import vs from '../dock/dockicons/vscode.svg'
import menu from '../dock/dockicons/icon-preview-app.svg'
import cal from '../dock/dockicons/chrome-calculator.svg'
import softwarre from '../dock/dockicons/software-center.svg'
import drive from '../dock/dockicons/chrome-aghbiahbpaijignceidepookljebhfak-Default.svg'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
 
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import './draw.css'
type DrawProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function Draw({ open, onOpenChange }: DrawProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="DrawerContent bg-backdrop/50 backdrop-blur-md border-white/10">
        <DrawerHeader>
          <DrawerDescription>

        <div className="  grid grid-cols-7 mx-20 p-10 gap-4 mt-4">
        <img src={app} alt="" />
         <img src={firfox} alt="" />
         <img src={bash} alt="" />
         <img src={softwarre} alt="" />
         <img src={vs} alt="" />
         <img src={cal} alt="" />
           <img src={app} alt="" />
         <img src={firfox} alt="" />
         <img src={bash} alt="" />
         <img src={softwarre} alt="" />
         <img src={vs} alt="" />
         <img src={cal} alt="" />
         <img src={drive} alt="" />
         <img src={menu} alt=""   onClick={() => onOpenChange(true)} />

        </div>
          </DrawerDescription>

        </DrawerHeader>
        <DrawerFooter>
          
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}