import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import arch_linux from "/src/assets/arch_linux.png";
export default function ArchLogo() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <img src={arch_linux} alt="Arch Linux Logo" className="w-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-800 text-white">
          <DropdownMenuLabel>About my system</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>App Grid</DropdownMenuItem>
          <DropdownMenuItem>Software Center</DropdownMenuItem>
          <DropdownMenuItem>Terminal</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
